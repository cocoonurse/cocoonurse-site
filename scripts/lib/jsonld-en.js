// Traductions anglaises pour le contenu JSON-LD (structured data), qui n'est
// pas couvert par le mécanisme data-i18n (translate-en.js) car il vit dans un
// <script type="application/ld+json"> sous forme de texte JSON, pas de DOM.
// Utilisé par generate-en.js (page d'accueil) et build-service-pages.js
// (pages dédiées, pour traduire les noms d'Offer réutilisés dans le schema Service).

const LOCAL_BUSINESS_DESCRIPTION_EN =
    "Certified newborn care specialist in Geneva — newborn care, overnight baby care, breastfeeding support, therapeutic baths, at home in Geneva and the canton of Vaud. Available 24/7.";

const KNOWS_ABOUT_EN = [
    "Home childcare", "Newborn nursing care", "Overnight baby care", "Maternity nurse",
    "Breastfeeding support", "Neonatology", "Postpartum home support", "Therapeutic baby baths",
];

const FOUNDER_JOB_TITLE_EN = "Certified Newborn Care Specialist";

const CREDENTIALS_EN = {
    "Puéricultrice diplômée": "Certified Newborn Care Specialist",
    "Auxiliaire de Puériculture CRS": "Swiss Red Cross Childcare Assistant",
    "Conseillère en allaitement certifiée": "Certified Breastfeeding Consultant",
};

// name FR -> { name, description } EN
const OFFER_TRANSLATIONS = {
    "Nuit Découverte": {
        name: "Discovery Night",
        description: "A 10-hour night (9pm-7am, flexible timing) of baby monitoring and care.",
    },
    "Nuit Longue": {
        name: "Long Night",
        description: "A 12-hour night (8pm-8am, flexible timing) of baby monitoring and care.",
    },
    "Pack Retour Maison": {
        name: "Coming Home Pack",
        description: "3 days and 3 nights with full training and WhatsApp follow-up.",
    },
    "Semaine Sérénité": {
        name: "Serenity Week",
        description: "7 full nights with care training and breastfeeding guidance.",
    },
    "Massage Bébé - Séance Découverte": {
        name: "Baby Massage - Discovery Session",
        description: "Individual at-home baby massage session, 45 to 60 minutes.",
    },
    "Massage Bébé - Pack 4 Séances": {
        name: "Baby Massage - 4-Session Pack",
        description: "4 individual at-home baby massage sessions.",
    },
    "Massage Bébé - Pack 8 Séances": {
        name: "Baby Massage - 8-Session Pack",
        description: "8 individual at-home baby massage sessions.",
    },
    "Bain Thalasso Thérapeutique": {
        name: "Therapeutic Thalasso Bath",
        description: "At-home therapeutic bath for babies from birth to 1 month old, about 1h30.",
    },
    "Bain Thalasso Thérapeutique - Pack 3 Séances": {
        name: "Therapeutic Thalasso Bath - 3-Session Pack",
        description: "3 at-home therapeutic thalasso bath sessions.",
    },
    "Consultation Sommeil et Pleurs": {
        name: "Sleep & Crying Consultation",
        description: "Personalized remote consultation (message or video) on baby sleep and crying.",
    },
    "Atelier Portage": {
        name: "Babywearing Workshop",
        description: "At-home babywearing workshop, 1h: choosing and safely learning to use a wrap, sling or carrier.",
    },
    "Sur-Mesure": {
        name: "Custom",
        description: "Full 2 to 4 week support, days and nights — twins, premature babies or high availability, custom quote.",
    },
};

// Reconstruit le FAQPage JSON-LD en anglais à partir de translations.js (en.faqNQ/faqNA),
// dans le même ordre que le FAQPage FR source (voir index.html).
function buildFaqPageEn(en) {
    const order = ['faq1', 'faq6', 'faq2', 'faq3', 'faq4', 'faq7', 'faq5', 'faq8', 'faq9'];
    return {
        '@context': 'https://schema.org',
        '@type': 'FAQPage',
        mainEntity: order.map((k) => ({
            '@type': 'Question',
            name: en[`${k}Q`],
            acceptedAnswer: {
                '@type': 'Answer',
                text: en[`${k}A`].replace(/ — see the Pricing section above.*$/, '.'),
            },
        })),
    };
}

// Traduit en place l'objet LocalBusiness JSON-LD (déjà parsé) : description,
// knowsAbout, founder.jobTitle, hasCredential[].name, offres (name + description).
function translateLocalBusiness(business) {
    business.description = LOCAL_BUSINESS_DESCRIPTION_EN;
    business.knowsAbout = KNOWS_ABOUT_EN;
    if (business.founder) {
        business.founder.jobTitle = FOUNDER_JOB_TITLE_EN;
        if (Array.isArray(business.founder.hasCredential)) {
            business.founder.hasCredential.forEach((c) => {
                if (CREDENTIALS_EN[c.name]) c.name = CREDENTIALS_EN[c.name];
            });
        }
    }
    const offers = business.hasOfferCatalog && business.hasOfferCatalog.itemListElement;
    if (Array.isArray(offers)) {
        offers.forEach((o) => {
            const tr = OFFER_TRANSLATIONS[o.name];
            if (tr) { o.description = tr.description; o.name = tr.name; }
        });
    }
    if (business.hasOfferCatalog) business.hasOfferCatalog.name = "Cocoonurse Packages";
    return business;
}

module.exports = { OFFER_TRANSLATIONS, buildFaqPageEn, translateLocalBusiness };
