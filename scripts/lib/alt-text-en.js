// Traductions anglaises pour les attributs alt="" et aria-label="" qui ne
// sont pas couverts par data-i18n (ce sont des attributs, pas du texte de
// bloc). Correspondance exacte texte FR -> EN, appliquée par translateAltAndAria().

const ALT_TEXT_EN = {
    "Logo Cocoonurse": "Cocoonurse logo",
    "Alicia Carli, puéricultrice à domicile à Genève, avec un nouveau-né":
        "Alicia Carli, newborn care specialist at home in Geneva, with a newborn",
    "Bain thérapeutique bébé à domicile, Genève": "Therapeutic baby bath at home, Geneva",
    "Soins du nouveau-né à domicile, Genève": "Newborn care at home, Geneva",
    "Soins": "Care",
    "Bébé": "Baby",
    "Maternité": "Maternity",
    "Massage bébé traditionnel, puéricultrice Genève": "Traditional baby massage, newborn care specialist Geneva",
    "Bébé dormant": "Sleeping baby",
    "Soins de bébé": "Baby care",
    "Développement du bébé": "Baby development",
    "Bébé et poussée dentaire": "Baby teething",
    "Bébé qui joue": "Baby playing",
    "Ouvrir le menu": "Open menu",
    "Instagram Cocoonurse": "Cocoonurse Instagram",
};

// Traduit tout attribut alt="" / aria-label="" du document dont la valeur
// FR exacte est présente dans ALT_TEXT_EN (laisse tel quel sinon — ex: "Twint",
// texte vide "" — pas d'erreur, ce ne sont pas des clés manquantes bloquantes).
function translateAltAndAria(document) {
    ['alt', 'aria-label'].forEach((attr) => {
        document.querySelectorAll(`[${attr}]`).forEach((el) => {
            const value = el.getAttribute(attr);
            if (ALT_TEXT_EN[value]) el.setAttribute(attr, ALT_TEXT_EN[value]);
        });
    });
}

module.exports = { ALT_TEXT_EN, translateAltAndAria };
