// Logique partagée : traduit un document jsdom FR -> EN in place, et corrige
// les chemins relatifs pour qu'ils restent valides depuis un sous-dossier.
// Utilisée par generate-en.js (page d'accueil) et build-service-pages.js
// (pages dédiées : garde de nuit, puéricultrice, tarifs).

const RELATIVE_OK = /^(https?:|\/|#|mailto:|tel:|data:|javascript:)/i;

function translateDocumentToEnglish(document, en) {
    let translated = 0;
    const missing = [];

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

    document.documentElement.setAttribute('lang', 'en');
    const langScript = document.querySelector('script:not([src])');
    if (langScript && langScript.textContent.includes('COCOONURSE_LANG')) {
        langScript.textContent = "window.COCOONURSE_LANG = 'en';";
    } else {
        throw new Error('Balise <script> COCOONURSE_LANG introuvable dans ce document.');
    }

    return { translated, missing };
}

// Rend absolus (depuis "/") tous les chemins relatifs d'un document, pour
// qu'il reste valide une fois servi depuis un sous-dossier (/en/, /tarifs/, etc.)
function rootifyRelativePaths(document) {
    document.querySelectorAll('[src], [href]').forEach((el) => {
        ['src', 'href'].forEach((attr) => {
            const value = el.getAttribute(attr);
            if (value && !RELATIVE_OK.test(value)) {
                el.setAttribute(attr, '/' + value);
            }
        });
    });
    Array.from(document.querySelectorAll('[style]'))
        .filter((el) => el.getAttribute('style').includes('url('))
        .forEach((el) => {
            const style = el.getAttribute('style');
            const fixed = style.replace(/url\((['"]?)(?!https?:|\/|data:)([^'")]+)\1\)/g, "url('/$2')");
            el.setAttribute('style', fixed);
        });
}

module.exports = { translateDocumentToEnglish, rootifyRelativePaths, RELATIVE_OK };
