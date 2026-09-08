// Génère en/index.html (version statique anglaise) à partir de index.html + translations.js.
// À relancer manuellement après toute modification de contenu FR (structure ou texte) :
//   node scripts/generate-en.js
//
// Principe : la page FR reste la source de vérité (structure HTML, data-i18n).
// Ce script clone le DOM, remplace chaque [data-i18n]/[data-i18n-placeholder]
// par sa traduction anglaise (déjà présente dans translations.js), et corrige
// les balises <head> spécifiques à la langue (title, meta, hreflang, canonical, og:*).
// Le site reste 100% statique : aucun build n'est nécessaire au déploiement.

const fs = require('fs');
const path = require('path');
const vm = require('vm');
const { JSDOM } = require('jsdom');

const ROOT = path.join(__dirname, '..');

// --- 1. Charger les traductions (fichier écrit pour le navigateur, pas un module) ---
const translationsSrc = fs.readFileSync(path.join(ROOT, 'translations.js'), 'utf8');
const sandbox = {
    window: {},
    document: { addEventListener: () => {}, querySelectorAll: () => [] },
    localStorage: { getItem: () => null, setItem: () => {} },
    console,
};
vm.createContext(sandbox);
vm.runInContext(translationsSrc, sandbox);
// `const translations` reste dans l'environnement lexical du contexte vm,
// pas sur l'objet sandbox lui-même : on le relit via une nouvelle évaluation.
const translations = vm.runInContext('translations', sandbox);
const en = translations.en;
const fr = translations.fr;

// --- 2. Charger le HTML FR ---
const html = fs.readFileSync(path.join(ROOT, 'index.html'), 'utf8');
const dom = new JSDOM(html);
const document = dom.window.document;

// --- 3. Traduire tous les éléments data-i18n / data-i18n-placeholder ---
let translated = 0;
let missing = [];
document.querySelectorAll('[data-i18n]').forEach((el) => {
    const key = el.getAttribute('data-i18n');
    const value = en[key];
    if (value === undefined) { missing.push(key); return; }
    if (key.endsWith('_html')) el.innerHTML = value;
    else el.textContent = value;
    translated++;
});
document.querySelectorAll('[data-i18n-placeholder]').forEach((el) => {
    const key = el.getAttribute('data-i18n-placeholder');
    const value = en[key];
    if (value === undefined) { missing.push(key); return; }
    el.setAttribute('placeholder', value);
    translated++;
});

if (missing.length) {
    console.warn('⚠️  Clés sans traduction EN (laissées en FR) :', [...new Set(missing)]);
}

// --- 4. Ajuster <html lang> + le flag de langue figée pour le JS runtime ---
document.documentElement.setAttribute('lang', 'en');
const langScript = document.querySelector('script:not([src])');
if (langScript && langScript.textContent.includes('COCOONURSE_LANG')) {
    langScript.textContent = "window.COCOONURSE_LANG = 'en';";
} else {
    throw new Error('Balise <script> COCOONURSE_LANG introuvable — vérifier index.html');
}

// --- 5. Head : title / meta / canonical / hreflang / OG / Twitter ---
const head = document.head;
const setMeta = (selector, attr, value) => {
    const el = head.querySelector(selector);
    if (el) el.setAttribute(attr, value);
};

document.title = 'Cocoonurse – Newborn Care Specialist & Night Nanny in Geneva';
setMeta('meta[name="description"]', 'content',
    'Certified newborn care specialist in Geneva: overnight baby care, newborn care, breastfeeding support, therapeutic baths. At-home care in Geneva, Vaud and neighboring France.');
setMeta('link[rel="canonical"]', 'href', 'https://cocoonurse.ch/en/');
setMeta('meta[property="og:title"]', 'content', 'Cocoonurse — Newborn Care Specialist & Night Nanny in Geneva');
setMeta('meta[property="og:description"]', 'content',
    'Newborn care, overnight baby care, breastfeeding support, therapeutic baths at home — Geneva, Vaud, neighboring France.');
setMeta('meta[property="og:url"]', 'content', 'https://cocoonurse.ch/en/');
setMeta('meta[property="og:locale"]', 'content', 'en_US');
setMeta('meta[name="twitter:title"]', 'content', 'Cocoonurse — Newborn Care Specialist & Night Nanny in Geneva');
setMeta('meta[name="twitter:description"]', 'content',
    'Newborn care, overnight baby care, breastfeeding support, therapeutic baths at home — Geneva, Vaud, neighboring France.');
setMeta('meta[property="og:image:alt"]', 'content', 'Alicia Carli, Cocoonurse — Newborn Care Specialist in Geneva');

// hreflang links déjà présents dans le HTML source (identiques sur les deux pages) — rien à changer.

// --- 6bis. Racine des chemins relatifs (assets) : la page FR est servie depuis "/",
// la page EN depuis "/en/" — sans ce correctif, "images/x.webp" pointerait vers
// "/en/images/x.webp" (404). On préfixe donc tout chemin relatif (pas déjà
// absolu, pas une ancre, pas un protocole externe) par "/".
const RELATIVE_OK = /^(https?:|\/|#|mailto:|tel:|data:|javascript:)/i;
document.querySelectorAll('[src], [href]').forEach((el) => {
    ['src', 'href'].forEach((attr) => {
        const value = el.getAttribute(attr);
        if (value && !RELATIVE_OK.test(value)) {
            el.setAttribute(attr, '/' + value);
        }
    });
});
// Idem pour les background-image en style inline : url('images/...') -> url('/images/...')
// (querySelectorAll avec un sélecteur contenant "(" trébuche sur le moteur CSS de jsdom,
// on filtre donc à la main plutôt qu'avec [style*="url("])
Array.from(document.querySelectorAll('[style]'))
    .filter((el) => el.getAttribute('style').includes('url('))
    .forEach((el) => {
        const style = el.getAttribute('style');
        const fixed = style.replace(/url\((['"]?)(?!https?:|\/|data:)([^'")]+)\1\)/g, "url('/$2')");
        el.setAttribute('style', fixed);
    });

// --- 6. Corriger les liens ancre internes (#about etc. restent valides, structure identique) ---
// Les boutons FR/EN pointent déjà vers "/" et "/en/" dans le HTML source : rien à faire ici,
// mais on force l'état "actif" visuel sur EN au lieu de FR.
document.querySelectorAll('a.lang-btn').forEach((a) => {
    if (a.getAttribute('data-lang') === 'en') a.setAttribute('aria-current', 'true');
    else a.removeAttribute('aria-current');
});

// --- 7. Écrire le fichier ---
const outDir = path.join(ROOT, 'en');
fs.mkdirSync(outDir, { recursive: true });
const output = '<!DOCTYPE html>\n' + dom.serialize().replace(/^<!DOCTYPE html>\n?/i, '');
fs.writeFileSync(path.join(outDir, 'index.html'), output, 'utf8');

console.log(`✅ en/index.html généré (${translated} éléments traduits, ${missing.length} clés manquantes).`);
