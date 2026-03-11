// Système de traduction complet FR/EN pour Cocoonurse
console.log('🌍 Translations.js chargé !');

const translations = {
    fr: {
        // Navigation
        navAbout: "À Propos",
        navServices: "Services", 
        navExperience: "Parcours",
        navPricing: "Tarifs",
        navContact: "Contact",
        
        // Hero
        heroSubtitle: "Maternity Nurse | Genève",
        heroTagline: "Reposez-vous. Je m'occupe de tout.",
        heroYears: "ans",
        heroYearsLabel: "d'expérience",
        heroFamilies: "familles",
        heroFamiliesLabel: "accompagnées",
        heroButton: "Me Contacter",
        heroQuote: "Puéricultrice diplômée, à vos côtés dans ces moments précieux.",
        
        // About
        aboutTitle: "À Propos",
        aboutMainTitle: "À Propos de Cocoonurse",
        aboutP1: "Depuis 11 ans, j'accompagne avec tendresse les nouveau-nés et leurs familles dans les moments les plus précieux de leur vie. J'ai développé une approche douce et bienveillante qui apaise les bébés et rassure les parents, même dans leurs moments de doute.",
        aboutIntroP1: "Depuis 11 ans, j'accompagne avec tendresse et professionnalisme les nouveau-nés et leurs familles dans les moments les plus précieux et parfois les plus déstabilisants de leur vie. Mon approche se fonde sur une écoute attentive, une présence rassurante et une expertise technique qui apaise les bébés et sécurise les parents, même dans leurs moments de doute les plus profonds.",
        aboutP2: "Mon expérience auprès de familles privées à domicile, complétée par mon parcours en milieu hospitalier - pouponnières, soins intensifs pédiatriques, cliniques privées - m'a offert bien plus qu'une expertise technique : elle m'a appris à écouter, à comprendre et à m'adapter aux besoins uniques de chaque foyer.",
        aboutIntroP2: "Mon parcours professionnel m'a offert bien plus qu'une simple expertise : il m'a appris l'art de m'adapter aux besoins uniques de chaque famille, de décoder les signaux subtils d'un nouveau-né, et de créer un environnement de confiance où chacun peut s'épanouir.",
        aboutFranceTitle: "Expérience en France",
        aboutFranceYears: "6 ans",
        aboutFranceText: "Durant 6 années enrichissantes, j'ai développé mes compétences fondamentales en pouponnières médico-sociales et en unités de néonatologie. Cette période m'a permis d'accompagner des centaines de nouveau-nés dans leurs premiers jours de vie, certains en situation de grande fragilité. J'ai appris à gérer les situations complexes, à anticiper les besoins et à offrir un soutien émotionnel aux familles traversant des moments difficiles.",
        aboutGenevaTitle: "Expérience à Genève",
        aboutGenevaYears: "5 ans",
        aboutGenevaHugLabel: "HUG — Service Pédiatrie :",
        aboutGenevaHugText: "expertise en soins intensifs néonatals, réanimation et oncologie pédiatrique.",
        aboutGenevaGrangettesLabel: "Clinique des Grangettes :",
        aboutGenevaGrangettesText: "approche personnalisée, excellence et discrétion en milieu privé.",
        aboutGenevaDomicileLabel: "Maternity Nurse à domicile :",
        aboutGenevaDomicileText: "accompagnement dans l'intimité des foyers, en respectant le rythme et les choix de chaque famille.",
        aboutIntlTitle: "Expérience Internationale",
        aboutIntlYears: "Australie",
        aboutIntlText: "Mon séjour en Australie m'a ouvert les yeux sur différentes approches culturelles des soins néonataux. J'ai découvert des techniques alternatives, enrichi ma pratique de perspectives globales, et appris à m'adapter à des environnements très variés. Cette expérience me permet aujourd'hui d'accompagner des familles de toutes origines avec respect et compréhension.",
        aboutPhilosophyTitle: "Ma Philosophie",
        aboutPhilosophyQuote: "\"Je crois profondément que chaque famille mérite un accompagnement respectueux de ses valeurs, de son rythme et de ses choix. Mon rôle n'est pas d'imposer une méthode, mais de vous guider, vous soutenir et vous transmettre les outils pour gagner en confiance et en sérénité. Votre bien-être et celui de votre bébé sont au cœur de chaque geste, chaque conseil, chaque moment partagé.\"",
        aboutQualTitle: "Qualifications",
        aboutQual1: "Diplôme d'Auxiliaire de Puériculture",
        aboutQual2: "Diplôme d'Infirmière",
        aboutQual3: "Reconnaissance ASA Suisse",
        aboutQual4: "Français & Anglais courant",
        aboutQual5: "Conseillère en allaitement",
        aboutQual6: "Formée en massages bébés et bains thérapeutiques",
        aboutNewQual1: "Reconnaissance Auxiliaire de Santé CRS",
        aboutNewQual2: "Puéricultrice diplômée",
        aboutNewQual3: "Diplômée d'Auxiliaire de Puériculture",
        aboutNewQual4: "11 ans d'expérience en périnatalité et pédiatrie",
        aboutNewQual5: "Français & Anglais courant",
        aboutNewQual6: "Conseillère en allaitement certifiée",
        aboutNewQual7: "Formée en massages bébés traditionnels et bains thérapeutiques",
        aboutNewQual8: "Spécialisation soins intensifs néonataux",
        aboutNewQual9: "Expérience internationale (Australie)",
        
        // Experience
        expTitle: "Mon Parcours",
        exp1Title: "Auxiliaire de Puériculture",
        exp1Text: "7 ans d'expérience en pouponnières médico-sociales et services néonataux, incluant des unités de soins de sevrage en maternité, accompagnant des centaines de nouveau-nés dans leurs premiers jours de vie.",
        exp2Title: "Infirmière Pédiatrique",
        exp2Text: "4 ans dans plusieurs structures hospitalières publiques et privées de Genève, spécialisée en soins intensifs, réanimation néonatale et service d'oncologie pédiatrique, développant une expertise pointue des besoins spécifiques des nourrissons et enfants dans des situations complexes.",
        exp3Title: "Soins Intensifs & Réanimation",
        exp3Text: "Expérience approfondie en prise en charge des nouveau-nés fragiles et prématurés, avec des protocoles de soins adaptés à chaque situation.",
        exp4Title: "Expérience Internationale",
        exp4Text: "Pratique en Australie, où j'ai acquis une expérience précieuse auprès de familles à domicile, découvrant différentes approches culturelles des soins néonataux et enrichissant ainsi ma pratique d'une perspective globale.",
        
        // Services
        servicesTitle: "Mes Services",
        serv1Title: "Soins Quotidiens",
        serv1Desc: "Alimentation, bain, changes et autres soins essentiels pour le confort et le bien-être de votre bébé.",
        serv1Li1: "Techniques d'alimentation adaptées",
        serv1Li2: "Soins de peau et hygiène",
        serv1Li3: "Surveillance médicale",
        serv2Title: "Accompagnement Nuit & Jour",
        serv2Desc: "Établissement de routines de sommeil saines et prise en charge complète des soins nocturnes.",
        serv2Li1: "Stratégies d'endormissement",
        serv2Li2: "Gestion des réveils nocturnes",
        serv2Li3: "Soins discrets pour préserver votre sommeil",
        serv3Title: "Éveil & Développement",
        serv3Desc: "Stimulation adaptée à l'âge et activités favorisant le développement cognitif et moteur.",
        serv3Li1: "Activités d'éveil sensoriel",
        serv3Li2: "Jeux éducatifs adaptés",
        serv3Li3: "Suivi des étapes clés du développement",
        serv4Title: "Soutien & Accompagnement",
        serv4Desc: "Conseils post-partum et accompagnement des parents dans la découverte de leur nouveau rôle.",
        serv4Li1: "Conseils en allaitement",
        serv4Li2: "Gestion du stress parental",
        serv4Li3: "Création d'un environnement sécurisant",
        servCard1Title: "Soins Quotidiens du Nouveau-Né",
        servCard1P1: "Chaque geste compte dans les premiers mois de vie. Je prends soin de votre bébé avec une douceur infinie et une attention méticuleuse à chaque détail. De l'alimentation aux changes, du bain quotidien aux soins du cordon ombilical, je veille à ce que votre nouveau-né reçoive les meilleurs soins possibles dans un environnement apaisant et sécurisant.",
        servCard1P2: "Mon expérience en néonatologie me permet d'identifier rapidement les besoins spécifiques de votre bébé et d'adapter mes soins en conséquence. Je ne me contente pas d'exécuter des tâches : je crée une routine personnalisée qui respecte le rythme naturel de votre enfant.",
        servCard2Title: "Accompagnement Nuit & Jour",
        servCard2P1: "Le sommeil est l'une des plus grandes préoccupations des jeunes parents. Je vous aide à établir des routines de sommeil saines dès les premières semaines, tout en prenant en charge intégralement les soins nocturnes pour vous permettre de récupérer.",
        servCard2P2: "Mes interventions nocturnes sont discrètes et efficaces : je m'occupe des réveils, des changes, des biberons, tout en créant progressivement les conditions d'un sommeil de meilleure qualité pour votre bébé. Vous vous réveillez reposés, pendant que votre nouveau-né a reçu tous les soins nécessaires dans le calme de la nuit.",
        servCard3Title: "Éveil & Développement",
        servCard3P1: "Les premiers mois sont cruciaux pour le développement cognitif, moteur et sensoriel de votre bébé. Je propose des activités d'éveil adaptées à chaque étape de son développement, dans le respect de son rythme et de ses capacités.",
        servCard3P2: "Du tummy time aux jeux sensoriels, des comptines aux massages stimulants, chaque interaction est pensée pour favoriser son épanouissement tout en renforçant le lien d'attachement. Je ne me contente pas de garder votre bébé : je l'accompagne activement dans sa découverte du monde.",
        servCard4Title: "Soutien & Accompagnement des Parents",
        servCard4P1: "Devenir parent est une aventure merveilleuse mais parfois déstabilisante. Je suis là non seulement pour votre bébé, mais aussi pour vous. Mon rôle est de vous transmettre confiance, outils et savoir-faire pour que vous trouviez votre propre style parental.",
        servCard4P2: "Je réponds à toutes vos questions sans jugement, je vous rassure dans vos moments de doute, et je vous apprends les gestes essentiels pour gagner en autonomie. Mon accompagnement est bienveillant, respectueux de vos choix, et toujours orienté vers votre bien-être familial.",
        servCard1Li1_html: '<strong class="text-sand-800">Alimentation adaptée :</strong> allaitement maternel, biberon, diversification — je m\'adapte à vos choix et vous guide pour une alimentation sereine et efficace',
        servCard1Li2_html: '<strong class="text-sand-800">Soins de peau et hygiène :</strong> bain quotidien thérapeutique, changes doux, soins du cordon, prévention érythème fessier avec produits naturels',
        servCard1Li3_html: '<strong class="text-sand-800">Surveillance médicale continue :</strong> température, respiration, coloration, éliminations — je détecte le moindre signe nécessitant une attention particulière',
        servCard1Li4_html: '<strong class="text-sand-800">Soins du visage et des yeux :</strong> nettoyage délicat, prévention des croûtes de lait',
        servCard1Li5_html: '<strong class="text-sand-800">Soins du nez et des oreilles</strong> avec douceur et précision',
        servCard2Li1_html: '<strong class="text-sand-800">Stratégies d\'endormissement personnalisées :</strong> techniques douces adaptées au tempérament de votre bébé, rituels apaisants, environnement optimal',
        servCard2Li2_html: '<strong class="text-sand-800">Gestion experte des réveils nocturnes :</strong> changes discrets, biberons ou mise au sein, bercement, identification des causes de réveil',
        servCard2Li3_html: '<strong class="text-sand-800">Soins nocturnes en toute discrétion :</strong> je veille sur votre bébé sans perturber votre sommeil, gestion des pleurs, surveillance continue',
        servCard2Li4_html: '<strong class="text-sand-800">Routines jour/nuit progressives :</strong> aide à la distinction, exposition lumineuse adaptée, rythme progressif',
        servCard2Li5_html: '<strong class="text-sand-800">Formation des parents :</strong> je vous transmets mes techniques pour que vous gagniez en autonomie et en confiance',
        servCard3Li1_html: '<strong class="text-sand-800">Éveil sensoriel adapté :</strong> stimulation visuelle, tactile, auditive selon l\'âge, jouets et objets adaptés au développement',
        servCard3Li2_html: '<strong class="text-sand-800">Jeux éducatifs et interactions :</strong> comptines, lectures, jeux de mains, découverte des textures, éveil musical',
        servCard3Li3_html: '<strong class="text-sand-800">Suivi des étapes clés :</strong> sourire social, préhension, retournements, babillage — je vous guide sur les acquisitions normales',
        servCard3Li4_html: '<strong class="text-sand-800">Tummy time et motricité :</strong> renforcement musculaire progressif, prévention de la plagiocéphalie, accompagnement moteur',
        servCard3Li5_html: '<strong class="text-sand-800">Temps de qualité :</strong> je ne laisse jamais un bébé sans stimulation adaptée et bienveillante',
        servCard4Li1_html: '<strong class="text-sand-800">Conseils en allaitement certifiés :</strong> positions optimales, résolution des difficultés (crevasses, engorgement, frein), accompagnement au sevrage si souhaité',
        servCard4Li2_html: '<strong class="text-sand-800">Gestion du stress et du baby-blues :</strong> écoute empathique, conseils pratiques, orientation vers professionnels si nécessaire',
        servCard4Li3_html: '<strong class="text-sand-800">Environnement sécurisant :</strong> aménagement optimal de la chambre, sécurité domestique, prévention accidents',
        servCard4Li4_html: '<strong class="text-sand-800">Décryptage des pleurs :</strong> réponses adaptées, prévention du syndrome du bébé secoué',
        servCard4Li5_html: '<strong class="text-sand-800">Transmission de compétences :</strong> je vous apprends bain, change, portage, massage pour que vous deveniez autonomes et confiants',
        servCard4Li6_html: '<strong class="text-sand-800">Soutien au co-parent :</strong> implication équilibrée, partage des tâches, dynamique familiale harmonieuse',

        // Pricing
        pricingTitle: "Tarifs",
        price1Title: "Soins de Jour",
        price1Amount: "À partir de 35 CHF/heure",
        price1Desc: "Accompagnement personnalisé en journée",
        price1Li1: "Soins complets de jour",
        price1Li2: "Conseils et soutien",
        price1Li3: "Activités adaptées au développement",
        price1Li4: "Sessions minimum de 4 heures",
        price1Button: "Réserver",
        price2Title: "Soins de Nuit",
        price2Amount: "450-500 CHF/nuit",
        price2Desc: "Prise en charge nocturne complète (12h)",
        price2Li1: "Soins nocturnes discrets",
        price2Li2: "Gestion complète des réveils",
        price2Li3: "Surveillance continue",
        price2Li4: "Parents reposés au réveil",
        price2Button: "Réserver",
        price2Badge: "Populaire",
        price3Title: "Forfait Hebdomadaire",
        price3Amount: "2,500-3,500 CHF",
        price3Desc: "Soutien post-partum intensif",
        price3Li1: "Disponibilité 7j/7",
        price3Li2: "Jour et/ou nuit selon besoins",
        price3Li3: "Programme 100% personnalisé",
        price3Li4: "Tarif dégressif avantageux",
        price3Button: "Réserver",
        
        // Stats
        stat1: "% Satisfaction",
        stat2: "Heures sur 24",
        stat3: "Jours sur 7",
        
        // Why Me
        whyTitle: "Un Accompagnement Sur-Mesure Pour Votre Bébé et Vous",
        whyMainTitle: "Un Accompagnement Sur-Mesure Pour Votre Bébé et Vous",
        whyP1: "L'allaitement, c'est naturel... mais pas toujours évident. En tant que conseillère en allaitement formée, je connais les défis que vous pouvez rencontrer : la fatigue, les douleurs, les questionnements incessants. Je suis là pour vous écouter sans jugement, identifier la source de vos difficultés - qu'il s'agisse de la position, de la succion, d'un frein de langue - et vous proposer des solutions concrètes et bienveillantes. Mon objectif ? Que l'allaitement devienne un moment de douceur et non de stress.",
        whyP2: "Au-delà de l'alimentation, je prends soin de votre bébé avec des techniques qui ont fait leurs preuves. Les bains thérapeutiques que je pratique sont bien plus qu'un simple bain : c'est un véritable soin sensoriel qui détend profondément votre nouveau-né, apaise ses pleurs, régule son sommeil et l'aide à s'adapter en douceur à son nouvel environnement. L'eau chaude, les mouvements fluides, la lumière tamisée... tout est pensé pour son bien-être.",
        whyP3: "Je suis également formée au massage bébé, des gestes ancestraux qui soulagent les maux de ventre, favorisent la digestion, renforcent le système immunitaire et créent un lien unique entre vous. Je vous apprends ces techniques pour que vous puissiez les reproduire, transformant chaque moment de soin en instant de connexion pure avec votre enfant.",
        why1Title: "Sécurité",
        why1Text: "Formation médicale approfondie pour une prise en charge sécurisée",
        why2Title: "Empathie",
        why2Text: "Approche bienveillante et respectueuse de chaque famille",
        why3Title: "Disponibilité",
        why3Text: "Flexibilité pour s'adapter à vos besoins spécifiques",
        whyAllaitTitle: "Conseillère en Allaitement Certifiée",
        whyAllaitP1: "L'allaitement, c'est naturel... mais pas toujours évident. En tant que conseillère en allaitement formée et certifiée, je connais intimement les défis que vous pouvez rencontrer : la fatigue écrasante des premières semaines, les douleurs qui peuvent décourager, les questionnements incessants sur la quantité de lait, la bonne position, la fréquence des tétées.",
        whyAllaitP2: "Je suis là pour vous écouter sans jugement, identifier précisément la source de vos difficultés — qu'il s'agisse de la position du bébé, de problèmes de succion, d'un frein de langue restrictif, ou simplement d'un besoin de réassurance. Mon objectif ? Que l'allaitement devienne un moment de douceur et de connexion, et non une source de stress ou de culpabilité.",
        "whyAllaitP3_html": "Si vous choisissez le biberon, je vous accompagne également avec le même respect et la même expertise. <strong>Votre choix est le bon choix.</strong>",
        whyBainsTitle: "Bains Thérapeutiques Sensoriels",
        whyBainsP1: "Au-delà de la simple hygiène, les bains thérapeutiques que je pratique sont de véritables soins sensoriels qui transforment ce moment quotidien en expérience apaisante profonde pour votre nouveau-né.",
        whyBainsP2: "L'eau chaude à température parfaite, les mouvements fluides et enveloppants, la lumière tamisée, les gestes doux et rythmés... tout est pensé pour recréer l'environnement rassurant du ventre maternel. Ces bains apaisent les pleurs même les plus intenses, régulent le sommeil, facilitent la digestion et aident votre bébé à s'adapter en douceur à son nouvel environnement.",
        "whyBainsP3_html": "Je ne fais pas qu'un bain : je crée un rituel de bien-être que vous pourrez reproduire et qui deviendra un <strong>moment privilégié entre vous et votre enfant.</strong>",
        whyMassageTitle: "Massages Bébé Traditionnels",
        whyMassageP1: "Le massage bébé est un art ancestral aux bienfaits scientifiquement prouvés. Formée aux techniques traditionnelles et modernes, je pratique des massages qui soulagent les maux de ventre et coliques, favorisent une digestion harmonieuse, renforcent le système immunitaire, améliorent la qualité du sommeil et créent un lien d'attachement unique.",
        "whyMassageP2_html": "Mais plus encore, <strong>je vous apprends ces gestes sacrés.</strong> Je vous transmets les techniques pour que vous puissiez les reproduire vous-même, transformant chaque moment de soin en instant de connexion pure avec votre enfant. Vos mains deviendront source de réconfort et d'amour.",
        whyVal1Title: "Sécurité",
        whyVal1Text: "Formation médicale approfondie et expérience en soins intensifs pour une prise en charge sécurisée de votre nouveau-né, même fragile ou prématuré",
        whyVal2Title: "Empathie",
        whyVal2Text: "Approche bienveillante, écoute active et respectueuse de chaque famille, de vos choix parentaux et de votre rythme unique",
        whyVal3Title: "Disponibilité 24/7",
        whyVal3Text: "Flexibilité totale pour m'adapter à vos besoins spécifiques, interventions d'urgence possibles, présence rassurante quand vous en avez besoin",
        
        // Gallery
        galleryTitle: "Moments de Soin",
        
        // Contact
        contactTitle: "Contact",
        contactName: "Nom",
        contactEmail: "Email",
        contactPhone: "Téléphone",
        contactAddress: "Adresse",
        contactBirthdate: "Date de naissance prévue du bébé",
        contactBabies: "Nombre de bébés",
        contactNeeds: "Vos Besoins",
        contactButton: "Envoyer",
        contactInfoTitle: "Coordonnées",
        contactInfoText: "Disponible dans tout le canton de Genève, à votre domicile ou en établissement.",
        contactAvailTitle: "Disponibilités",
        contactAvailText: "Du lundi au dimanche, de jour comme de nuit, selon vos besoins.",
        contactPhone2: "Sur demande",
        contactLocation: "Genève, Suisse",
        
        // Footer
        footerSubtitle: "Maternity Nurse | Genève",
        footerCopyright: "© 2024 Cocoonurse - Tous droits réservés",
        
        // Mobile Menu
        mobileMenuNote: "Tous mes forfaits sont personnalisables selon vos besoins. Contactez-moi pour un devis sur mesure.",
        
        // FAQ
        faqTitle: "FAQ",
        faq1Q: "Quand engager une infirmière de maternité ?",
        faq1A: "Idéalement pendant la grossesse pour préparer l'arrivée du bébé, ou immédiatement après la naissance pour un soutien complet.",
        faq2Q: "Quelle est la durée typique d'intervention ?",
        faq2A: "Varie selon les besoins: de quelques jours à plusieurs semaines, souvent 2-4 semaines pour établir de bonnes routines.",
        faq3Q: "Prenez-vous en charge les bébés prématurés ?",
        faq3A: "Oui, mon expérience néonatale me permet de prendre en charge spécifiquement les bébés prématurés ou ayant des besoins particuliers.",
        faq4Q: "Quelle est votre disponibilité ?",
        faq4A: "Je m'adapte à vos besoins : jours, nuits ou 24/7 selon la période, avec un planning établi à l'avance.",
        faq5Q: "Proposez-vous des forfaits ?",
        faq5A: "Oui, des forfaits hebdomadaires comprenant jour et nuit sont disponibles avec des tarifs avantageux.",
        
        // Testimonials
        testimonialsTitle: "Témoignages",
        testimonial1Text: "\"Alicia a été d'une aide précieuse lors des premières semaines avec notre jumeaux. Professionnelle et bienveillante.\"",
        testimonial2Text: "\"Son expérience en néonatalogie nous a rassurés. Notre bébé prématuré était entre de bonnes mains.\"",
        testimonial3Text: "\"Les nuits étaient un cauchemar avant qu'Alicia n'intervienne. Elle a établi une routine qui a changé notre vie.\"",

        // Navbar
        navHow: "Comment ça marche",
        heroDiscover: "Découvrir",

        // About – nouvelle mise en page
        aboutBioP1_html: "Depuis <strong>11 ans</strong>, j'accompagne avec tendresse et professionnalisme les nouveau-nés et leurs familles dans les moments les plus précieux de leur vie. Mon approche se fonde sur une écoute attentive, une présence rassurante et une expertise qui apaise les bébés et sécurise les parents, même dans les moments de doute les plus profonds.",
        aboutBioP2_html: "Formée en <strong>France</strong> et à <strong>Genève</strong>, j'ai exercé en structures de la petite enfance, auprès de familles à domicile et en milieu hospitalier — une expérience complète qui me permet de m'adapter à chaque situation. Je me déplace directement chez vous, à toute heure du jour et de la nuit, pour que vous puissiez vous reposer l'esprit tranquille.",
        aboutQuote: "\"Chaque nuit sereine est un cadeau que vous méritez.\"",
        aboutParcoursTitle: "Mon Parcours",
        aboutP1li1_html: "+5 ans — HUG : soins intensifs · néonatologie · oncologie · chirurgie · unité de développement",
        aboutP1li2_html: "France — structures petite enfance, familles &amp; pouponnière médico-sociale",
        aboutQ1: "Puéricultrice diplômée",
        aboutQ2: "Auxiliaire de Puériculture CRS",
        aboutQ3: "Conseillère en allaitement certifiée",
        aboutQ4: "Massages bébés & bains thérapeutiques",
        aboutQ5: "Soins intensifs néonataux",
        aboutZonesTitle: "Zones d'intervention — Je me déplace à votre domicile",
        aboutZone1: "Canton de Genève",
        aboutZone1inc: "Inclus",
        aboutZone2: "Vaud (proche GE)",
        aboutZone3: "France voisine",

        // Comment ça marche
        howTitle: "Comment Ça Marche ?",
        howSubtitle: "Du premier contact jusqu'à votre sérénité retrouvée — un processus simple et bienveillant.",
        howStep1Title: "Contact",
        howStep1Desc: "Appelez-moi ou écrivez sur WhatsApp. Je réponds sous 2h.",
        howStep2Title: "Entretien",
        howStep2Desc: "Discussion gratuite à domicile pour comprendre vos besoins et créer un plan sur-mesure.",
        howStep3Title: "Mission",
        howStep3Desc: "J'interviens à la date convenue, de jour ou de nuit selon vos besoins.",
        howStep4Title: "Sérénité",
        howStep4Desc: "Vous retrouvez sommeil, confiance et joie de vivre ces précieux moments.",
        howCta: "Commencer — Réponse sous 2h",

        // Tarifs – nouvelle structure
        pricMainTitle: "Tarifs Transparents",
        pricSubtitle: "Investissez dans votre sérénité",
        pricBadge: "⭐ LE + DEMANDÉ",
        pric1Title: "Nuit Découverte",
        pric1Desc: "Une nuit (20h – 8h)",
        pric1li1: "12h de surveillance",
        pric1li2: "Tous soins bébé",
        pric1li3: "Parents dorment",
        pric1li4: "Sans engagement",
        pric1Context: "Idéal après la maternité ou pour une nuit de récupération ponctuelle.",
        pricBook: "Réserver",
        pric2Title: "Pack Retour Maison",
        pric2Save: "Économie 300 CHF",
        pric2Context: "La formule préférée des familles pour une transition sereine à domicile.",
        pric2li1: "3 jours (10h – 20h)",
        pric2li2: "3 nuits (20h – 8h)",
        pric2li3: "Formation complète",
        pric2li4: "Suivi WhatsApp 2 sem.",
        pric2li5: "Guide personnalisé",
        pric3Title: "Semaine Sérénité",
        pric3Desc: "7 nuits (–10%)",
        pric3Context: "Pour s'offrir une semaine complète de sérénité et de soutien professionnel.",
        pric3li1: "7 nuits complètes",
        pric3li2: "Formation soins",
        pric3li3: "Conseils allaitement",
        pric3li4: "Routines sommeil",
        pric3li5: "Paiement fin de semaine",
        pric4Title: "Sur-Mesure",
        pric4Amount: "Devis",
        pric4Context: "Pour les familles souhaitant un accompagnement complet sur la durée — jumeaux, prématurés ou grande disponibilité.",
        pric4li1: "2 à 4 semaines",
        pric4li2: "Jours + nuits",
        pric4li3: "Jumeaux / prématurés",
        pric4li4: "Tarif dégressif",
        pric4li5: "Paiement / semaine",
        pric4Book: "Devis gratuit",
        pricPayment: "💳 Twint • Virement bancaire • Espèces",
        pricZones_html: "📍 <strong>Genève inclus</strong> &nbsp;|&nbsp; Vaud (proche) +50 CHF &nbsp;|&nbsp; France voisine +80 CHF",

        // Stats
        stat1: "Familles accompagnées",
        footerCopyright: "© 2026 Cocoonurse — Tous droits réservés",

        // Select bébés
        contactBabiesPlaceholder: "— Sélectionner —",
        contactBaby1: "1 bébé",
        contactBaby2: "2 bébés (jumeaux)",
        contactBaby3: "3 bébés (triplés)",

        // Boutons Lire plus / Voir plus
        btnSeeMore: "Voir plus",
        btnSeeLess: "Voir moins",
        btnReadMore: "Lire plus",
        btnReadLess: "Réduire",

        // Formulaire de contact (messages JS)
        formSending: "Envoi en cours…",
        formSuccess: "Merci, votre message est bien envoyé !",
        formSuccessMsg: "Je reviens vers vous dans les <strong>2 heures</strong>, 7j/7.<br>En attendant, n'hésitez pas à m'écrire directement sur WhatsApp.",
        formWhatsApp: "Écrire sur WhatsApp",
        formSend: "Envoyer",
        formError: "Une erreur est survenue. Merci de réessayer ou de me contacter directement par WhatsApp.",

        // Mentions légales
        mentionsLink: "Mentions légales & Politique de confidentialité",
        mentionsTitle: "Mentions légales & Confidentialité",
        mentionsResp: "Responsable du site",
        mentionsRespText: "Alicia Carli — Cocoonurse | Genève, Suisse | contact@cocoonurse.ch",
        mentionsHost: "Hébergement",
        mentionsHostText: "Vercel Inc. — vercel.com | Nom de domaine : Infomaniak Network SA, Genève",
        mentionsData: "Protection des données (LPD)",
        mentionsDataText: "Conformément à la Loi fédérale suisse sur la protection des données (LPD), les informations transmises via le formulaire de contact (nom, email, téléphone, message) sont utilisées exclusivement pour répondre à votre demande. Elles ne sont ni vendues, ni transmises à des tiers.",
        mentionsCookies: "Cookies",
        mentionsCookiesText: "Ce site n'utilise aucun cookie de suivi ni outil d'analyse. La préférence de langue est enregistrée localement dans votre navigateur (localStorage).",
        mentionsRights: "Droits",
        mentionsRights_html: "Vous disposez d'un droit d'accès, de rectification et de suppression de vos données. Pour toute demande : <a href=\"mailto:contact@cocoonurse.ch\" class=\"underline\" style=\"color:#D4899D;\">contact@cocoonurse.ch</a>"
    },
    en: {
        // Navigation
        navAbout: "About",
        navServices: "Services",
        navExperience: "Experience",
        navPricing: "Pricing",
        navContact: "Contact",
        
        // Hero
        heroSubtitle: "Maternity Nurse | Geneva",
        heroTagline: "Rest. I'll take care of everything.",
        heroYears: "years",
        heroYearsLabel: "of experience",
        heroFamilies: "families",
        heroFamiliesLabel: "supported",
        heroButton: "Contact Me",
        heroQuote: "Certified paediatric nurse, by your side in these precious moments.",
        
        // About
        aboutTitle: "About",
        aboutMainTitle: "About Cocoonurse",
        aboutP1: "For 11 years, I have been tenderly supporting newborns and their families during the most precious moments of their lives. I have developed a gentle and caring approach that soothes babies and reassures parents, even in their moments of doubt.",
        aboutIntroP1: "For 11 years, I have been supporting newborns and their families with tenderness and professionalism during the most precious — and sometimes most unsettling — moments of their lives. My approach is rooted in attentive listening, a reassuring presence, and technical expertise that soothes babies and gives parents confidence, even in their deepest moments of doubt.",
        aboutP2: "My experience with private families at home, complemented by my hospital background - nurseries, pediatric intensive care, private clinics - has offered me much more than technical expertise: it has taught me to listen, understand and adapt to the unique needs of each family.",
        aboutIntroP2: "My professional journey has offered me far more than mere expertise: it has taught me the art of adapting to each family's unique needs, decoding the subtle signals of a newborn, and creating a trusting environment where everyone can thrive.",
        aboutFranceTitle: "Experience in France",
        aboutFranceYears: "6 years",
        aboutFranceText: "During 6 enriching years in France, I developed my core skills in medico-social nurseries and neonatal units. This period allowed me to support hundreds of newborns in their first days of life, some in very fragile conditions. I learned to manage complex situations, anticipate needs and provide emotional support to families going through difficult moments.",
        aboutGenevaTitle: "Experience in Geneva",
        aboutGenevaYears: "5 years",
        aboutGenevaHugLabel: "HUG — Paediatric Department:",
        aboutGenevaHugText: "where I developed in-depth expertise in neonatal intensive care, resuscitation and paediatric oncology.",
        aboutGenevaGrangettesLabel: "Clinique des Grangettes:",
        aboutGenevaGrangettesText: "where I refined my personalised approach with families seeking excellence and discretion.",
        aboutGenevaDomicileLabel: "Maternity Nurse at home:",
        aboutGenevaDomicileText: "it is in the intimacy of Geneva homes that I found my true calling — accompanying families in their daily life, adapting to their rhythm, respecting their parenting choices.",
        aboutIntlTitle: "International Experience",
        aboutIntlYears: "Australia",
        aboutIntlText: "My time in Australia opened my eyes to different cultural approaches to neonatal care. I discovered alternative techniques, enriched my practice with global perspectives, and learned to adapt to very varied environments. This international experience now allows me to support families of all origins with respect and understanding.",
        aboutPhilosophyTitle: "My Philosophy",
        aboutPhilosophyQuote: "I deeply believe that every family deserves support that respects their values, their rhythm and their choices. My role is not to impose a method, but to guide, support and give you the tools to gain confidence and serenity. Your well-being and that of your baby are at the heart of every gesture, every piece of advice, every shared moment.",
        aboutQualTitle: "Qualifications",
        aboutQual1: "Childcare Assistant Diploma",
        aboutQual2: "Registered Nurse Diploma",
        aboutQual3: "Swiss ASA Recognition",
        aboutQual4: "Fluent French & English",
        aboutQual5: "Breastfeeding Consultant",
        aboutQual6: "Trained in baby massage and therapeutic baths",
        aboutNewQual1: "CRS Health Care Assistant Recognition",
        aboutNewQual2: "Certified Paediatric Nurse",
        aboutNewQual3: "Childcare Assistant Diploma",
        aboutNewQual4: "11 years of experience in perinatology and paediatrics",
        aboutNewQual5: "Fluent French & English",
        aboutNewQual6: "Certified breastfeeding consultant",
        aboutNewQual7: "Trained in traditional baby massage and therapeutic baths",
        aboutNewQual8: "Specialisation in neonatal intensive care",
        aboutNewQual9: "International experience (Australia)",
        
        // Experience
        expTitle: "My Experience",
        exp1Title: "Childcare Assistant",
        exp1Text: "7 years of experience in medical-social nurseries and neonatal services, including maternity weaning care units, supporting hundreds of newborns in their first days of life.",
        exp2Title: "Pediatric Nurse",
        exp2Text: "4 years in several public and private hospital facilities in Geneva, specialized in intensive care, neonatal resuscitation and pediatric oncology service, developing expert knowledge of the specific needs of infants and children in complex situations.",
        exp3Title: "Intensive Care & Resuscitation",
        exp3Text: "In-depth experience in caring for fragile and premature newborns, with care protocols adapted to each situation.",
        exp4Title: "International Experience",
        exp4Text: "Practice in Australia, where I gained valuable experience with families at home, discovering different cultural approaches to neonatal care and thus enriching my practice with a global perspective.",
        
        // Services
        servicesTitle: "My Services",
        serv1Title: "Daily Care",
        serv1Desc: "Feeding, bathing, diaper changes and other essential care for your baby's comfort and well-being.",
        serv1Li1: "Adapted feeding techniques",
        serv1Li2: "Skin care and hygiene",
        serv1Li3: "Medical monitoring",
        serv2Title: "Night & Day Support",
        serv2Desc: "Establishing healthy sleep routines and complete nighttime care.",
        serv2Li1: "Sleep strategies",
        serv2Li2: "Night wakings management",
        serv2Li3: "Discreet care to preserve your sleep",
        serv3Title: "Development & Stimulation",
        serv3Desc: "Age-appropriate stimulation and activities promoting cognitive and motor development.",
        serv3Li1: "Sensory awakening activities",
        serv3Li2: "Adapted educational games",
        serv3Li3: "Tracking key developmental milestones",
        serv4Title: "Support & Guidance",
        serv4Desc: "Postpartum advice and support for parents in discovering their new role.",
        serv4Li1: "Breastfeeding advice",
        serv4Li2: "Parental stress management",
        serv4Li3: "Creating a secure environment",
        servCard1Title: "Daily Newborn Care",
        servCard1P1: "Every gesture matters in the first months of life. I care for your baby with infinite gentleness and meticulous attention to every detail. From feeding to nappy changes, daily therapeutic baths to umbilical cord care, I ensure your newborn receives the best possible care in a soothing and safe environment.",
        servCard1P2: "My neonatology experience allows me to quickly identify your baby's specific needs and adapt my care accordingly. I don't simply perform tasks — I create a personalised routine that respects your child's natural rhythm.",
        servCard2Title: "Day & Night Support",
        servCard2P1: "Sleep is one of the biggest concerns for new parents. I help you establish healthy sleep routines from the very first weeks, while fully taking charge of nighttime care so you can recover.",
        servCard2P2: "My nighttime interventions are discreet and effective: I handle wake-ups, nappy changes, bottles, and breastfeeding, while progressively creating the conditions for better quality sleep for your baby. You wake up rested, while your newborn has received all necessary care in the calm of the night.",
        servCard3Title: "Development & Stimulation",
        servCard3P1: "The first months are crucial for your baby's cognitive, motor and sensory development. I offer age-appropriate stimulation activities at every stage of development, respecting your baby's rhythm and abilities.",
        servCard3P2: "From tummy time to sensory play, nursery rhymes to stimulating massage, every interaction is designed to foster their flourishing while strengthening the attachment bond. I don't just look after your baby — I actively accompany them in their discovery of the world.",
        servCard4Title: "Parental Support & Guidance",
        servCard4P1: "Becoming a parent is a wonderful yet sometimes unsettling adventure. I am there not only for your baby, but for you too. My role is to give you confidence, tools and know-how so that you find your own parenting style.",
        servCard4P2: "I answer all your questions without judgement, reassure you in moments of doubt, and teach you the essential gestures to help you gain independence. My support is caring, respectful of your choices, and always oriented towards your family's well-being.",
        servCard1Li1_html: '<strong class="text-sand-800">Adapted feeding:</strong> breastfeeding, bottle, diversification — I adapt to your choices and guide you for calm and effective feeding',
        servCard1Li2_html: '<strong class="text-sand-800">Skin care and hygiene:</strong> therapeutic daily bath, gentle nappy changes, cord care, nappy rash prevention with natural products',
        servCard1Li3_html: '<strong class="text-sand-800">Continuous medical monitoring:</strong> temperature, breathing, colouration, eliminations — I detect the slightest sign requiring special attention',
        servCard1Li4_html: '<strong class="text-sand-800">Face and eye care:</strong> gentle cleansing, cradle cap prevention',
        servCard1Li5_html: '<strong class="text-sand-800">Nose and ear care</strong> with gentleness and precision',
        servCard2Li1_html: '<strong class="text-sand-800">Personalised sleep strategies:</strong> gentle techniques adapted to your baby\'s temperament, soothing rituals, optimal environment',
        servCard2Li2_html: '<strong class="text-sand-800">Expert management of night wakings:</strong> discreet nappy changes, bottle or breastfeeding, rocking, identifying the causes of waking',
        servCard2Li3_html: '<strong class="text-sand-800">Discreet night care:</strong> I watch over your baby without disturbing your sleep, managing crying, continuous monitoring',
        servCard2Li4_html: '<strong class="text-sand-800">Progressive day/night routines:</strong> help with distinguishing day and night, adapted light exposure, gradual rhythm',
        servCard2Li5_html: '<strong class="text-sand-800">Parent training:</strong> I pass on my techniques so that you gain independence and confidence',
        servCard3Li1_html: '<strong class="text-sand-800">Adapted sensory stimulation:</strong> visual, tactile and auditory stimulation by age, toys and objects suited to development',
        servCard3Li2_html: '<strong class="text-sand-800">Educational games and interactions:</strong> nursery rhymes, reading, hand games, texture discovery, musical awakening',
        servCard3Li3_html: '<strong class="text-sand-800">Tracking key milestones:</strong> social smile, grasping, rolling over, babbling — I guide you on normal developmental acquisitions',
        servCard3Li4_html: '<strong class="text-sand-800">Tummy time and motor skills:</strong> progressive muscle strengthening, plagiocephaly prevention, motor development support',
        servCard3Li5_html: '<strong class="text-sand-800">Quality time:</strong> I never leave a baby without appropriate and caring stimulation',
        servCard4Li1_html: '<strong class="text-sand-800">Certified breastfeeding support:</strong> optimal positions, resolving difficulties (cracked nipples, engorgement, tongue-tie), weaning support if desired',
        servCard4Li2_html: '<strong class="text-sand-800">Stress and baby blues management:</strong> empathetic listening, practical advice, referral to professionals if necessary',
        servCard4Li3_html: '<strong class="text-sand-800">Safe environment:</strong> optimal bedroom layout, home safety, accident prevention',
        servCard4Li4_html: '<strong class="text-sand-800">Understanding crying:</strong> appropriate responses, shaken baby syndrome prevention',
        servCard4Li5_html: '<strong class="text-sand-800">Skills transfer:</strong> I teach you bathing, changing, babywearing and massage so you become independent and confident',
        servCard4Li6_html: '<strong class="text-sand-800">Co-parent support:</strong> balanced involvement, task sharing, harmonious family dynamics',

        // Pricing
        pricingTitle: "Pricing",
        price1Title: "Day Care",
        price1Amount: "From CHF 35/hour",
        price1Desc: "Personalized daytime support",
        price1Li1: "Complete daytime care",
        price1Li2: "Advice and support",
        price1Li3: "Development-adapted activities",
        price1Li4: "Minimum 4-hour sessions",
        price1Button: "Book",
        price2Title: "Night Care",
        price2Amount: "CHF 450-500/night",
        price2Desc: "Complete overnight care (12h)",
        price2Li1: "Discreet nighttime care",
        price2Li2: "Complete wake management",
        price2Li3: "Continuous monitoring",
        price2Li4: "Rested parents in the morning",
        price2Button: "Book",
        price2Badge: "Popular",
        price3Title: "Weekly Package",
        price3Amount: "CHF 2,500-3,500",
        price3Desc: "Intensive postpartum support",
        price3Li1: "7-day availability",
        price3Li2: "Day and/or night as needed",
        price3Li3: "100% personalized program",
        price3Li4: "Advantageous decreasing rate",
        price3Button: "Book",
        
        // Stats
        stat1: "% Satisfaction",
        stat2: "Hours a Day",
        stat3: "Days a Week",
        
        // Why Me
        whyTitle: "Tailored Support For Your Baby and You",
        whyMainTitle: "Personalised Support For Your Baby and You",
        whyP1: "Breastfeeding is natural... but not always easy. As a trained breastfeeding consultant, I know the challenges you may face: fatigue, pain, constant questions. I am here to listen without judgment, identify the source of your difficulties - whether it's positioning, latch, tongue tie - and offer you concrete and caring solutions. My goal? To make breastfeeding a moment of tenderness, not stress.",
        whyP2: "Beyond feeding, I care for your baby with proven techniques. The therapeutic baths I practice are much more than a simple bath: it's a true sensory treatment that deeply relaxes your newborn, soothes their crying, regulates their sleep and helps them gently adapt to their new environment. Warm water, fluid movements, soft lighting... everything is designed for their well-being.",
        whyP3: "I am also trained in baby massage, ancestral gestures that relieve stomach aches, promote digestion, strengthen the immune system and create a unique bond between you. I teach you these techniques so you can reproduce them, transforming each care moment into an instant of pure connection with your child.",
        why1Title: "Safety",
        why1Text: "In-depth medical training for secure care",
        why2Title: "Empathy",
        why2Text: "Caring and respectful approach to each family",
        why3Title: "Availability",
        why3Text: "Flexibility to adapt to your specific needs",
        whyAllaitTitle: "Certified Breastfeeding Consultant",
        whyAllaitP1: "Breastfeeding is natural... but not always easy. As a trained and certified breastfeeding consultant, I intimately know the challenges you may face: the crushing fatigue of the first weeks, pain that can be discouraging, constant questions about milk supply, positioning, and feed frequency.",
        whyAllaitP2: "I am here to listen without judgement, precisely identify the source of your difficulties — whether it's baby's positioning, latch issues, a restrictive tongue tie, or simply a need for reassurance. My goal? To make breastfeeding a moment of tenderness and connection, not a source of stress or guilt.",
        "whyAllaitP3_html": "If you choose bottle feeding, I support you with the same respect and expertise. <strong>Your choice is the right choice.</strong>",
        whyBainsTitle: "Sensory Therapeutic Baths",
        whyBainsP1: "Beyond simple hygiene, the therapeutic baths I practice are true sensory treatments that transform this daily moment into a deeply soothing experience for your newborn.",
        whyBainsP2: "Perfectly warm water, fluid and enveloping movements, soft lighting, gentle rhythmic gestures... everything is designed to recreate the reassuring environment of the womb. These baths soothe even the most intense crying, regulate sleep, ease digestion and help your baby gently adapt to their new environment.",
        "whyBainsP3_html": "I don't just give a bath: I create a wellness ritual that you can reproduce, one that will become a <strong>cherished moment between you and your child.</strong>",
        whyMassageTitle: "Traditional Baby Massage",
        whyMassageP1: "Baby massage is an ancestral art with scientifically proven benefits. Trained in traditional and modern techniques, I practice massages that relieve stomach aches and colic, promote harmonious digestion, strengthen the immune system, improve sleep quality and create a unique attachment bond.",
        "whyMassageP2_html": "But more importantly, <strong>I teach you these sacred gestures.</strong> I pass on the techniques so you can reproduce them yourself, transforming every care moment into an instant of pure connection with your child. Your hands will become a source of comfort and love.",
        whyVal1Title: "Safety",
        whyVal1Text: "In-depth medical training and intensive care experience for the safe care of your newborn, even if fragile or premature",
        whyVal2Title: "Empathy",
        whyVal2Text: "A caring and attentive approach, respectful of each family, your parenting choices and your unique rhythm",
        whyVal3Title: "24/7 Availability",
        whyVal3Text: "Full flexibility to adapt to your specific needs, emergency interventions possible, reassuring presence whenever you need it",
        
        // Gallery
        galleryTitle: "Care Moments",
        
        // Contact
        contactTitle: "Contact",
        contactName: "Name",
        contactEmail: "Email",
        contactPhone: "Phone",
        contactAddress: "Address",
        contactBirthdate: "Baby's expected birth date",
        contactBabies: "Number of babies",
        contactNeeds: "Your Needs",
        contactButton: "Send",
        contactInfoTitle: "Contact Information",
        contactInfoText: "Available throughout the Geneva canton, at your home or in an establishment.",
        contactAvailTitle: "Availability",
        contactAvailText: "Monday to Sunday, day and night, according to your needs.",
        contactPhone2: "On request",
        contactLocation: "Geneva, Switzerland",
        
        // Footer
        footerSubtitle: "Maternity Nurse | Geneva",
        footerCopyright: "© 2024 Cocoonurse - All rights reserved",
        
        // Mobile Menu
        mobileMenuNote: "All my packages are customizable according to your needs. Contact me for a personalized quote.",
        
        // FAQ
        faqTitle: "FAQ",
        faq1Q: "When to hire a maternity nurse?",
        faq1A: "Ideally during pregnancy to prepare for baby's arrival, or immediately after birth for complete support.",
        faq2Q: "What is the typical duration of service?",
        faq2A: "Varies according to needs: from a few days to several weeks, often 2-4 weeks to establish good routines.",
        faq3Q: "Do you care for premature babies?",
        faq3A: "Yes, my neonatal experience allows me to specifically care for premature babies or those with special needs.",
        faq4Q: "What is your availability?",
        faq4A: "I adapt to your needs: days, nights or 24/7 depending on the period, with planning established in advance.",
        faq5Q: "Do you offer packages?",
        faq5A: "Yes, weekly packages including day and night are available with advantageous rates.",
        
        // Testimonials
        testimonialsTitle: "Testimonials",
        testimonial1Text: "\"Alicia was a precious help during the first weeks with our twins. Professional and caring.\"",
        testimonial2Text: "\"Her experience in neonatology reassured us. Our premature baby was in good hands.\"",
        testimonial3Text: "\"Nights were a nightmare before Alicia intervened. She established a routine that changed our lives.\"",

        // Navbar
        navHow: "How it works",
        heroDiscover: "Discover",

        // About – new layout
        aboutBioP1_html: "For <strong>11 years</strong>, I have been supporting newborns and their families with tenderness and professionalism during the most precious moments of their lives. My approach is rooted in attentive listening, a reassuring presence, and expertise that soothes babies and gives parents confidence, even in their deepest moments of doubt.",
        aboutBioP2_html: "Trained in <strong>France</strong> and <strong>Geneva</strong>, I have worked in private childcare settings, with families at home, and in hospital environments — a complete background that allows me to adapt to every situation. I come directly to you, day or night, so you can rest with complete peace of mind.",
        aboutQuote: "\"Every peaceful night is a gift you deserve.\"",
        aboutParcoursTitle: "My Background",
        aboutP1li1_html: "+5 years — HUG: intensive care · neonatology · oncology · surgery · developmental unit",
        aboutP1li2_html: "France — childcare settings, families &amp; medico-social nursery",
        aboutQ1: "Certified paediatric nurse",
        aboutQ2: "CRS Healthcare Assistant",
        aboutQ3: "Certified breastfeeding consultant",
        aboutQ4: "Baby massage & therapeutic baths",
        aboutQ5: "Neonatal intensive care",
        aboutZonesTitle: "Service areas — I come to your home",
        aboutZone1: "Canton of Geneva",
        aboutZone1inc: "Included",
        aboutZone2: "Vaud (near Geneva)",
        aboutZone3: "Neighbouring France",

        // How it works
        howTitle: "How Does It Work?",
        howSubtitle: "From first contact to your renewed serenity — a simple and caring process.",
        howStep1Title: "Contact",
        howStep1Desc: "Call me or message on WhatsApp. I respond within 2 hours.",
        howStep2Title: "Meeting",
        howStep2Desc: "Free home consultation to understand your needs and create a tailored plan.",
        howStep3Title: "Mission",
        howStep3Desc: "I arrive on the agreed date, day or night, according to your needs.",
        howStep4Title: "Serenity",
        howStep4Desc: "You rediscover sleep, confidence and joy in these precious moments.",
        howCta: "Get Started — Reply within 2h",

        // Pricing – new structure
        pricMainTitle: "Transparent Pricing",
        pricSubtitle: "Invest in your serenity",
        pricBadge: "⭐ MOST POPULAR",
        pric1Title: "Discovery Night",
        pric1Desc: "One night (8pm – 8am)",
        pric1li1: "12h monitoring",
        pric1li2: "All baby care",
        pric1li3: "Parents sleep",
        pric1li4: "No commitment",
        pric1Context: "Ideal after leaving hospital or for a one-off recovery night.",
        pricBook: "Book",
        pric2Title: "Coming Home Pack",
        pric2Save: "Save CHF 300",
        pric2Context: "The most popular choice for a smooth transition home.",
        pric2li1: "3 days (10am – 8pm)",
        pric2li2: "3 nights (8pm – 8am)",
        pric2li3: "Full training",
        pric2li4: "WhatsApp follow-up 2 wks",
        pric2li5: "Personalised guide",
        pric3Title: "Serenity Week",
        pric3Desc: "7 nights (–10%)",
        pric3Context: "For a full week of total serenity and professional support.",
        pric3li1: "7 full nights",
        pric3li2: "Care training",
        pric3li3: "Breastfeeding advice",
        pric3li4: "Sleep routines",
        pric3li5: "End-of-week payment",
        pric4Title: "Bespoke",
        pric4Amount: "Quote",
        pric4Context: "For families wanting full ongoing support — twins, premature babies or extended availability.",
        pric4li1: "2 to 4 weeks",
        pric4li2: "Days + nights",
        pric4li3: "Twins / premature babies",
        pric4li4: "Decreasing rate",
        pric4li5: "Weekly payment",
        pric4Book: "Free quote",
        pricPayment: "💳 Twint • Bank transfer • Cash",
        pricZones_html: "📍 <strong>Geneva included</strong> &nbsp;|&nbsp; Vaud (nearby) +CHF 50 &nbsp;|&nbsp; Neighbouring France +CHF 80",

        // Stats
        stat1: "Families supported",
        stat2: "Hours a day",
        stat3: "Days a week",
        footerCopyright: "© 2026 Cocoonurse — All rights reserved",

        // Select babies
        contactBabiesPlaceholder: "— Select —",
        contactBaby1: "1 baby",
        contactBaby2: "2 babies (twins)",
        contactBaby3: "3 babies (triplets)",

        // Read more / See more buttons
        btnSeeMore: "See more",
        btnSeeLess: "See less",
        btnReadMore: "Read more",
        btnReadLess: "Collapse",

        // Contact form (JS messages)
        formSending: "Sending…",
        formSuccess: "Thank you, your message has been sent!",
        formSuccessMsg: "I'll get back to you within <strong>2 hours</strong>, 7 days a week.<br>In the meantime, feel free to message me directly on WhatsApp.",
        formWhatsApp: "Message on WhatsApp",
        formSend: "Send",
        formError: "An error occurred. Please try again or contact me directly on WhatsApp.",

        // Legal notice
        mentionsLink: "Legal Notice & Privacy Policy",
        mentionsTitle: "Legal Notice & Privacy",
        mentionsResp: "Site Owner",
        mentionsRespText: "Alicia Carli — Cocoonurse | Geneva, Switzerland | contact@cocoonurse.ch",
        mentionsHost: "Hosting",
        mentionsHostText: "Vercel Inc. — vercel.com | Domain: Infomaniak Network SA, Geneva",
        mentionsData: "Data Protection (FADP)",
        mentionsDataText: "In accordance with the Swiss Federal Act on Data Protection (FADP), information submitted via the contact form (name, email, phone, message) is used solely to respond to your enquiry. It is never sold or shared with third parties.",
        mentionsCookies: "Cookies",
        mentionsCookiesText: "This site uses no tracking cookies or analytics tools. Language preference is stored locally in your browser (localStorage).",
        mentionsRights: "Rights",
        mentionsRights_html: "You have the right to access, correct and delete your data. For any request: <a href=\"mailto:contact@cocoonurse.ch\" class=\"underline\" style=\"color:#D4899D;\">contact@cocoonurse.ch</a>"
    }
};

// Langue actuelle
let currentLang = localStorage.getItem('cocoonurse-lang') || 'fr';

// Fonction pour changer la langue
function setLanguage(lang) {
    console.log('🔄 Changement de langue vers:', lang);
    currentLang = lang;
    localStorage.setItem('cocoonurse-lang', lang);
    document.documentElement.lang = lang;
    updateContent();
    updateLanguageButtons();
    console.log('✅ Langue changée !');
}

// Fonction pour mettre à jour le contenu
function updateContent() {
    console.log('📝 Mise à jour du contenu en langue:', currentLang);
    let count = 0;
    document.querySelectorAll('[data-i18n]').forEach(element => {
        const key = element.getAttribute('data-i18n');
        const translation = translations[currentLang][key];
        if (translation !== undefined) {
            if (key.endsWith('_html')) {
                element.innerHTML = translation;
            } else {
                element.textContent = translation;
            }
            count++;
        }
    });
    console.log(`✅ ${count} éléments traduits !`);
}

// Fonction pour mettre à jour les boutons de langue
function updateLanguageButtons() {
    document.querySelectorAll('.lang-btn').forEach(btn => {
        const lang = btn.getAttribute('data-lang');
        if (lang === currentLang) {
            btn.classList.add('font-bold', 'text-champagne-700', 'border-b-2', 'border-champagne-700');
            btn.classList.remove('text-gray-500');
        } else {
            btn.classList.remove('font-bold', 'text-champagne-700', 'border-b-2', 'border-champagne-700');
            btn.classList.add('text-gray-500');
        }
    });
}

// Initialiser au chargement
document.addEventListener('DOMContentLoaded', function() {
    updateContent();
    updateLanguageButtons();
});
