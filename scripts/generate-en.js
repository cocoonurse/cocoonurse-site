// Génère en/index.html (version statique anglaise) à partir de index.html + translations.js.
// À relancer manuellement après toute modification de contenu FR (structure ou texte) :
//   node scripts/generate-en.js
//
// Principe : la page FR reste la source de vérité (structure HTML, data-i18n).
// Ce script clone le DOM, remplace chaque [data-i18n]/[data-i18n-placeholder]
// par sa traduction anglaise (déjà présente dans translations.js), et corrige
// les balises <head> spécifiques à la langue (title, meta, hreflang, canonical, og:*).
// Le site reste 100% statique : aucun build n'est nécessaire au déploiement.
//
// Voir aussi scripts/build-service-pages.js, qui utilise la même logique de
// traduction (scripts/lib/translate-en.js) pour les pages dédiées.

const fs = require('fs');
const path = require('path');
const vm = require('vm');
const { JSDOM } = require('jsdom');
const { translateDocumentToEnglish, rootifyRelativePaths } = require('./lib/translate-en');

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

// --- 2. Charger le HTML FR ---
const html = fs.readFileSync(path.join(ROOT, 'index.html'), 'utf8');
const dom = new JSDOM(html);
const document = dom.window.document;

// --- 3. Traduire tous les éléments data-i18n / data-i18n-placeholder ---
const { translated, missing } = translateDocumentToEnglish(document, en);
if (missing.length) {
    console.warn('⚠️  Clés sans traduction EN (laissées en FR) :', [...new Set(missing)]);
}

// --- 4. Head : title / meta / canonical / hreflang / OG / Twitter ---
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

// --- 5. Chemins relatifs -> absolus depuis "/" (la page est servie depuis /en/) ---
rootifyRelativePaths(document);

// --- 6. État visuel actif du sélecteur de langue ---
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
