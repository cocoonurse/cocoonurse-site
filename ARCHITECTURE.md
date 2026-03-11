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
- **WhatsApp** : +41 78 300 54 17
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

## 5. Système de traduction i18n

- Attribut `data-i18n="clé"` → remplace `textContent`
- Attribut `data-i18n="clé_html"` → remplace `innerHTML` (pour éléments avec `<strong>` etc.)
- Langues disponibles : `fr` et `en`
- Fichier : `translations.js`

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
| WhatsApp +41 78 300 54 17 | ✅ |
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
- **Feather Icons** : via CDN, script en bas de `<body>` (pas de `defer`)
- **Fonts** : Google Fonts — Cormorant Garamond, Great Vibes
- **Couleur fond contact** : `#FAE8EF`
- **Couleur principale** : `#D4899D` (champagne/rose)
- **Logo** : `mix-blend-mode: multiply` pour effacer les bords blancs sur fond rose
- **Galerie paysage** : CSS Grid (`grid-template-columns: repeat(3, 1fr)`) dans media query landscape
- **Hamburger paysage** : override CSS `#mobile-menu:not(.hidden) { display: block !important; }`
- **Performance Lighthouse** : ~81/100
- **dist/** : contient tailwind.min.css + bundle.min.css (non utilisés, gardés pour référence)
