// Système de traduction complet FR/EN pour Cocoonurse
console.log('🌍 Translations.js chargé !');

const translations = {
    fr: {
        // Navigation
        navAbout: "À Propos",
        navServices: "Services",
        navPricing: "Tarifs",
        navContact: "Contact",

        // Accessibilité (aria-label)
        ariaBackToTop: "Retour en haut de page",
        ariaContactSection: "Aller à la section contact",
        ariaPrevTestimonial: "Témoignage précédent",
        ariaNextTestimonial: "Témoignage suivant",

        // Hero
        heroSubtitle: "Maternity Nurse & Garde de Nuit Bébé | Genève",
        heroTagline: "Reposez-vous. Je m'occupe de tout.",
        heroYears: "ans",
        heroYearsLabel: "d'expérience",
        heroFamilies: "familles",
        heroFamiliesLabel: "accompagnées",
        heroResponse: "Réponse rapide",
        heroButton: "Me Contacter",
        heroQuote: "Puéricultrice diplômée, à vos côtés dans ces moments précieux.",
        
        // About
        aboutMainTitle: "À Propos de Cocoonurse",
        aboutPhilosophyQuote: "\"Je crois profondément que chaque famille mérite un accompagnement respectueux de ses valeurs, de son rythme et de ses choix. Mon rôle n'est pas d'imposer une méthode, mais de vous guider, vous soutenir et vous transmettre les outils pour gagner en confiance et en sérénité. Votre bien-être et celui de votre bébé sont au cœur de chaque geste, chaque conseil, chaque moment partagé.\"",
        aboutQualTitle: "Qualifications",
        
        // Experience

        // Services
        servicesTitle: "Mes Services",
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
        servCard5Title: "Bain Thalasso Thérapeutique",
        servCard5P1: "Une expérience unique et apaisante que je propose en tant que professionnelle de santé diplômée, pour les bébés jusqu'à 1 mois. Plongé dans une eau chaude à la température idéale, bébé retrouve les sensations vécues in utero grâce au mouvement de l'eau et au lange.",
        servCard5P2: "Chaque bain est adapté au rythme et au confort de l'enfant, sous ma surveillance attentive. Les parents sont invités à participer pour renforcer ce lien unique et précieux. Bien plus qu'un soin, c'est un véritable « bain d'émotions ».",
        servCard5Li1_html: '<strong class="text-sand-800">Fenêtre idéale (naissance à 1 mois) :</strong> bébé conserve encore le réflexe de position fœtale, pour un effet maximal',
        servCard5Li2_html: '<strong class="text-sand-800">Sensation in utero recréée :</strong> eau chaude, mouvement enveloppant et lange pour retrouver le confort du ventre maternel',
        servCard5Li3_html: '<strong class="text-sand-800">Surveillance professionnelle continue :</strong> encadré à chaque instant par une professionnelle de santé diplômée',
        servCard5Li4_html: '<strong class="text-sand-800">Bien plus qu\'un soin :</strong> un véritable moment d\'émotion et de connexion partagé en famille',
        servCard6Title: "Atelier Massage Bébé",
        servCard6P1: "Je vous guide pas à pas dans l'apprentissage du massage bébé, une pratique ancestrale aux bienfaits multiples. Vous apprendrez des gestes simples, doux et adaptés pour soulager les coliques, favoriser un sommeil paisible et renforcer le lien d'attachement avec votre bébé.",
        servCard6P2: "Le massage stimule également la circulation sanguine, le système immunitaire et le développement sensoriel et cognitif de votre tout-petit. Un moment de complicité unique dans une atmosphère chaleureuse et bienveillante.",
        servCard6Li1_html: '<strong class="text-sand-800">Soulagement des coliques :</strong> gestes ciblés pour apaiser les tensions digestives',
        servCard6Li2_html: '<strong class="text-sand-800">Sommeil plus paisible :</strong> un rituel apaisant qui favorise l\'endormissement',
        servCard6Li3_html: '<strong class="text-sand-800">Bienfaits physiologiques :</strong> stimulation de la circulation sanguine et du système immunitaire',
        servCard6Li4_html: '<strong class="text-sand-800">Éveil sensoriel et cognitif :</strong> le toucher stimule activement le développement de votre bébé',
        servCard6Li5_html: '<strong class="text-sand-800">Vous devenez autonome :</strong> des gestes appris pour les reproduire vous-même au quotidien',
        servCard7Title: "Consultation Sommeil et Pleurs",
        servCard7P1: "Des questions sur le sommeil de votre bébé, ses pleurs ou ses réveils nocturnes ? Je vous propose des consultations personnalisées par message ou en vidéo, pour vous accompagner à votre rythme depuis chez vous.",
        servCard7P2: "Ensemble, nous établirons des routines adaptées, des stratégies pour gérer les réveils, et des conseils sur le co-sommeil, les siestes et la transition vers le lit d'enfant. Un soutien professionnel, bienveillant et accessible, pour que toute la famille retrouve un sommeil serein.",
        servCard7Li1_html: '<strong class="text-sand-800">Consultation à distance :</strong> par message ou visioconférence, où que vous soyez',
        servCard7Li2_html: '<strong class="text-sand-800">Routines de sommeil sur-mesure :</strong> adaptées à l\'âge et au tempérament de votre bébé',
        servCard7Li3_html: '<strong class="text-sand-800">Gestion des réveils nocturnes :</strong> stratégies concrètes et progressives',
        servCard7Li4_html: '<strong class="text-sand-800">Co-sommeil, siestes et transition au lit :</strong> réponses à toutes vos interrogations',
        servCard7Li5_html: '<strong class="text-sand-800">Accompagnement bienveillant :</strong> sans jugement, à votre rythme',
        servCard8Title: "Atelier Portage",
        servCard8P1: "Le portage est bien plus qu'un moyen de transport : c'est un formidable outil de lien et d'apaisement pour votre bébé. Je vous apprends à choisir et ajuster écharpes, slings et porte-bébés physiologiques en toute sécurité, à votre domicile.",
        servCard8P2: "Un bébé porté pleure moins, dort mieux et se sent rassuré par la proximité et le mouvement. Vous gagnez en liberté de mouvement au quotidien, tout en gardant votre enfant tout contre vous.",
        servCard8Li1_html: '<strong class="text-sand-800">Sécurité avant tout :</strong> positionnement physiologique correct, prévention de la dysplasie de la hanche',
        servCard8Li2_html: '<strong class="text-sand-800">Le bon moyen de portage :</strong> écharpe tissée, sling ou porte-bébé structuré, adapté à votre bébé et votre morphologie',
        servCard8Li3_html: '<strong class="text-sand-800">Moins de pleurs, plus de sérénité :</strong> le contact rapproché apaise bébé et régule son rythme cardiaque',
        servCard8Li4_html: '<strong class="text-sand-800">Autonomie au quotidien :</strong> nouez votre écharpe seul(e) et portez en toute confiance, à la maison comme en sortie',

        // Pricing
        
        // Stats
        stat2: "Heures sur 24",
        stat3: "Jours sur 7",

        // Why Me
        whyMainTitle: "Un Accompagnement Sur-Mesure Pour Votre Bébé et Vous",
        whyAllaitTitle: "Conseillère en Allaitement Certifiée",
        whyAllaitP1: "L'allaitement, c'est naturel... mais pas toujours évident. En tant que conseillère en allaitement formée et certifiée, je connais intimement les défis que vous pouvez rencontrer : la fatigue écrasante des premières semaines, les douleurs qui peuvent décourager, les questionnements incessants sur la quantité de lait, la bonne position, la fréquence des tétées.",
        whyAllaitP2: "Je suis là pour vous écouter sans jugement, identifier précisément la source de vos difficultés — qu'il s'agisse de la position du bébé, de problèmes de succion, d'un frein de langue restrictif, ou simplement d'un besoin de réassurance. Mon objectif ? Que l'allaitement devienne un moment de douceur et de connexion, et non une source de stress ou de culpabilité.",
        "whyAllaitP3_html": "Si vous choisissez le biberon, je vous accompagne également avec le même respect et la même expertise. <strong>Votre choix est le bon choix.</strong>",
        whyBainsTitle: "Bains Thérapeutiques Sensoriels",
        whyBainsP1: "Ce rituel ne s'improvise pas : il demande une surveillance médicale constante et un œil formé pour repérer la moindre tension chez le nouveau-né — une expertise que je tiens directement de mes années en néonatologie.",
        whyBainsP2: "Je choisis le lieu, la température, le moment de la journée avec vous, en tenant compte du rythme et de la sensibilité propres à votre bébé — rien n'est standardisé, tout est pensé pour lui.",
        "whyBainsP3_html": "Et parce que ce moment ne doit pas rester unique, <strong>je vous transmets les gestes</strong> pour que vous puissiez le reproduire vous-même, en toute sécurité, aussi souvent que vous le souhaitez.",
        whyMassageTitle: "Massages Bébé Traditionnels",
        whyMassageP1: "Ce n'est pas un simple tutoriel vidéo que je vous transmets : mon expérience en soins intensifs néonataux me permet de repérer immédiatement les signes de confort ou d'inconfort de votre bébé, et d'adapter chaque geste à sa morphologie et son tempérament.",
        "whyMassageP2_html": "Je reste disponible après la séance pour répondre à vos questions, corriger un geste ou vous rassurer — <strong>mon objectif est que vous massiez seul(e) en toute confiance</strong>, bien après notre rencontre.",
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
        copy: "Copier",
        contactName: "Nom",
        contactEmail: "Email",
        contactPhone: "Téléphone",
        contactAddress: "Adresse",
        contactBirthdate: "Date de naissance prévue du bébé",
        contactAddressPlaceholder: "Rue, code postal, ville",
        contactBabies: "Nombre de bébés",
        contactNeeds: "Vos Besoins",
        contactButton: "Envoyer",
        contactInfoTitle: "Coordonnées",
        contactInfoText: "Disponible dans tout le canton de Genève, à votre domicile ou en établissement.",
        contactAvailTitle: "Disponibilités",
        contactAvailText: "Du lundi au dimanche, de jour comme de nuit, selon vos besoins.",
        contactLocation: "Genève, Suisse — Voir sur Google Maps",
        
        // Footer
        footerSubtitle: "Maternity Nurse | Genève",
        footerCopyright: "© 2024 Cocoonurse - Tous droits réservés",
        
        // Mobile Menu
        mobileMenuNote: "Tous mes forfaits sont personnalisables selon vos besoins. Contactez-moi pour un devis sur mesure.",
        
        // FAQ
        faqTitle: "FAQ",
        faqSubtitle: "Vos questions, mes réponses",
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
        faq6Q: "Combien coûte une garde de nuit à Genève ?",
        faq6A: "La Nuit Découverte (12h, 20h–8h) est à 300 CHF. Des forfaits dégressifs existent pour plusieurs nuits ou une semaine complète — voir la section Tarifs ci-dessus.",
        faq7Q: "Que se passe-t-il en cas d'imprévu ou d'indisponibilité ?",
        faq7A: "En tant qu'indépendante, je vous préviens immédiatement en cas d'imprévu afin de trouver ensemble la meilleure solution pour votre famille.",
        faq8Q: "Dans quelles villes intervenez-vous autour de Genève ?",
        faq8A: "Je me déplace dans tout le canton de Genève (Carouge, Lancy, Meyrin, Vernier, Onex, Thônex, Chêne-Bougeries, Cologny...), dans le canton de Vaud proche (Nyon, Coppet) ainsi qu'en France voisine (Annemasse, Saint-Julien-en-Genevois, Ferney-Voltaire, Gaillard).",
        faq9Q: "Quelle différence entre garde d'enfant, infirmière à domicile et puéricultrice ?",
        faq9A: "Une garde d'enfant classique surveille l'enfant sans formation médicale, une infirmière à domicile intervient pour des soins ponctuels. Cocoonurse combine les deux : je suis puéricultrice diplômée et auxiliaire de puériculture CRS, avec 11 ans d'expérience en néonatologie — je réunis la surveillance, les soins et l'accompagnement parental en une seule prestation, jour et nuit.",

        // Testimonials
        testimonialsTitle: "Témoignages",
        testimonial1Text: "\"Alicia a été d'une aide précieuse lors des premières semaines avec notre jumeaux. Professionnelle et bienveillante.\"",
        testimonial2Text: "\"Son expérience en néonatalogie nous a rassurés. Notre bébé prématuré était entre de bonnes mains.\"",
        testimonial3Text: "\"Les nuits étaient un cauchemar avant qu'Alicia n'intervienne. Elle a établi une routine qui a changé notre vie.\"",

        // Navbar
        navHow: "Comment ça marche",
        heroDiscover: "Découvrir",

        // About – nouvelle mise en page
        aboutBioP1_html: "Professionnelle de la <strong>périnatalité</strong> et <strong>Maternity Nurse</strong> depuis <strong>11 ans</strong>, j'ai appris mon métier là où l'exigence compte le plus : à l'<strong>Hôpital des Enfants des Hôpitaux Universitaires de Genève (HUG)</strong>, en soins intensifs mais aussi en néonatologie, oncologie et chirurgie pédiatrique, puis dans plusieurs cliniques privées genevoises. Aujourd'hui, je mets cette rigueur clinique au service des familles, de jour comme de nuit, pour que vous retrouviez sommeil, confiance et sérénité.",
        aboutBioP2_html: "Formée en <strong>France</strong> et à <strong>Genève</strong>, j'aime profondément ce métier qui allie rigueur médicale et tendresse humaine. Je viens chez vous, à toute heure du jour ou de la nuit, avec une seule idée en tête : vous écouter, vous rassurer, et avancer à votre rythme, selon vos choix, jamais en vous imposant une méthode.",
        aboutBioP3_html: "Devenir parent est un bouleversement, même quand tout se passe bien. J'ai à cœur d'être cette présence stable et rassurante qui vous permet de souffler, de reprendre confiance et de savourer pleinement ces premiers instants avec votre bébé. C'est ma vocation, et je la vis avec la même passion à chaque famille que j'accompagne.",
        aboutParcoursTitle: "Mon Parcours",
        aboutP1li1_html: "11 ans d'expérience en périnatalité",
        aboutP1li2_html: "HUG — Hôpital des Enfants : soins intensifs, néonatologie, oncologie, chirurgie pédiatrique",
        aboutP1li3_html: "Cliniques privées genevoises &amp; Hôpital Lenval (Nice)",
        aboutQ1: "Puéricultrice diplômée",
        aboutQ2: "Auxiliaire de Puériculture CRS",
        aboutQ3: "Conseillère en allaitement certifiée",
        aboutQ4: "Formée aux massages bébés & bains thérapeutiques",
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
        pric2Save: "Économie 200 CHF",
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
        pricWellnessTitle: "Massages, Bains Thérapeutiques & Consultations Sommeil",
        pricWellnessSubtitle: "Des soins complémentaires pour le bien-être de bébé et la sérénité des parents",
        pric5Title: "Massage Bébé — Séance Découverte",
        pric5Desc: "45 à 60 minutes, à domicile",
        pric5li1: "Apprentissage des gestes",
        pric5li2: "Soulagement des coliques",
        pric5li3: "Conseils personnalisés",
        pric6Title: "Massage Bébé — Pack 4 Séances",
        pric6Desc: "80 CHF / séance",
        pric6li1: "4 séances individuelles",
        pric6li2: "Suivi de progression",
        pric6li3: "Gestes adaptés à l'évolution de bébé",
        pricBadge2: "⭐ MEILLEUR TARIF",
        pric7Title: "Massage Bébé — Pack 8 Séances",
        pric7Desc: "75 CHF / séance",
        pric7li1: "8 séances individuelles",
        pric7li2: "Le meilleur tarif à la séance",
        pric7li3: "Suivi complet sur plusieurs mois",
        pric8Title: "Bain Thalasso Thérapeutique",
        pric8Desc: "Séance unique, environ 1h30",
        pric8Pack: "Pack 3 séances : 380 CHF (127 CHF/séance)",
        pric8Context: "Réservé aux bébés de la naissance à 1 mois · +30 CHF/séance pour les jumeaux.",
        pric8li1: "Sensation in utero recréée",
        pric8li2: "Surveillance professionnelle",
        pric8li3: "Parents invités à participer",
        pric10Title: "Consultation Sommeil et Pleurs",
        pric10Desc: "45-60 min, par message ou vidéo",
        pric10li1: "À distance, où que vous soyez",
        pric10li2: "Routines sur-mesure",
        pric10li3: "Quelques jours de suivi message inclus",
        pric11Title: "Atelier Portage",
        pric11Desc: "1h à domicile",
        pric11li1: "Choix du moyen de portage adapté",
        pric11li2: "Apprentissage sécurisé",
        pric11li3: "Conseils pour le quotidien",
        pricPaymentBank: "Virement bancaire",
        pricPaymentCash: "Espèces",
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
        mentionsCookiesText: "Ce site utilise Google Analytics (statistiques de fréquentation anonymisées) afin d'améliorer l'expérience utilisateur. La préférence de langue est enregistrée localement dans votre navigateur (localStorage). Vous pouvez refuser le suivi via les paramètres de votre navigateur (Do Not Track) ou une extension de blocage.",
        mentionsRights: "Droits",
        mentionsRights_html: "Vous disposez d'un droit d'accès, de rectification et de suppression de vos données. Pour toute demande : <a href=\"mailto:contact@cocoonurse.ch\" class=\"underline\" style=\"color:#D4899D;\">contact@cocoonurse.ch</a>",

        // Pages dédiées — éléments partagés
        breadcrumbHome: "Accueil",
        ctaSeeAllPricing: "Voir tous les tarifs →",
        ctaViewFullFaq: "Voir toutes les questions →",
        ctaLearnMoreNight: "En savoir plus sur la garde de nuit →",
        ctaLearnMorePueri: "En savoir plus sur la puéricultrice à domicile →",
        sharedWhyTitle: "Pourquoi les familles choisissent Cocoonurse",
        sharedTestimonialTitle: "Ils m'ont fait confiance",
        sharedZoneTitle: "Zone d'intervention",

        // Page dédiée — Garde de Nuit Bébé Genève
        pageNightBreadcrumb: "Garde de Nuit Bébé Genève",
        pageNightKicker: "Puéricultrice diplômée · Disponible 24h/24, 7j/7",
        pageNightH1: "Garde de Nuit Bébé à Genève",
        pageNightIntro_html: "Les premières semaines avec un nouveau-né sont épuisantes : réveils toutes les deux heures, nuits hachées, corps qui ne récupère jamais vraiment. Une <strong>garde de nuit bébé à domicile</strong> change tout — je m'occupe des biberons, des changes, de l'apaisement et de la surveillance de votre bébé pendant toute la nuit, pendant que vous dormez enfin d'une traite. Puéricultrice diplômée avec <strong>11 ans d'expérience en néonatologie</strong> aux Hôpitaux Universitaires de Genève (HUG), j'interviens à votre domicile partout dans le canton de Genève, le canton de Vaud et la France voisine, 7 nuits sur 7.",
        pageNightIncludedTitle: "Ce qui est inclus dans une garde de nuit",
        pageNightFormulasTitle: "Formules de garde de nuit",
        pageNightFormulasSubtitle: "De la nuit ponctuelle à l'accompagnement complet",
        pageNightFaqTitle: "Questions fréquentes sur la garde de nuit",
        pageNightCtaTitle: "Réservez votre garde de nuit",
        pageNightCtaText: "Places limitées chaque semaine — réponse en quelques minutes sur WhatsApp.",

        // Page dédiée — Puéricultrice à Domicile Genève
        pagePueriBreadcrumb: "Puéricultrice à Domicile Genève",
        pagePueriKicker: "11 ans d'expérience en néonatologie · HUG Genève",
        pagePueriH1: "Puéricultrice à Domicile à Genève",
        pagePueriIntro_html: "Entre les tétées, les pleurs à décoder et les nuits sans repère, les premières semaines de vie d'un bébé demandent une présence à la fois rassurante et compétente. En tant que <strong>puéricultrice à domicile à Genève</strong>, je prends en charge tous les soins de votre nouveau-né — alimentation, hygiène, éveil, surveillance médicale — de jour comme de nuit. Formée en soins intensifs, néonatologie, oncologie et chirurgie pédiatrique à l'Hôpital des Enfants des HUG, puis dans des cliniques privées genevoises et à l'Hôpital Lenval de Nice, j'apporte une expertise médicale que la garde d'enfant classique n'offre pas.",
        pagePueriDiffTitle: "Puéricultrice, garde d'enfant, infirmière : quelle différence ?",
        pagePueriIncludedTitle: "Ce qui est inclus au quotidien",
        pagePueriQualifTitle: "Mes qualifications",
        pagePueriFaqTitle: "Questions fréquentes sur les soins à domicile",
        pagePueriCtaTitle: "Parlons des besoins de votre bébé",
        pagePueriCtaText: "Réponse sous 2h, 7j/7, par WhatsApp ou par le formulaire de contact.",

        // Page dédiée — Tarifs
        pageTarifsBreadcrumb: "Tarifs",
        pageTarifsKicker: "Transparence totale · Aucun frais caché",
        pageTarifsH1: "Tarifs — Garde de Nuit, Puéricultrice & Soins Bébé à Genève",
        pageTarifsIntro_html: "Chaque famille est différente : certaines ont besoin d'une seule nuit de répit, d'autres d'un accompagnement complet sur plusieurs semaines. Voici l'ensemble de mes tarifs, sans surprise ni frais caché — garde de nuit, accompagnement au retour de maternité, massage bébé, bain thalasso thérapeutique et consultations sommeil. Les prix incluent le déplacement dans le canton de Genève ; un supplément s'applique pour le canton de Vaud et la France voisine (voir détail plus bas).",
        pageTarifsChoiceTitle: "Comment choisir sa formule ?",
        pageTarifsChoice_html: "<strong>Une nuit ponctuelle</strong> pour souffler ou récupérer après une naissance difficile → Nuit Découverte. <strong>Un retour de maternité en douceur</strong>, avec formation aux soins et suivi les jours suivants → Pack Retour Maison. <strong>Une semaine complète</strong> pour poser des routines de sommeil durables → Semaine Sérénité. <strong>Des besoins spécifiques</strong> — jumeaux, prématurés, plusieurs semaines d'accompagnement → un devis Sur-Mesure, sans engagement.",
        pageTarifsFaqTitle: "Questions fréquentes sur les tarifs",
        pageTarifsCtaTitle: "Une question sur les tarifs ?",
        pageTarifsCtaText: "Devis gratuit et sans engagement, réponse sous 2h.",

        // Liens "En savoir plus" — cartes homepage vers les 4 pages suivantes
        ctaLearnMoreBain: "En savoir plus sur le bain thalasso →",
        ctaLearnMoreMassage: "En savoir plus sur le massage bébé →",
        ctaLearnMoreSommeil: "En savoir plus sur la consultation sommeil →",
        ctaLearnMoreRetour: "En savoir plus sur le retour de maternité →",

        // Page dédiée — Bain Thalasso Bébé Genève
        pageBainBreadcrumb: "Bain Thalasso Bébé Genève",
        pageBainKicker: "Réservé aux bébés de la naissance à 1 mois · Encadré par une professionnelle de santé",
        pageBainH1: "Bain Thalasso Thérapeutique pour Bébé à Genève",
        pageBainIntro_html: "Le bain thalasso est une expérience unique et apaisante, réservée aux tout premiers jours de vie. Plongé dans une eau chaude à la température idéale, bébé retrouve les sensations vécues in utero — un véritable moment de détente et de connexion, à vivre en famille. Je propose ce soin à domicile à Genève en tant que <strong>professionnelle de santé diplômée</strong>, avec une surveillance attentive à chaque instant.",
        pageBainIncludedTitle: "Ce qui est inclus",
        pageBainFormulaTitle: "Tarif du bain thalasso",
        pageBainFaqTitle: "Questions fréquentes sur le bain thalasso",
        pageBainCtaTitle: "Réservez le bain thalasso de votre bébé",
        pageBainCtaText: "Séance unique ou pack 3 séances — réponse sous 2h.",
        faqBain1Q: "Jusqu'à quel âge peut-on faire un bain thalasso ?",
        faqBain1A: "Le bain thalasso est proposé de la naissance jusqu'à 1 mois — la fenêtre idéale où bébé conserve encore le réflexe de position fœtale, pour un effet maximal.",
        faqBain2Q: "Le bain thalasso est-il sans risque pour mon bébé ?",
        faqBain2A: "Oui, chaque bain est encadré à chaque instant par une professionnelle de santé diplômée, avec une eau à température contrôlée et une surveillance continue.",
        faqBain3Q: "Puis-je assister au bain avec mon bébé ?",
        faqBain3A: "Bien sûr, les parents sont invités à participer pour renforcer ce moment d'émotion et de connexion partagé en famille.",

        // Page dédiée — Massage Bébé Genève
        pageMassageBreadcrumb: "Massage Bébé Genève",
        pageMassageKicker: "Atelier à domicile · Techniques traditionnelles adaptées",
        pageMassageH1: "Atelier Massage Bébé à Genève",
        pageMassageIntro_html: "Le massage bébé est une pratique ancestrale aux bienfaits multiples : il soulage les coliques, favorise un sommeil plus paisible et renforce le lien d'attachement. Lors d'un atelier à domicile à Genève, je vous guide pas à pas dans l'apprentissage de gestes simples, doux et adaptés à votre bébé — pour que vous puissiez ensuite les reproduire vous-même, en toute confiance, au quotidien.",
        pageMassageIncludedTitle: "Ce que vous apprendrez",
        pageMassageFormulaTitle: "Formules massage bébé",
        pageMassageFaqTitle: "Questions fréquentes sur le massage bébé",
        pageMassageCtaTitle: "Réservez votre atelier massage bébé",
        pageMassageCtaText: "Séance découverte ou pack progressif — réponse sous 2h.",
        faqMassage1Q: "À partir de quel âge peut-on masser bébé ?",
        faqMassage1A: "Le massage bébé peut débuter dès les premières semaines de vie, une fois le cordon ombilical cicatrisé. Les gestes sont toujours adaptés à l'âge et à la sensibilité de votre bébé.",
        faqMassage2Q: "Le massage peut-il vraiment soulager les coliques ?",
        faqMassage2A: "Oui, des gestes ciblés permettent d'apaiser les tensions digestives et de soulager les coliques, en plus de stimuler la circulation sanguine et le système immunitaire.",
        faqMassage3Q: "Combien de séances faut-il pour apprendre les gestes ?",
        faqMassage3A: "Une séance découverte suffit pour démarrer, mais le pack de 4 ou 8 séances permet un suivi de progression et une adaptation aux différentes étapes du développement de bébé.",

        // Page dédiée — Consultation Sommeil et Pleurs
        pageSommeilBreadcrumb: "Consultation Sommeil Bébé",
        pageSommeilKicker: "Consultation à distance · Message ou vidéo",
        pageSommeilH1: "Consultation Sommeil et Pleurs de Bébé",
        pageSommeilIntro_html: "Réveils fréquents, difficultés d'endormissement, pleurs inexpliqués : le sommeil de bébé est l'une des plus grandes sources de fatigue et d'inquiétude des jeunes parents. Je vous propose des <strong>consultations personnalisées à distance</strong>, par message ou en visioconférence, pour comprendre ce qui se joue et mettre en place des routines adaptées — depuis chez vous, à votre rythme, où que vous soyez à Genève ou ailleurs.",
        pageSommeilIncludedTitle: "Ce qui est inclus",
        pageSommeilFormulaTitle: "Tarif de la consultation",
        pageSommeilFaqTitle: "Questions fréquentes sur le sommeil de bébé",
        pageSommeilCtaTitle: "Réservez votre consultation sommeil",
        pageSommeilCtaText: "Par message ou vidéo, réponse sous 2h.",
        faqSommeil1Q: "Comment se déroule une consultation sommeil à distance ?",
        faqSommeil1A: "Par message ou en visioconférence, où que vous soyez : nous faisons le point sur les habitudes de sommeil de votre bébé et établissons ensemble un plan d'action personnalisé.",
        faqSommeil2Q: "À partir de quel âge peut-on consulter pour le sommeil de bébé ?",
        faqSommeil2A: "Dès les premières semaines si vous avez des questions, et particulièrement utile entre 4 et 12 mois, lors des grandes étapes du sommeil (régressions, transition au lit, sevrage des tétées nocturnes).",
        faqSommeil3Q: "Le suivi s'arrête-t-il après la consultation ?",
        faqSommeil3A: "Non, quelques jours de suivi par message sont inclus pour ajuster ensemble les routines mises en place.",

        // Page dédiée — Retour de Maternité
        pageRetourBreadcrumb: "Retour de Maternité Genève",
        pageRetourKicker: "Puéricultrice diplômée · Formation complète aux soins",
        pageRetourH1: "Accompagnement au Retour de Maternité à Genève",
        pageRetourIntro_html: "Rentrer à la maison avec son nouveau-né est un moment aussi merveilleux que déstabilisant : il faut apprivoiser les soins, gérer la fatigue et trouver ses repères, souvent sans expérience. Mon <strong>accompagnement au retour de maternité</strong> vous offre une présence rassurante dès les premiers jours à domicile — je prends en charge les soins de jour comme de nuit, je vous forme aux bons gestes, et je reste disponible par WhatsApp les semaines suivantes pour répondre à vos questions.",
        pageRetourIncludedTitle: "Ce qui est inclus",
        pageRetourFormulaTitle: "Formules retour de maternité",
        pageRetourFaqTitle: "Questions fréquentes sur le retour de maternité",
        pageRetourCtaTitle: "Préparez votre retour de maternité",
        pageRetourCtaText: "Réservez dès la grossesse ou juste après la naissance — réponse sous 2h."
    },
    en: {
        // Navigation
        navAbout: "About",
        navServices: "Services",
        navPricing: "Pricing",
        navContact: "Contact",

        // Accessibility (aria-label)
        ariaBackToTop: "Back to top",
        ariaContactSection: "Go to contact section",
        ariaPrevTestimonial: "Previous testimonial",
        ariaNextTestimonial: "Next testimonial",

        // Hero
        heroSubtitle: "Maternity Nurse & Night Nanny | Geneva",
        heroTagline: "Rest. I'll take care of everything.",
        heroYears: "years",
        heroYearsLabel: "of experience",
        heroFamilies: "families",
        heroFamiliesLabel: "supported",
        heroResponse: "Fast response",
        heroButton: "Contact Me",
        heroQuote: "Certified paediatric nurse, by your side in these precious moments.",
        
        // About
        aboutMainTitle: "About Cocoonurse",
        aboutPhilosophyQuote: "I deeply believe that every family deserves support that respects their values, their rhythm and their choices. My role is not to impose a method, but to guide, support and give you the tools to gain confidence and serenity. Your well-being and that of your baby are at the heart of every gesture, every piece of advice, every shared moment.",
        aboutQualTitle: "Qualifications",
        
        // Experience
        // Services
        servicesTitle: "My Services",
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
        servCard5Title: "Therapeutic Thalasso Baby Bath",
        servCard5P1: "A unique and soothing experience that I offer as a qualified healthcare professional, for babies up to 1 month old. Immersed in water at the ideal warm temperature, baby rediscovers the sensations experienced in utero thanks to the movement of the water and the wrap.",
        servCard5P2: "Each bath is adapted to the child's rhythm and comfort, under my close supervision. Parents are invited to take part to strengthen this unique and precious bond. Far more than a care routine, it is a true \"bath of emotions\".",
        servCard5Li1_html: '<strong class="text-sand-800">Ideal window (birth to 1 month):</strong> baby still retains the fetal position reflex, for maximum effect',
        servCard5Li2_html: '<strong class="text-sand-800">In-utero sensation recreated:</strong> warm water, enveloping movement and wrap to recreate the comfort of the womb',
        servCard5Li3_html: '<strong class="text-sand-800">Continuous professional supervision:</strong> supervised at every moment by a qualified healthcare professional',
        servCard5Li4_html: '<strong class="text-sand-800">Far more than a care routine:</strong> a true moment of emotion and connection shared as a family',
        servCard6Title: "Baby Massage Workshop",
        servCard6P1: "I guide you step by step through learning baby massage, an ancestral practice with multiple benefits. You will learn simple, gentle and adapted gestures to relieve colic, promote peaceful sleep and strengthen the attachment bond with your baby.",
        servCard6P2: "Massage also stimulates blood circulation, the immune system, and your little one's sensory and cognitive development. A unique moment of closeness in a warm and caring atmosphere.",
        servCard6Li1_html: '<strong class="text-sand-800">Colic relief:</strong> targeted gestures to soothe digestive tension',
        servCard6Li2_html: '<strong class="text-sand-800">More peaceful sleep:</strong> a soothing ritual that promotes falling asleep',
        servCard6Li3_html: '<strong class="text-sand-800">Physiological benefits:</strong> stimulation of blood circulation and the immune system',
        servCard6Li4_html: '<strong class="text-sand-800">Sensory and cognitive awakening:</strong> touch actively stimulates your baby\'s development',
        servCard6Li5_html: '<strong class="text-sand-800">You become independent:</strong> gestures learned so you can repeat them yourself every day',
        servCard7Title: "Sleep & Crying Consultation",
        servCard7P1: "Questions about your baby's sleep, crying or night wakings? I offer personalised consultations by message or video, to support you at your own pace from home.",
        servCard7P2: "Together, we will establish suitable routines, strategies for managing wake-ups, and advice on co-sleeping, naps and the transition to a toddler bed. Professional, caring and accessible support, so the whole family can find peaceful sleep again.",
        servCard7Li1_html: '<strong class="text-sand-800">Remote consultation:</strong> by message or video call, wherever you are',
        servCard7Li2_html: '<strong class="text-sand-800">Tailored sleep routines:</strong> adapted to your baby\'s age and temperament',
        servCard7Li3_html: '<strong class="text-sand-800">Night waking management:</strong> concrete, gradual strategies',
        servCard7Li4_html: '<strong class="text-sand-800">Co-sleeping, naps and bed transition:</strong> answers to all your questions',
        servCard7Li5_html: '<strong class="text-sand-800">Caring support:</strong> no judgement, at your own pace',
        servCard8Title: "Babywearing Workshop",
        servCard8P1: "Babywearing is much more than a way to carry your baby around: it's a wonderful tool for bonding and soothing. I teach you how to choose and adjust wraps, slings and ergonomic carriers safely, at your home.",
        servCard8P2: "A carried baby cries less, sleeps better and feels reassured by closeness and movement. You gain freedom of movement in your daily life, while keeping your child close to you.",
        servCard8Li1_html: '<strong class="text-sand-800">Safety first:</strong> correct physiological positioning, hip dysplasia prevention',
        servCard8Li2_html: '<strong class="text-sand-800">The right carrier for you:</strong> woven wrap, sling or structured carrier, adapted to your baby and your body',
        servCard8Li3_html: '<strong class="text-sand-800">Less crying, more calm:</strong> close contact soothes baby and regulates their heart rate',
        servCard8Li4_html: '<strong class="text-sand-800">Everyday independence:</strong> tie your wrap on your own and carry with confidence, at home or out and about',

        // Pricing

        // Why Me
        whyMainTitle: "Personalised Support For Your Baby and You",
        whyAllaitTitle: "Certified Breastfeeding Consultant",
        whyAllaitP1: "Breastfeeding is natural... but not always easy. As a trained and certified breastfeeding consultant, I intimately know the challenges you may face: the crushing fatigue of the first weeks, pain that can be discouraging, constant questions about milk supply, positioning, and feed frequency.",
        whyAllaitP2: "I am here to listen without judgement, precisely identify the source of your difficulties — whether it's baby's positioning, latch issues, a restrictive tongue tie, or simply a need for reassurance. My goal? To make breastfeeding a moment of tenderness and connection, not a source of stress or guilt.",
        "whyAllaitP3_html": "If you choose bottle feeding, I support you with the same respect and expertise. <strong>Your choice is the right choice.</strong>",
        whyBainsTitle: "Sensory Therapeutic Baths",
        whyBainsP1: "This ritual can't be improvised: it requires constant medical supervision and a trained eye to spot the slightest tension in a newborn — expertise I bring directly from my years in neonatology.",
        whyBainsP2: "I choose the place, the temperature, the time of day with you, taking into account your baby's own rhythm and sensitivity — nothing is standardised, everything is designed for them.",
        "whyBainsP3_html": "And because this moment shouldn't stay a one-off, <strong>I pass on the gestures</strong> so you can reproduce it yourself, safely, as often as you'd like.",
        whyMassageTitle: "Traditional Baby Massage",
        whyMassageP1: "This isn't just a video tutorial I hand you: my experience in neonatal intensive care lets me immediately read your baby's signs of comfort or discomfort, and adapt every gesture to their build and temperament.",
        "whyMassageP2_html": "I stay available after the session to answer your questions, correct a gesture or reassure you — <strong>my goal is for you to massage confidently on your own</strong>, long after we've met.",
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
        copy: "Copy",
        contactName: "Name",
        contactEmail: "Email",
        contactPhone: "Phone",
        contactAddress: "Address",
        contactBirthdate: "Baby's expected birth date",
        contactAddressPlaceholder: "Street, postal code, city",
        contactBabies: "Number of babies",
        contactNeeds: "Your Needs",
        contactButton: "Send",
        contactInfoTitle: "Contact Information",
        contactInfoText: "Available throughout the Geneva canton, at your home or in an establishment.",
        contactAvailTitle: "Availability",
        contactAvailText: "Monday to Sunday, day and night, according to your needs.",
        contactLocation: "Geneva, Switzerland — View on Google Maps",
        
        // Footer
        footerSubtitle: "Maternity Nurse | Geneva",
        footerCopyright: "© 2024 Cocoonurse - All rights reserved",
        
        // Mobile Menu
        mobileMenuNote: "All my packages are customizable according to your needs. Contact me for a personalized quote.",
        
        // FAQ
        faqTitle: "FAQ",
        faqSubtitle: "Your questions, my answers",
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
        faq6Q: "How much does a night nurse cost in Geneva?",
        faq6A: "The Discovery Night (12h, 8pm-8am) is 300 CHF. Discounted packages are available for multiple nights or a full week — see the Pricing section above.",
        faq7Q: "What happens if you're unavailable or sick?",
        faq7A: "As an independent practitioner, I let you know immediately if anything comes up so we can find the best solution together for your family.",
        faq8Q: "Which cities around Geneva do you cover?",
        faq8A: "I travel throughout the canton of Geneva (Carouge, Lancy, Meyrin, Vernier, Onex, Thônex, Chêne-Bougeries, Cologny...), the nearby canton of Vaud (Nyon, Coppet), and neighbouring France (Annemasse, Saint-Julien-en-Genevois, Ferney-Voltaire, Gaillard).",
        faq9Q: "What's the difference between childcare, a home nurse, and a maternity nurse?",
        faq9A: "Standard childcare watches the child without medical training, and a home nurse handles one-off medical care. Cocoonurse combines both: I'm a qualified pediatric nurse (puéricultrice) and Swiss Red Cross childcare assistant with 11 years of neonatal experience — bringing together supervision, care, and parental support in a single service, day and night.",

        // Testimonials
        testimonialsTitle: "Testimonials",
        testimonial1Text: "\"Alicia was a precious help during the first weeks with our twins. Professional and caring.\"",
        testimonial2Text: "\"Her experience in neonatology reassured us. Our premature baby was in good hands.\"",
        testimonial3Text: "\"Nights were a nightmare before Alicia intervened. She established a routine that changed our lives.\"",

        // Navbar
        navHow: "How it works",
        heroDiscover: "Discover",

        // About – new layout
        aboutBioP1_html: "A <strong>perinatal care professional</strong> and <strong>Maternity Nurse</strong> for <strong>11 years</strong>, I learned my craft where standards matter most: at the <strong>Geneva University Hospitals' Children's Hospital (HUG)</strong>, in paediatric intensive care as well as neonatology, oncology and paediatric surgery, then in several private clinics in Geneva. Today, I bring that clinical rigour to families, day and night, so you can find sleep, confidence and peace of mind again.",
        aboutBioP2_html: "Trained in <strong>France</strong> and <strong>Geneva</strong>, I deeply love a profession that combines medical rigour with human warmth. I come to you, at any hour of the day or night, with one goal in mind: to listen to you, reassure you, and move at your pace, on your terms — never imposing a method.",
        aboutBioP3_html: "Becoming a parent is a life-changing shift, even when everything goes smoothly. I'm committed to being that steady, reassuring presence that lets you breathe, regain confidence, and fully savour these first moments with your baby. It's my calling, and I bring the same passion to every family I support.",
        aboutParcoursTitle: "My Background",
        aboutP1li1_html: "11 years of experience in perinatal care",
        aboutP1li2_html: "HUG — Children's Hospital: intensive care, neonatology, oncology, paediatric surgery",
        aboutP1li3_html: "Private clinics in Geneva &amp; Lenval Hospital (Nice)",
        aboutQ1: "Certified paediatric nurse",
        aboutQ2: "CRS Healthcare Assistant",
        aboutQ3: "Certified breastfeeding consultant",
        aboutQ4: "Trained in baby massage & therapeutic baths",
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
        pric2Save: "Save CHF 200",
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
        pricWellnessTitle: "Massages, Therapeutic Baths & Sleep Consultations",
        pricWellnessSubtitle: "Complementary care for your baby's wellbeing and your peace of mind",
        pric5Title: "Baby Massage — Discovery Session",
        pric5Desc: "45 to 60 minutes, at home",
        pric5li1: "Learn the techniques",
        pric5li2: "Colic relief",
        pric5li3: "Personalised advice",
        pric6Title: "Baby Massage — 4-Session Pack",
        pric6Desc: "CHF 80 / session",
        pric6li1: "4 individual sessions",
        pric6li2: "Progress follow-up",
        pric6li3: "Gestures adapted as baby grows",
        pricBadge2: "⭐ BEST VALUE",
        pric7Title: "Baby Massage — 8-Session Pack",
        pric7Desc: "CHF 75 / session",
        pric7li1: "8 individual sessions",
        pric7li2: "Best price per session",
        pric7li3: "Full follow-up over several months",
        pric8Title: "Therapeutic Thalasso Baby Bath",
        pric8Desc: "Single session, about 1h30",
        pric8Pack: "3-session pack: CHF 380 (CHF 127/session)",
        pric8Context: "For babies from birth to 1 month old · +CHF 30/session for twins.",
        pric8li1: "In-utero sensation recreated",
        pric8li2: "Professional supervision",
        pric8li3: "Parents invited to take part",
        pric10Title: "Sleep & Crying Consultation",
        pric10Desc: "45-60 min, by message or video",
        pric10li1: "Remote, wherever you are",
        pric10li2: "Tailored routines",
        pric10li3: "A few days of message follow-up included",
        pric11Title: "Babywearing Workshop",
        pric11Desc: "1h at home",
        pric11li1: "Right carrier for your baby",
        pric11li2: "Safe, hands-on learning",
        pric11li3: "Practical everyday advice",
        pricPaymentBank: "Bank transfer",
        pricPaymentCash: "Cash",
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
        mentionsCookiesText: "This site uses Google Analytics (anonymized usage statistics) to improve user experience. Language preference is stored locally in your browser (localStorage). You can opt out of tracking via your browser settings (Do Not Track) or a blocking extension.",
        mentionsRights: "Rights",
        mentionsRights_html: "You have the right to access, correct and delete your data. For any request: <a href=\"mailto:contact@cocoonurse.ch\" class=\"underline\" style=\"color:#D4899D;\">contact@cocoonurse.ch</a>",

        // Dedicated pages — shared elements
        breadcrumbHome: "Home",
        ctaSeeAllPricing: "See all pricing →",
        ctaViewFullFaq: "See all questions →",
        ctaLearnMoreNight: "Learn more about overnight care →",
        ctaLearnMorePueri: "Learn more about home newborn care →",
        sharedWhyTitle: "Why families choose Cocoonurse",
        sharedTestimonialTitle: "Families who trusted me",
        sharedZoneTitle: "Service area",

        // Dedicated page — Overnight Baby Care Geneva
        pageNightBreadcrumb: "Overnight Baby Care Geneva",
        pageNightKicker: "Certified newborn care specialist · Available 24/7",
        pageNightH1: "Overnight Baby Care in Geneva",
        pageNightIntro_html: "The first weeks with a newborn are exhausting: waking up every two hours, broken nights, a body that never truly recovers. <strong>Overnight baby care at home</strong> changes everything — I take care of feeds, diaper changes, soothing and monitoring your baby all night long, while you finally get a full night's sleep. A certified newborn care specialist with <strong>11 years of neonatal experience</strong> at Geneva University Hospitals (HUG), I come to your home anywhere in the canton of Geneva, the canton of Vaud and neighboring France, 7 nights a week.",
        pageNightIncludedTitle: "What's included in an overnight care session",
        pageNightFormulasTitle: "Overnight care packages",
        pageNightFormulasSubtitle: "From a single night to full support",
        pageNightFaqTitle: "Frequently asked questions about overnight care",
        pageNightCtaTitle: "Book your overnight care",
        pageNightCtaText: "Limited spots each week — get a reply within minutes on WhatsApp.",

        // Dedicated page — Home Newborn Care Specialist Geneva
        pagePueriBreadcrumb: "Home Newborn Care Specialist Geneva",
        pagePueriKicker: "11 years of neonatal experience · HUG Geneva",
        pagePueriH1: "Home Newborn Care Specialist in Geneva",
        pagePueriIntro_html: "Between feeds, decoding cries and nights with no sense of time, a newborn's first weeks call for a presence that is both reassuring and skilled. As a <strong>home newborn care specialist in Geneva</strong>, I take care of every aspect of your baby's care — feeding, hygiene, stimulation, medical monitoring — day and night. Trained in intensive care, neonatology, oncology and pediatric surgery at the Children's Hospital of HUG, then in private Geneva clinics and at the Lenval Hospital in Nice, I bring a medical expertise that standard childcare doesn't offer.",
        pagePueriDiffTitle: "Newborn care specialist vs. childminder vs. home nurse: what's the difference?",
        pagePueriIncludedTitle: "What's included day-to-day",
        pagePueriQualifTitle: "My qualifications",
        pagePueriFaqTitle: "Frequently asked questions about home newborn care",
        pagePueriCtaTitle: "Let's talk about your baby's needs",
        pagePueriCtaText: "Reply within 2 hours, 7 days a week, via WhatsApp or the contact form.",

        // Dedicated page — Pricing
        pageTarifsBreadcrumb: "Pricing",
        pageTarifsKicker: "Full transparency · No hidden fees",
        pageTarifsH1: "Pricing — Overnight Care, Newborn Care & Baby Wellness in Geneva",
        pageTarifsIntro_html: "Every family is different: some need a single night of relief, others full support over several weeks. Here is my complete pricing — overnight care, postpartum support, baby massage, therapeutic thalasso bath and sleep consultations — no surprises, no hidden fees. Prices include travel within the canton of Geneva; a surcharge applies for the canton of Vaud and neighboring France (details below).",
        pageTarifsChoiceTitle: "How to choose your package",
        pageTarifsChoice_html: "<strong>A single night</strong> to catch your breath or recover after a difficult birth → Discovery Night. <strong>A gentle homecoming</strong>, with hands-on training and follow-up in the days after → Homecoming Package. <strong>A full week</strong> to build lasting sleep routines → Serenity Week. <strong>Specific needs</strong> — twins, premature babies, several weeks of support → a free custom quote, no commitment.",
        pageTarifsFaqTitle: "Frequently asked questions about pricing",
        pageTarifsCtaTitle: "Questions about pricing?",
        pageTarifsCtaText: "Free, no-commitment quote, reply within 2 hours.",

        // "Learn more" links — homepage cards to the 4 pages below
        ctaLearnMoreBain: "Learn more about the thalasso bath →",
        ctaLearnMoreMassage: "Learn more about baby massage →",
        ctaLearnMoreSommeil: "Learn more about sleep consultations →",
        ctaLearnMoreRetour: "Learn more about postpartum homecoming →",

        // Dedicated page — Baby Thalasso Bath Geneva
        pageBainBreadcrumb: "Baby Thalasso Bath Geneva",
        pageBainKicker: "For newborns up to 1 month · Supervised by a healthcare professional",
        pageBainH1: "Therapeutic Baby Thalasso Bath in Geneva",
        pageBainIntro_html: "The thalasso bath is a unique and soothing experience, reserved for a baby's very first days of life. Immersed in warm water at the ideal temperature, your baby rediscovers the sensations felt in the womb — a true moment of relaxation and connection, shared as a family. I offer this care at home in Geneva as a <strong>certified healthcare professional</strong>, with attentive supervision at every moment.",
        pageBainIncludedTitle: "What's included",
        pageBainFormulaTitle: "Thalasso bath pricing",
        pageBainFaqTitle: "Frequently asked questions about the thalasso bath",
        pageBainCtaTitle: "Book your baby's thalasso bath",
        pageBainCtaText: "Single session or 3-session pack — reply within 2 hours.",
        faqBain1Q: "Up to what age can a baby have a thalasso bath?",
        faqBain1A: "The thalasso bath is offered from birth up to 1 month — the ideal window where babies still retain the fetal position reflex, for maximum effect.",
        faqBain2Q: "Is the thalasso bath safe for my baby?",
        faqBain2A: "Yes, every bath is supervised at all times by a certified healthcare professional, with water at a controlled temperature and continuous monitoring.",
        faqBain3Q: "Can I be present for the bath with my baby?",
        faqBain3A: "Of course — parents are invited to take part, making it a shared moment of emotion and connection for the whole family.",

        // Dedicated page — Baby Massage Geneva
        pageMassageBreadcrumb: "Baby Massage Geneva",
        pageMassageKicker: "At-home workshop · Traditional techniques, adapted",
        pageMassageH1: "Baby Massage Workshop in Geneva",
        pageMassageIntro_html: "Baby massage is an ancestral practice with many benefits: it relieves colic, promotes more peaceful sleep and strengthens the bond of attachment. During an at-home workshop in Geneva, I guide you step by step through simple, gentle techniques adapted to your baby — so you can then repeat them yourself, with confidence, every day.",
        pageMassageIncludedTitle: "What you'll learn",
        pageMassageFormulaTitle: "Baby massage packages",
        pageMassageFaqTitle: "Frequently asked questions about baby massage",
        pageMassageCtaTitle: "Book your baby massage workshop",
        pageMassageCtaText: "Discovery session or progressive pack — reply within 2 hours.",
        faqMassage1Q: "From what age can a baby be massaged?",
        faqMassage1A: "Baby massage can start from the first few weeks of life, once the umbilical cord has healed. The techniques are always adapted to your baby's age and sensitivity.",
        faqMassage2Q: "Can massage really relieve colic?",
        faqMassage2A: "Yes, targeted techniques help ease digestive tension and relieve colic, while also stimulating blood circulation and the immune system.",
        faqMassage3Q: "How many sessions does it take to learn the techniques?",
        faqMassage3A: "A single discovery session is enough to get started, but the 4- or 8-session pack allows for progress tracking and adapts to your baby's developmental stages.",

        // Dedicated page — Baby Sleep and Crying Consultation
        pageSommeilBreadcrumb: "Baby Sleep Consultation",
        pageSommeilKicker: "Remote consultation · Message or video",
        pageSommeilH1: "Baby Sleep and Crying Consultation",
        pageSommeilIntro_html: "Frequent waking, trouble falling asleep, unexplained crying: a baby's sleep is one of the biggest sources of exhaustion and worry for new parents. I offer <strong>personalized remote consultations</strong>, by message or video call, to understand what's going on and set up routines that work — from home, at your own pace, wherever you are in Geneva or beyond.",
        pageSommeilIncludedTitle: "What's included",
        pageSommeilFormulaTitle: "Consultation pricing",
        pageSommeilFaqTitle: "Frequently asked questions about baby sleep",
        pageSommeilCtaTitle: "Book your sleep consultation",
        pageSommeilCtaText: "By message or video, reply within 2 hours.",
        faqSommeil1Q: "How does a remote sleep consultation work?",
        faqSommeil1A: "By message or video call, wherever you are: we review your baby's sleep habits together and build a personalized action plan.",
        faqSommeil2Q: "From what age can I get a consultation about my baby's sleep?",
        faqSommeil2A: "From the very first weeks if you have questions, and especially useful between 4 and 12 months, during major sleep milestones (regressions, crib transition, night-weaning).",
        faqSommeil3Q: "Does the support stop after the consultation?",
        faqSommeil3A: "No, a few days of message follow-up are included so we can adjust the routines put in place together.",

        // Dedicated page — Postpartum Homecoming Support
        pageRetourBreadcrumb: "Postpartum Homecoming Geneva",
        pageRetourKicker: "Certified newborn care specialist · Full hands-on training",
        pageRetourH1: "Postpartum Homecoming Support in Geneva",
        pageRetourIntro_html: "Coming home with a newborn is as wonderful as it is overwhelming: getting the hang of care routines, managing exhaustion, and finding your footing, often with no prior experience. My <strong>postpartum homecoming support</strong> gives you a reassuring presence from the very first days at home — I take care of both day and night care, train you in the right techniques, and stay available on WhatsApp in the following weeks to answer your questions.",
        pageRetourIncludedTitle: "What's included",
        pageRetourFormulaTitle: "Homecoming packages",
        pageRetourFaqTitle: "Frequently asked questions about postpartum homecoming",
        pageRetourCtaTitle: "Prepare your homecoming",
        pageRetourCtaText: "Book during pregnancy or right after birth — reply within 2 hours."
    }
};

// Langue actuelle : figée par page (window.COCOONURSE_LANG, défini dans le <head>)
// pour que le contenu injecté en JS (témoignages, formulaire...) corresponde
// toujours à la langue statique de la page, indépendamment de tout ancien
// choix stocké en localStorage sur l'autre page.
let currentLang = (typeof window !== 'undefined' && window.COCOONURSE_LANG) || localStorage.getItem('cocoonurse-lang') || 'fr';

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
    document.querySelectorAll('[data-i18n-placeholder]').forEach(element => {
        const key = element.getAttribute('data-i18n-placeholder');
        const translation = translations[currentLang][key];
        if (translation !== undefined) {
            element.setAttribute('placeholder', translation);
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
