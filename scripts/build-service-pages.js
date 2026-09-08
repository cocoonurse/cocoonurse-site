// Génère les pages dédiées (FR + EN) à partir de fragments réutilisés depuis
// index.html (cartes services, tarifs, FAQ) + de contenu propre à chaque page
// (clés data-i18n ajoutées dans translations.js, préfixées pageNight/pagePueri/pageTarifs).
//
// À relancer après toute modif de index.html/translations.js touchant les
// fragments réutilisés (cartes de service, cartes de tarifs, questions FAQ) :
//   node scripts/build-service-pages.js
//
// Chaque page vit dans son propre dossier (ex. /garde-de-nuit-bebe-geneve/index.html)
// pour avoir une URL propre sans .html, comme /en/. Voir ARCHITECTURE.md.

const fs = require('fs');
const path = require('path');
const vm = require('vm');
const { JSDOM } = require('jsdom');
const { translateDocumentToEnglish, rootifyRelativePaths } = require('./lib/translate-en');

const ROOT = path.join(__dirname, '..');
const SITE = 'https://cocoonurse.ch';

// --- Traductions ---
const translationsSrc = fs.readFileSync(path.join(ROOT, 'translations.js'), 'utf8');
const sandbox = {
    window: {},
    document: { addEventListener: () => {}, querySelectorAll: () => [] },
    localStorage: { getItem: () => null, setItem: () => {} },
    console,
};
vm.createContext(sandbox);
vm.runInContext(translationsSrc, sandbox);
const translations = vm.runInContext('translations', sandbox);
const fr = translations.fr;
const en = translations.en;

const homeHtml = fs.readFileSync(path.join(ROOT, 'index.html'), 'utf8');
function loadSourceDocument() {
    return new JSDOM(homeHtml).window.document;
}

// --- Helpers d'extraction de fragments depuis la page d'accueil ---
// Les fragments réutilisés (cartes services, section tarifs) contiennent parfois
// un lien "En savoir plus" qui a du sens sur la home mais serait un lien vers
// lui-même une fois réutilisé sur sa propre page dédiée : on le retire au clonage.
function stripSelfLinks(node) {
    node.querySelectorAll('.card-more-link').forEach((el) => el.remove());
    return node;
}

function extractCard(doc, key, selector = '.rounded-2xl') {
    const el = doc.querySelector(`[data-i18n="${key}"]`);
    if (!el) throw new Error(`Clé introuvable dans index.html : ${key}`);
    const card = el.closest(selector);
    if (!card) throw new Error(`Ancêtre "${selector}" introuvable pour ${key}`);
    return stripSelfLinks(card.cloneNode(true));
}

function extractSection(doc, id) {
    const el = doc.getElementById(id);
    if (!el) throw new Error(`Section #${id} introuvable`);
    return stripSelfLinks(el.cloneNode(true));
}

const FAQ_TEXT = {}; // n -> { q, a } (FR), rempli à la volée depuis fr

// --- Nav / footer partagés, adaptés pour une page dans un sous-dossier ---
function buildNav(doc, pathFr, pathEn) {
    const nav = doc.querySelector('nav').cloneNode(true);
    const logo = nav.querySelector('a[href="#"]');
    if (logo) logo.setAttribute('href', '/');
    nav.querySelectorAll('a[href^="#"]').forEach((a) => {
        a.setAttribute('href', '/' + a.getAttribute('href'));
    });
    nav.querySelectorAll('a.lang-btn').forEach((a) => {
        const lang = a.getAttribute('data-lang');
        a.setAttribute('href', lang === 'fr' ? pathFr : pathEn);
    });
    return nav;
}

function buildTail(doc) {
    const children = Array.from(doc.body.children);
    const idx = children.findIndex((el) => el.tagName === 'FOOTER');
    const tail = children.slice(idx).map((el) => el.cloneNode(true));
    tail[0].querySelectorAll('a[href^="#"]').forEach((a) => {
        a.setAttribute('href', '/' + a.getAttribute('href'));
    });
    return tail;
}

// --- Head réutilisable (fonts, tailwind, style.css, favicon, GA) ---
function buildBaseHead(doc) {
    const head = doc.head.cloneNode(true);
    // Retirer ce qui est spécifique à la home et sera reconstruit par page :
    ['title', 'meta[name="description"]', 'link[rel="canonical"]',
     'link[rel="alternate"]', 'meta[property^="og:"]', 'meta[name^="twitter:"]',
     'link[rel="preload"][as="image"]']
        .forEach((sel) => head.querySelectorAll(sel).forEach((el) => el.remove()));
    // Retirer les 2 JSON-LD de la home (LocalBusiness + FAQPage) : reconstruits par page.
    head.querySelectorAll('script[type="application/ld+json"]').forEach((el) => el.remove());
    return head;
}

function localBusinessJsonLd(doc) {
    const scripts = Array.from(doc.head.querySelectorAll('script[type="application/ld+json"]'));
    const match = scripts.find((s) => s.textContent.includes('"LocalBusiness"'));
    return JSON.parse(match.textContent);
}

function faqPageJsonLd(numbers) {
    return {
        '@context': 'https://schema.org',
        '@type': 'FAQPage',
        mainEntity: numbers.map((n) => ({
            '@type': 'Question',
            name: fr[`faq${n}Q`],
            acceptedAnswer: { '@type': 'Answer', text: fr[`faq${n}A`].replace(/ — voir la section Tarifs.*$/, '.') },
        })),
    };
}

function breadcrumbJsonLd(name, url) {
    return {
        '@context': 'https://schema.org',
        '@type': 'BreadcrumbList',
        itemListElement: [
            { '@type': 'ListItem', position: 1, name: 'Cocoonurse', item: SITE + '/' },
            { '@type': 'ListItem', position: 2, name, item: url },
        ],
    };
}

function addJsonLd(doc, obj) {
    const s = doc.createElement('script');
    s.type = 'application/ld+json';
    s.textContent = '\n' + JSON.stringify(obj, null, 2) + '\n';
    doc.head.appendChild(s);
}

function el(doc, html) {
    const wrap = doc.createElement('div');
    wrap.innerHTML = html;
    return Array.from(wrap.children);
}

// --- Bloc breadcrumb visuel ---
function breadcrumbBar(doc, breadcrumbKey, breadcrumbFallback) {
    return el(doc, `
    <nav aria-label="Breadcrumb" class="container mx-auto px-6 pt-28 pb-2 text-xs text-sand-500">
        <a href="/" class="hover:text-champagne-600 transition" data-i18n="breadcrumbHome">Accueil</a>
        <span class="mx-1">/</span>
        <span class="text-sand-700" data-i18n="${breadcrumbKey}">${breadcrumbFallback}</span>
    </nav>`)[0];
}

// --- Bandeau titre de page ---
function pageHeader(doc, { kickerKey, kickerFallback, h1Key, h1Fallback, introKey, introFallback }) {
    return el(doc, `
    <header class="container mx-auto max-w-3xl px-6 pb-10 text-center">
        <p class="text-xs font-semibold uppercase tracking-wider mb-3" style="color:#D4899D;" data-i18n="${kickerKey}">${kickerFallback}</p>
        <h1 class="text-3xl md:text-4xl font-serif font-bold mb-6 text-champagne-700">
            <span data-i18n="${h1Key}">${h1Fallback}</span>
        </h1>
        <p class="text-sand-700 leading-relaxed text-left md:text-center" data-i18n="${introKey}">${introFallback}</p>
    </header>`)[0];
}

// --- CTA final réutilisé sur les 3 pages ---
function ctaBand(doc, { titleKey, titleFallback, textKey, textFallback }) {
    return el(doc, `
    <section class="py-16 px-6 text-center" style="background: linear-gradient(135deg, #FFF0F5, #FAE8EF);">
        <h2 class="text-2xl md:text-3xl font-serif font-bold mb-3 text-champagne-700" data-i18n="${titleKey}">${titleFallback}</h2>
        <p class="text-sand-600 mb-6 max-w-xl mx-auto" data-i18n="${textKey}">${textFallback}</p>
        <a href="https://wa.me/41784500624" target="_blank" class="inline-flex items-center gap-2 text-white px-8 py-4 rounded-full font-medium text-sm" style="background: linear-gradient(135deg, #E6A8B8 0%, #D4899D 100%); box-shadow: 0 6px 20px rgba(230,168,184,0.4);">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="white"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg>
            <span data-i18n="howCta">Commencer — Réponse sous 2h</span>
        </a>
        <p class="mt-4 text-xs text-sand-500"><a href="/#faq" class="underline hover:text-champagne-600" data-i18n="ctaViewFullFaq">Voir toutes les questions →</a></p>
    </section>`)[0];
}

function sectionTitle(doc, text, key) {
    return el(doc, `<h2 class="text-2xl md:text-3xl font-serif font-bold text-center mb-10 text-champagne-700" data-i18n="${key}">${text}</h2>`)[0];
}

function faqSection(doc, { titleKey, titleFallback, numbers }) {
    const wrapper = el(doc, `
    <section class="container mx-auto max-w-3xl px-6 py-4">
        <h2 class="text-2xl md:text-3xl font-serif font-bold text-center mb-10 text-champagne-700" data-i18n="${titleKey}">${titleFallback}</h2>
        <div class="space-y-4"></div>
    </section>`)[0];
    const container = wrapper.querySelector('.space-y-4');
    numbers.forEach((n) => container.appendChild(extractCard(doc, `faq${n}Q`, '.rounded-2xl')));
    return wrapper;
}

function testimonialSection(doc, textKey, textFallback, name) {
    return el(doc, `
    <section class="container mx-auto max-w-2xl px-6 py-14 text-center">
        <h2 class="text-2xl font-serif font-bold mb-8 text-champagne-700" data-i18n="sharedTestimonialTitle">Ils m'ont fait confiance</h2>
        <div class="bg-white p-8 rounded-lg shadow-md">
            <div class="text-champagne-500 text-xl mb-3">★★★★★</div>
            <p class="text-lg italic mb-4" data-i18n="${textKey}">${textFallback}</p>
            <p class="font-semibold">${name}</p>
        </div>
    </section>`)[0];
}

function zoneSection(doc) {
    const wrapper = el(doc, `
    <section class="container mx-auto max-w-2xl px-6 py-10">
        <h2 class="text-2xl font-serif font-bold text-center mb-6 text-champagne-700" data-i18n="sharedZoneTitle">Zone d'intervention</h2>
    </section>`)[0];
    const zoneGrid = doc.querySelector('[data-i18n="aboutZone1"]').closest('.grid');
    wrapper.appendChild(zoneGrid.cloneNode(true));
    return wrapper;
}

// ============================================================
// PAGE 1 — Garde de Nuit Bébé Genève
// ============================================================
function buildNightMain(doc) {
    const main = doc.createElement('main');
    main.appendChild(breadcrumbBar(doc, 'pageNightBreadcrumb', fr.pageNightBreadcrumb));
    main.appendChild(pageHeader(doc, {
        kickerKey: 'pageNightKicker', kickerFallback: fr.pageNightKicker,
        h1Key: 'pageNightH1', h1Fallback: fr.pageNightH1,
        introKey: 'pageNightIntro_html', introFallback: fr.pageNightIntro_html,
    }));

    const includedSection = doc.createElement('section');
    includedSection.className = 'container mx-auto max-w-3xl px-6 py-8';
    includedSection.appendChild(sectionTitle(doc, fr.pageNightIncludedTitle, 'pageNightIncludedTitle'));
    includedSection.appendChild(extractCard(doc, 'servCard2Title'));
    main.appendChild(includedSection);

    const formulasSection = doc.createElement('section');
    formulasSection.className = 'container mx-auto max-w-6xl px-6 py-10';
    formulasSection.appendChild(sectionTitle(doc, fr.pageNightFormulasTitle, 'pageNightFormulasTitle'));
    const formulasSub = el(doc, `<p class="text-center text-sand-600 text-sm mb-10 -mt-6" data-i18n="pageNightFormulasSubtitle">${fr.pageNightFormulasSubtitle}</p>`)[0];
    formulasSection.appendChild(formulasSub);
    const grid = doc.createElement('div');
    grid.className = 'grid md:grid-cols-3 gap-6';
    ['pric1Title', 'pric2Title', 'pric3Title'].forEach((k) => grid.appendChild(extractCard(doc, k)));
    formulasSection.appendChild(grid);
    formulasSection.appendChild(el(doc, `<p class="text-center mt-8"><a href="/tarifs/" class="text-sm font-medium underline hover:text-champagne-600" style="color:#D4899D;" data-i18n="ctaSeeAllPricing">${fr.ctaSeeAllPricing}</a></p>`)[0]);
    main.appendChild(formulasSection);

    const whySection = doc.createElement('section');
    whySection.className = 'container mx-auto max-w-5xl px-6 py-10';
    whySection.appendChild(sectionTitle(doc, fr.sharedWhyTitle, 'sharedWhyTitle'));
    const whyGrid = doc.querySelector('[data-i18n="whyVal1Title"]').closest('.grid');
    whySection.appendChild(whyGrid.cloneNode(true));
    main.appendChild(whySection);

    main.appendChild(zoneSection(doc));
    main.appendChild(testimonialSection(doc, 'testimonial3Text', fr.testimonial3Text, 'Camille D.'));
    main.appendChild(faqSection(doc, { titleKey: 'pageNightFaqTitle', titleFallback: fr.pageNightFaqTitle, numbers: [3, 4, 6, 7, 8] }));
    main.appendChild(ctaBand(doc, {
        titleKey: 'pageNightCtaTitle', titleFallback: fr.pageNightCtaTitle,
        textKey: 'pageNightCtaText', textFallback: fr.pageNightCtaText,
    }));
    return main;
}

// ============================================================
// PAGE 2 — Puéricultrice à Domicile Genève
// ============================================================
function buildPueriMain(doc) {
    const main = doc.createElement('main');
    main.appendChild(breadcrumbBar(doc, 'pagePueriBreadcrumb', fr.pagePueriBreadcrumb));
    main.appendChild(pageHeader(doc, {
        kickerKey: 'pagePueriKicker', kickerFallback: fr.pagePueriKicker,
        h1Key: 'pagePueriH1', h1Fallback: fr.pagePueriH1,
        introKey: 'pagePueriIntro_html', introFallback: fr.pagePueriIntro_html,
    }));

    const includedSection = doc.createElement('section');
    includedSection.className = 'container mx-auto max-w-3xl px-6 py-8';
    includedSection.appendChild(sectionTitle(doc, fr.pagePueriIncludedTitle, 'pagePueriIncludedTitle'));
    includedSection.appendChild(extractCard(doc, 'servCard1Title'));
    main.appendChild(includedSection);

    const diffSection = el(doc, `
    <section class="container mx-auto max-w-3xl px-6 py-6">
        <div class="rounded-2xl p-8" style="background: linear-gradient(135deg, rgba(230,168,184,0.12), rgba(212,137,157,0.08)); border:1px solid rgba(212,137,157,0.25);">
            <h2 class="text-xl font-serif font-bold mb-3 text-champagne-700" data-i18n="pagePueriDiffTitle">${fr.pagePueriDiffTitle}</h2>
            <p class="text-sm text-sand-700 leading-relaxed" data-i18n="faq9A">${fr.faq9A}</p>
        </div>
    </section>`)[0];
    main.appendChild(diffSection);

    const qualifSection = doc.createElement('section');
    qualifSection.className = 'container mx-auto max-w-2xl px-6 py-8';
    qualifSection.appendChild(sectionTitle(doc, fr.pagePueriQualifTitle, 'pagePueriQualifTitle'));
    const qualifBox = doc.querySelector('[data-i18n="aboutQualTitle"]').closest('.rounded-2xl');
    qualifSection.appendChild(qualifBox.cloneNode(true));
    main.appendChild(qualifSection);

    const formulasSection = doc.createElement('section');
    formulasSection.className = 'container mx-auto max-w-4xl px-6 py-10';
    formulasSection.appendChild(sectionTitle(doc, fr.pageNightFormulasTitle, 'pageNightFormulasTitle'));
    const grid = doc.createElement('div');
    grid.className = 'grid md:grid-cols-2 gap-6 max-w-2xl mx-auto';
    ['pric2Title', 'pric3Title'].forEach((k) => grid.appendChild(extractCard(doc, k)));
    formulasSection.appendChild(grid);
    formulasSection.appendChild(el(doc, `<p class="text-center mt-8"><a href="/tarifs/" class="text-sm font-medium underline hover:text-champagne-600" style="color:#D4899D;" data-i18n="ctaSeeAllPricing">${fr.ctaSeeAllPricing}</a></p>`)[0]);
    main.appendChild(formulasSection);

    const whySection = doc.createElement('section');
    whySection.className = 'container mx-auto max-w-5xl px-6 py-10';
    whySection.appendChild(sectionTitle(doc, fr.sharedWhyTitle, 'sharedWhyTitle'));
    const whyGrid = doc.querySelector('[data-i18n="whyVal1Title"]').closest('.grid');
    whySection.appendChild(whyGrid.cloneNode(true));
    main.appendChild(whySection);

    main.appendChild(zoneSection(doc));
    main.appendChild(testimonialSection(doc, 'testimonial1Text', fr.testimonial1Text, 'Sophie M.'));
    main.appendChild(faqSection(doc, { titleKey: 'pagePueriFaqTitle', titleFallback: fr.pagePueriFaqTitle, numbers: [1, 2, 5, 7, 8] }));
    main.appendChild(ctaBand(doc, {
        titleKey: 'pagePueriCtaTitle', titleFallback: fr.pagePueriCtaTitle,
        textKey: 'pagePueriCtaText', textFallback: fr.pagePueriCtaText,
    }));
    return main;
}

// ============================================================
// PAGE 3 — Tarifs
// ============================================================
function buildTarifsMain(doc) {
    const main = doc.createElement('main');
    main.appendChild(breadcrumbBar(doc, 'pageTarifsBreadcrumb', fr.pageTarifsBreadcrumb));
    main.appendChild(pageHeader(doc, {
        kickerKey: 'pageTarifsKicker', kickerFallback: fr.pageTarifsKicker,
        h1Key: 'pageTarifsH1', h1Fallback: fr.pageTarifsH1,
        introKey: 'pageTarifsIntro_html', introFallback: fr.pageTarifsIntro_html,
    }));

    const choiceSection = el(doc, `
    <section class="container mx-auto max-w-3xl px-6 py-6">
        <div class="rounded-2xl p-8" style="background: linear-gradient(135deg, rgba(230,168,184,0.12), rgba(212,137,157,0.08)); border:1px solid rgba(212,137,157,0.25);">
            <h2 class="text-xl font-serif font-bold mb-3 text-champagne-700" data-i18n="pageTarifsChoiceTitle">${fr.pageTarifsChoiceTitle}</h2>
            <p class="text-sm text-sand-700 leading-relaxed" data-i18n="pageTarifsChoice_html">${fr.pageTarifsChoice_html}</p>
        </div>
    </section>`)[0];
    main.appendChild(choiceSection);

    // Section tarifs complète réutilisée telle quelle (titre pricMainTitle inclus)
    main.appendChild(extractSection(doc, 'pricing'));

    main.appendChild(testimonialSection(doc, 'testimonial1Text', fr.testimonial1Text, 'Sophie M.'));
    main.appendChild(faqSection(doc, { titleKey: 'pageTarifsFaqTitle', titleFallback: fr.pageTarifsFaqTitle, numbers: [5, 6, 8] }));
    main.appendChild(ctaBand(doc, {
        titleKey: 'pageTarifsCtaTitle', titleFallback: fr.pageTarifsCtaTitle,
        textKey: 'pageTarifsCtaText', textFallback: fr.pageTarifsCtaText,
    }));
    return main;
}

// ============================================================
// Assemblage générique d'une page + écriture FR/EN
// ============================================================
const PAGES = [
    {
        slug: 'garde-de-nuit-bebe-geneve',
        buildMain: buildNightMain,
        breadcrumbName: fr.pageNightBreadcrumb,
        titleFr: 'Garde de Nuit Bébé à Genève | Cocoonurse — Puéricultrice Diplômée',
        descFr: "Garde de nuit bébé à domicile à Genève par une puéricultrice diplômée, 11 ans d'expérience en néonatologie. Nuit découverte dès 300 CHF. Réponse sous 2h.",
        titleEn: 'Overnight Baby Care in Geneva | Cocoonurse — Certified Newborn Specialist',
        descEn: 'At-home overnight baby care in Geneva by a certified newborn care specialist with 11 years of neonatal experience. Discovery night from CHF 300. Reply within 2 hours.',
        faqNumbers: [3, 4, 6, 7, 8],
        serviceName: 'Garde de Nuit Bébé',
        serviceOfferNames: ['Nuit Découverte', 'Pack Retour Maison', 'Semaine Sérénité'],
    },
    {
        slug: 'puericultrice-domicile-geneve',
        buildMain: buildPueriMain,
        breadcrumbName: fr.pagePueriBreadcrumb,
        titleFr: 'Puéricultrice à Domicile à Genève | Cocoonurse',
        descFr: "Puéricultrice diplômée à domicile à Genève : soins du nouveau-né, allaitement, surveillance médicale, jour et nuit. 11 ans d'expérience en néonatologie aux HUG.",
        titleEn: 'Home Newborn Care Specialist in Geneva | Cocoonurse',
        descEn: 'Certified newborn care specialist at home in Geneva: newborn care, breastfeeding support, medical monitoring, day and night. 11 years of neonatal experience at HUG.',
        faqNumbers: [1, 2, 5, 7, 8],
        serviceName: 'Puéricultrice à Domicile',
        serviceOfferNames: ['Pack Retour Maison', 'Semaine Sérénité'],
    },
    {
        slug: 'tarifs',
        buildMain: buildTarifsMain,
        breadcrumbName: fr.pageTarifsBreadcrumb,
        titleFr: 'Tarifs Garde de Nuit & Puéricultrice à Genève | Cocoonurse',
        descFr: 'Tarifs transparents : garde de nuit dès 300 CHF, pack retour maison, semaine sérénité, massage bébé, bain thalasso. Devis gratuit, réponse sous 2h.',
        titleEn: 'Overnight Care & Newborn Specialist Pricing in Geneva | Cocoonurse',
        descEn: 'Transparent pricing: overnight care from CHF 300, homecoming package, serenity week, baby massage, thalasso bath. Free quote, reply within 2 hours.',
        faqNumbers: [5, 6, 8],
        serviceName: null, // page tarifs : pas de Service schema dédié, la home + les 2 autres pages suffisent
    },
];

function buildPage(page) {
    const doc = loadSourceDocument();
    const url = `${SITE}/${page.slug}/`;
    const urlEn = `${SITE}/en/${page.slug}/`;

    // <head>
    const head = buildBaseHead(doc);
    const title = doc.createElement('title');
    title.textContent = page.titleFr;
    head.appendChild(title);
    const meta = (name, content, isProperty) => {
        const m = doc.createElement('meta');
        m.setAttribute(isProperty ? 'property' : 'name', name);
        m.setAttribute('content', content);
        head.appendChild(m);
    };
    meta('description', page.descFr);
    const canonical = doc.createElement('link');
    canonical.setAttribute('rel', 'canonical');
    canonical.setAttribute('href', url);
    head.appendChild(canonical);
    [['fr', url], ['en', urlEn], ['x-default', url]].forEach(([hreflang, href]) => {
        const l = doc.createElement('link');
        l.setAttribute('rel', 'alternate');
        l.setAttribute('hreflang', hreflang);
        l.setAttribute('href', href);
        head.appendChild(l);
    });
    meta('og:title', page.titleFr, true);
    meta('og:description', page.descFr, true);
    meta('og:type', 'website', true);
    meta('og:url', url, true);
    meta('og:image', `${SITE}/images/hero-new.webp`, true);
    meta('og:image:alt', 'Alicia Carli, Cocoonurse — Maternity Nurse à Genève', true);
    meta('og:locale', 'fr_CH', true);
    meta('twitter:card', 'summary_large_image');
    meta('twitter:title', page.titleFr);
    meta('twitter:description', page.descFr);
    meta('twitter:image', `${SITE}/images/hero-new.webp`);

    doc.head.replaceWith(head);

    // JSON-LD : LocalBusiness (identique à la home) + Breadcrumb + FAQ (sous-ensemble de la page)
    addJsonLd(doc, localBusinessJsonLd(loadSourceDocument()));
    addJsonLd(doc, breadcrumbJsonLd(page.breadcrumbName, url));
    addJsonLd(doc, faqPageJsonLd(page.faqNumbers));

    // <body>
    const nav = buildNav(doc, `/${page.slug}/`, `/en/${page.slug}/`);
    const main = page.buildMain(doc);
    const tail = buildTail(doc);

    doc.body.innerHTML = '';
    doc.body.appendChild(nav);
    doc.body.appendChild(main);
    tail.forEach((node) => doc.body.appendChild(node));

    rootifyRelativePaths(doc);

    // --- Écrire la version FR ---
    const dirFr = path.join(ROOT, page.slug);
    fs.mkdirSync(dirFr, { recursive: true });
    const outFr = '<!DOCTYPE html>\n' + doc.documentElement.outerHTML;
    fs.writeFileSync(path.join(dirFr, 'index.html'), outFr, 'utf8');

    // --- Générer la version EN à partir du même DOM (déjà rootifié) ---
    const enDoc = new JSDOM(outFr).window.document;
    const { missing } = translateDocumentToEnglish(enDoc, en);
    if (missing.length) console.warn(`⚠️  [${page.slug}] clés EN manquantes :`, [...new Set(missing)]);

    enDoc.title = page.titleEn;
    const setMeta = (selector, attr, value) => {
        const elm = enDoc.head.querySelector(selector);
        if (elm) elm.setAttribute(attr, value);
    };
    setMeta('meta[name="description"]', 'content', page.descEn);
    setMeta('meta[property="og:title"]', 'content', page.titleEn);
    setMeta('meta[property="og:description"]', 'content', page.descEn);
    setMeta('meta[property="og:url"]', 'content', urlEn);
    setMeta('meta[property="og:locale"]', 'content', 'en_US');
    setMeta('meta[name="twitter:title"]', 'content', page.titleEn);
    setMeta('meta[name="twitter:description"]', 'content', page.descEn);
    setMeta('link[rel="canonical"]', 'href', urlEn);
    enDoc.querySelectorAll('a.lang-btn').forEach((a) => {
        if (a.getAttribute('data-lang') === 'en') a.setAttribute('aria-current', 'true');
        else a.removeAttribute('aria-current');
    });
    // JSON-LD Breadcrumb + FAQ en anglais (le nom de page/FAQ change de langue)
    enDoc.querySelectorAll('script[type="application/ld+json"]').forEach((s) => {
        try {
            const obj = JSON.parse(s.textContent);
            if (obj['@type'] === 'BreadcrumbList') {
                obj.itemListElement[1].name = en[Object.keys(fr).find((k) => fr[k] === page.breadcrumbName)] || page.breadcrumbName;
                obj.itemListElement[1].item = urlEn;
                obj.itemListElement[0].item = `${SITE}/en/`;
                s.textContent = '\n' + JSON.stringify(obj, null, 2) + '\n';
            } else if (obj['@type'] === 'FAQPage') {
                obj.mainEntity = page.faqNumbers.map((n) => ({
                    '@type': 'Question',
                    name: en[`faq${n}Q`],
                    acceptedAnswer: { '@type': 'Answer', text: en[`faq${n}A`].replace(/ — see the Pricing section.*$/i, '.').replace(/ — voir la section Tarifs.*$/, '.') },
                }));
                s.textContent = '\n' + JSON.stringify(obj, null, 2) + '\n';
            }
        } catch (e) { /* ignore */ }
    });

    const dirEn = path.join(ROOT, 'en', page.slug);
    fs.mkdirSync(dirEn, { recursive: true });
    const outEn = '<!DOCTYPE html>\n' + enDoc.documentElement.outerHTML;
    fs.writeFileSync(path.join(dirEn, 'index.html'), outEn, 'utf8');

    console.log(`✅ ${page.slug}/ + en/${page.slug}/ générés.`);
}

PAGES.forEach(buildPage);
