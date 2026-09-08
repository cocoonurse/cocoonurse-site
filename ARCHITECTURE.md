# Cocoonurse — Architecture & État du projet

## 🟢 ÉTAT ACTUEL : SITE EN PRODUCTION

**URL live** : https://cocoonurse.ch
**GitHub** : https://github.com/cocoonurse/cocoonurse-site
**Vercel** : https://cocoonurse-site.vercel.app
**Dernière mise à jour** : 11 mars 2026

---

## 1. Description du projet

- **Nom** : Cocoonurse
- **Type** : Site vitrine statique (HTML / CSS / JS pur — aucun framework)
- **Propriétaire** : Alicia Carli, Maternity Nurse à Genève
- **Domaine** : `cocoonurse.ch` (acheté et géré sur **Infomaniak**)
- **Email professionnel** : contact@cocoonurse.ch
- **WhatsApp** : +41 78 450 06 24
- **Instagram** : @cocoonurse → https://www.instagram.com/cocoonurse

---

## 2. Structure des fichiers

```
cocoonurse-site/
├── index.html              ← Page unique (one-page)
├── style.css               ← Styles personnalisés
├── script.js               ← Logique JS (formulaire, FAQ, read-more, etc.)
├── translations.js         ← Système i18n FR/EN complet
├── sitemap.xml             ← SEO (avec hreflang FR/EN)
├── robots.txt              ← SEO
├── vercel.json             ← Headers cache + sécurité
├── tailwind.config.js      ← Config Tailwind (champagne + sand colors)
├── playwright.config.js    ← Config tests Playwright
├── package.json            ← Dependencies (sharp, playwright, etc.)
├── .gitignore              ← node_modules, dist, playwright-mcp, etc.
├── googleabc3e404318ba26a.html ← Vérification Google Search Console
├── ARCHITECTURE.md         ← CE FICHIER
├── components/
│   ├── contact-modal.js
│   ├── 3d-card.js
│   ├── floating-hearts.js
│   └── floating-particles.js
├── tests/
│   └── cocoonurse.spec.js  ← 13 tests Playwright (13/13 ✅)
├── images/
│   ├── hero-new.webp           ← Photo hero (900×1350, 78KB, nouvelle photo)
│   ├── Cocoonurse-trim.webp    ← Logo (mix-blend-mode: multiply)
│   ├── pied2.webp              ← Galerie
│   ├── ik-naitre-grandir.webp  ← Galerie
│   ├── ventre.webp             ← Galerie
│   ├── bebe-se-couvre-visage-en-dormant.webp ← Galerie
│   ├── bebe-joue-voiture-bois.webp           ← Galerie
│   └── [autres images WebP optimisées]
└── dist/                   ← Fichiers minifiés (non utilisés en prod)
```

---

## 3. Git & Déploiement

### Git
- **Repo GitHub** : https://github.com/cocoonurse/cocoonurse-site
- **Branche** : `master`
- **Compte GitHub CLI** : `cocoonurse`

```bash
# Pour pousser une mise à jour
export PATH="$PATH:/mingw64/bin:/usr/bin"
git add [fichiers]
git commit -m "message"
git push
```

### Vercel
- **Compte** : aliciacarli2-8537s-projects
- **Binaire** : `/c/Users/alici/AppData/Roaming/npm/vercel`

```bash
# Pour déployer
/c/Users/alici/AppData/Roaming/npm/vercel --prod --yes
```

### DNS Infomaniak
- `A @ 76.76.21.21`
- `A www 76.76.21.21`
- `TXT _acme-challenge` (certificat SSL Let's Encrypt)
- `TXT _acme-challenge.www` (certificat SSL Let's Encrypt)

---

## 4. Sélecteurs HTML importants

| Élément | Sélecteur |
|---|---|
| Bouton hamburger | `#menu-btn` |
| Menu mobile | `#mobile-menu` |
| Logo contact | `#contact-logo-img` |
| Wrapper logo contact | `#contact-logo-wrap` |
| Grille galerie | `.masonry-grid` |
| Items galerie | `.masonry-item` (×9) |

---

## 5. Système de traduction i18n — 2 pages statiques (08/09/2026)

- **`/` (FR)** et **`/en/` (EN)** sont deux pages HTML statiques distinctes, chacune dans sa langue,
  avec `hreflang` réciproques + `x-default` sur FR. Avant, un simple toggle JS changeait le texte
  sur une seule URL — Google n'indexait alors que le FR. Ce n'est plus le cas.
- `index.html` (FR) reste la **source de vérité** : toute modif de structure/texte FR doit être
  refaite manuellement, PUIS régénérer l'anglais avec `node scripts/generate-en.js`
  (relit `index.html` + `translations.js`, réécrit `en/index.html` en remplaçant chaque
  `[data-i18n]`/`[data-i18n-placeholder]` par sa traduction EN, et rend tous les chemins
  relatifs — images/CSS/JS — absolus depuis `/`, indispensable car `/en/` n'est pas à la racine).
- Attribut `data-i18n="clé"` → remplace `textContent` ; `data-i18n="clé_html"` → remplace `innerHTML`.
- Le contenu injecté en JS au runtime (témoignages, bouton copier de la modale contact, boutons
  "lire plus", aria-labels) lit `translations[currentLang]`, où `currentLang` est figé par page via
  `window.COCOONURSE_LANG` défini en tête du `<head>` (`'fr'` ou `'en'`) — plus de dépendance au
  `localStorage` pour le rendu initial, ce qui évite un flash de mauvaise langue et garantit que
  Googlebot voit toujours la bonne langue sans exécuter de JS.
- Langues disponibles : `fr` et `en`. Fichier : `translations.js`. Générateur : `scripts/generate-en.js`
  (dépendance dev `jsdom`, utilisée uniquement en local — jamais au runtime/déploiement).

## 5bis. Pages dédiées par service (08/09/2026, complété le 08/09/2026)

2e recommandation de l'audit SEO du 07/09 : une seule page à ancres a moins de surface de mots-clés
que les concurrents multi-pages (topnanny.ch, bee-boo.ch, yoopies.ch...). 7 pages créées (toutes les
prestations du site ont maintenant leur page dédiée) :

- `/garde-de-nuit-bebe-geneve/` (+ `/en/...`)
- `/puericultrice-domicile-geneve/` (+ `/en/...`)
- `/tarifs/` (+ `/en/...`)
- `/bain-thalasso-bebe-geneve/` (+ `/en/...`)
- `/massage-bebe-geneve/` (+ `/en/...`)
- `/consultation-sommeil-bebe/` (+ `/en/...`)
- `/retour-maternite-geneve/` (+ `/en/...`)

Générées par **`scripts/build-service-pages.js`** — à relancer après toute modif de
index.html/translations.js touchant les fragments réutilisés (cartes de service, cartes de
tarifs, questions FAQ, qualifications, zones) :
```bash
node scripts/build-service-pages.js
```
Principe : le script charge `index.html`, **réutilise par clonage** les fragments déjà existants
(cartes de service 1-8, cartes tarifs pric1-11, questions FAQ existantes, bloc qualifications, zone
d'intervention, section tarifs complète) pour rester single-source-of-truth sur les prix/contenus, et
n'ajoute que du contenu réellement nouveau (intro par page, titres de section, différenciateur
puéricultrice/garde d'enfant/infirmière, 9 nouvelles questions FAQ propres au bain/massage/sommeil)
via de nouvelles clés `translations.js` préfixées `pageNight*` / `pagePueri*` / `pageTarifs*` /
`pageBain*` / `pageMassage*` / `pageSommeil*` / `pageRetour*`. Les questions FAQ nouvelles
(`faqBain1`, `faqMassage1`, etc.) n'existent que dans `translations.js`, pas dans `index.html` — les
cartes FAQ sont donc **construites depuis les clés** (`buildFaqCard`), pas extraites du DOM source,
contrairement aux autres fragments réutilisés.

Chaque page a son propre JSON-LD : `BreadcrumbList` + `FAQPage` (limité aux questions affichées) +
`LocalBusiness` repris tel quel + **`Service`** (nom du service, `provider` pointant vers le
`LocalBusiness` via `@id`, `areaServed`, et les `Offer` correspondants piochés dans le
`hasOfferCatalog` de la home par nom — absent uniquement sur `/tarifs/`, qui n'est pas un service en
soi). La version EN est générée à partir du même DOM via `scripts/lib/translate-en.js` (logique
partagée avec `generate-en.js`).

Liens internes : chaque carte de service (1, 2, 5, 6, 7) + le titre de la section tarifs + la carte
Pack Retour Maison sur la home pointent vers la page correspondante (`.card-more-link`, retiré
automatiquement quand le fragment est réutilisé sur sa propre page pour éviter un lien vers
soi-même) ; le footer (partagé sur toutes les pages) liste les 2 pages principales + tarifs.

**Si on ajoute encore un service** (ex. Atelier Portage, seul servCard8 encore sans page dédiée) :
ajouter une entrée dans le tableau `PAGES` du script + une fonction `buildXMain` + les clés
`translations.js` correspondantes (intro, titres, FAQ propre si besoin), puis mettre à jour
`sitemap.xml` (générateur inline, voir le dernier commit qui l'a mis à jour, pas de script dédié).

**Clés des bullet points services (ajoutées cette session) :**
- `servCard1Li1_html` à `servCard1Li5_html`
- `servCard2Li1_html` à `servCard2Li5_html`
- `servCard3Li1_html` à `servCard3Li5_html`
- `servCard4Li1_html` à `servCard4Li6_html`

---

## 6. État des fonctionnalités

| Fonctionnalité | État |
|---|---|
| Traduction FR/EN complète | ✅ Fait |
| Bullet points services traduits FR/EN | ✅ Fait (session 11/03) |
| Hamburger menu mobile portrait | ✅ Fix CSS |
| Hamburger menu mobile paysage | ✅ Fix CSS (`#menu-btn`) |
| Galerie 9 photos paysage | ✅ Fix CSS Grid |
| Logo contact portrait | ✅ Fix HTML (`#contact-logo-img`) |
| Logo contact paysage | ✅ Fix CSS |
| Photo hero (nouvelle) | ✅ `hero-new.webp` |
| Images WebP optimisées | ✅ |
| Formulaire contact (Formspree) | ✅ Intégré — à tester en prod |
| WhatsApp +41 78 450 06 24 | ✅ |
| Instagram @cocoonurse | ✅ |
| Schema.org LocalBusiness | ✅ |
| sitemap.xml + robots.txt | ✅ |
| vercel.json (cache + sécurité) | ✅ |
| Git + GitHub | ✅ `cocoonurse/cocoonurse-site` |
| Déploiement Vercel | ✅ `cocoonurse.ch` |
| DNS Infomaniak configuré | ✅ |
| SSL Let's Encrypt | ✅ |
| Google Search Console | ✅ Vérifié + sitemap soumis |
| Google Analytics | ✅ `G-LW32JDH6J6` |
| Tests Playwright 13/13 | ✅ |

---

## 7. À faire (prochaine session)

- [ ] Vérifier que le formulaire de contact reçoit bien les emails (Formspree)
- [ ] Témoignages — vérifier si réels ou placeholders
- [ ] Tarifs — vérifier si à jour
- [ ] Email professionnel alicia@cocoonurse.ch (créer chez Infomaniak)
- [ ] Google My Business (pour apparaître sur Google Maps Genève)
- [ ] Instagram lié au site

---

## 8. Notes techniques

- **Tailwind CSS** : via CDN v3 (pas de build — remplacement CLI v4 a cassé le layout)
- **Feather Icons** : via CDN, script en bas de `<body>`, tous les scripts (`feather`, `script.js`, `translations.js`, `contact-modal.js`) en `defer`
- **Fonts** : Google Fonts — Cormorant Garamond, Great Vibes
- **Couleur fond contact** : `#FAE8EF`
- **Couleur principale** : `#D4899D` (champagne/rose)
- **Logo** : `mix-blend-mode: multiply` pour effacer les bords blancs sur fond rose
- **Galerie paysage** : CSS Grid (`grid-template-columns: repeat(3, 1fr)`) dans media query landscape
- **Hamburger paysage** : override CSS `#mobile-menu:not(.hidden) { display: block !important; }`
- **Performance Lighthouse** : ~81/100
- **dist/** : contient tailwind.min.css + bundle.min.css (non utilisés, gardés pour référence)
