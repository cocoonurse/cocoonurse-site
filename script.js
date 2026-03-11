
// ============================================
// PÉTALES DE FLEURS (8 secondes puis arrêt)
// ============================================
window.addEventListener('load', () => {
    const petalsContainer = document.querySelector('.hero-asymmetric') || document.querySelector('.hero');
    if (!petalsContainer) return;

    for (let i = 0; i < 15; i++) {
        const petal = document.createElement('div');
        petal.className = 'petal';
        petal.style.left = Math.random() * 100 + '%';
        petal.style.animationDelay = Math.random() * 2 + 's';
        petal.style.animationDuration = (4 + Math.random() * 3) + 's';
        petalsContainer.appendChild(petal);
    }

    // Après 8 secondes, fondu et suppression
    setTimeout(() => {
        const petals = document.querySelectorAll('.petal');
        petals.forEach(petal => {
            petal.style.opacity = '0';
            petal.style.transition = 'opacity 2s ease';
        });
        setTimeout(() => {
            petals.forEach(petal => petal.remove());
        }, 2000);
    }, 8000);
});

// ============================================
// HERO — parallaxe image principale au scroll
// ============================================
(function heroImgParallax() {
    const img = document.getElementById('hero-main-img');
    if (!img) return;
    window.addEventListener('scroll', () => {
        const offset = window.scrollY * 0.18;
        img.style.transform = `scale(1.03) translateY(${Math.min(offset, 30)}px)`;
    }, { passive: true });
})();

// ============================================================
// PARALLAXE GLOBAL — performant, 60fps, GPU-accelerated
// ============================================================
(function initParallax() {

    // --- Créer les blobs décoratifs de fond (couches 1 & 2) ---
    const blobData = [
        { size: 500, x: -10, y: 10,  color: 'rgba(255,192,203,0.07)', speed: 0.15, blur: 80 },
        { size: 350, x: 70,  y: 25,  color: 'rgba(245,230,211,0.09)', speed: 0.20, blur: 60 },
        { size: 420, x: 20,  y: 50,  color: 'rgba(255,192,203,0.06)', speed: 0.12, blur: 90 },
        { size: 280, x: 80,  y: 60,  color: 'rgba(217,169,105,0.06)', speed: 0.18, blur: 70 },
        { size: 380, x: 5,   y: 78,  color: 'rgba(255,192,203,0.07)', speed: 0.10, blur: 80 },
        { size: 300, x: 60,  y: 88,  color: 'rgba(245,230,211,0.08)', speed: 0.16, blur: 65 },
    ];

    const blobEls = blobData.map(b => {
        const el = document.createElement('div');
        el.className = 'parallax-blob';
        el.style.cssText = `
            position: fixed;
            pointer-events: none;
            z-index: 0;
            border-radius: 50%;
            width: ${b.size}px;
            height: ${b.size}px;
            left: ${b.x}vw;
            top: ${b.y}vh;
            background: ${b.color};
            filter: blur(${b.blur}px);
            will-change: transform;
        `;
        el.dataset.speed = b.speed;
        document.body.appendChild(el);
        return el;
    });

    // --- Collecter les éléments parallaxe ---
    let galleryImgs, aboutImgs, sectionTitles, heroBg;

    function collectElements() {
        galleryImgs    = [...document.querySelectorAll('.masonry-item img')];
        aboutImgs      = [...document.querySelectorAll('#about img')];
        sectionTitles  = [...document.querySelectorAll('section h2')];
        heroBg         = document.getElementById('hero');
    }

    // --- Boucle RAF principale ---
    let ticking = false;
    let lastY = 0;

    function applyParallax() {
        const scrollY = window.scrollY;
        const vh = window.innerHeight;

        // 1. Blobs de fond (les plus lents — couche 1 & 2)
        blobEls.forEach(el => {
            const speed = parseFloat(el.dataset.speed);
            el.style.transform = `translate3d(0, ${scrollY * speed}px, 0)`;
        });

        // 2. Hero background (très subtil)
        if (heroBg) {
            heroBg.style.backgroundPositionY = `calc(30% + ${scrollY * 0.3}px)`;
        }

        // 3. Images galerie (plus lentes que le scroll)
        galleryImgs.forEach(img => {
            const rect = img.getBoundingClientRect();
            if (rect.bottom < 0 || rect.top > vh) return;
            const center = rect.top + rect.height / 2;
            const offset = (vh / 2 - center) * 0.08;
            img.style.transform = `translate3d(0, ${offset}px, 0) scale(1.05)`;
        });

        // 4. Images "À Propos" (parallaxe vertical doux)
        aboutImgs.forEach(img => {
            const rect = img.getBoundingClientRect();
            if (rect.bottom < 0 || rect.top > vh) return;
            const offset = (rect.top - vh / 2) * 0.06;
            img.style.transform = `translate3d(0, ${offset}px, 0)`;
        });

        // 5. Titres de sections (légèrement plus rapides — parallaxe inverse)
        sectionTitles.forEach(h2 => {
            const rect = h2.getBoundingClientRect();
            if (rect.bottom < 0 || rect.top > vh) return;
            const offset = (vh / 2 - rect.top - rect.height / 2) * 0.04;
            h2.style.transform = `translate3d(0, ${-offset}px, 0)`;
        });

        ticking = false;
    }

    window.addEventListener('scroll', () => {
        if (!ticking) {
            requestAnimationFrame(applyParallax);
            ticking = true;
        }
    }, { passive: true });

    // Init au chargement
    document.addEventListener('DOMContentLoaded', () => {
        collectElements();
        applyParallax();
    });

    // Recollecte après ajout dynamique (témoignages, FAQ)
    setTimeout(() => {
        collectElements();
    }, 800);

})();

// Back to top button
const backToTopBtn = document.getElementById('back-to-top');
if (backToTopBtn) {
    window.addEventListener('scroll', function() {
        if (window.scrollY > 300) {
            backToTopBtn.classList.add('show');
        } else {
            backToTopBtn.classList.remove('show');
        }
    });
    
    backToTopBtn.addEventListener('click', function() {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    });
}

// Floating particles for all sections
document.querySelectorAll('section').forEach(section => {
    const particles = document.createElement('floating-particles');
    section.prepend(particles);
});

// Ripple effect for buttons
document.addEventListener('click', function(e) {
    if (e.target.closest('.ripple-btn')) {
        const btn = e.target.closest('.ripple-btn');
        const ripple = document.createElement('span');
        ripple.classList.add('ripple-effect');
        
        const rect = btn.getBoundingClientRect();
        const size = Math.max(rect.width, rect.height);
        const x = e.clientX - rect.left - size/2;
        const y = e.clientY - rect.top - size/2;
        
        ripple.style.width = ripple.style.height = `${size}px`;
        ripple.style.left = `${x}px`;
        ripple.style.top = `${y}px`;
        
        btn.appendChild(ripple);
        
        setTimeout(() => ripple.remove(), 800);
    }
});
    // Contenu en français uniquement
document.addEventListener('DOMContentLoaded', function() {
    // Initialisation de la langue en français
    updatePageLanguage();
function updatePageLanguage() {
    const lang = translations.fr;
    // Mise à jour du contenu de la modal
    const modal = document.querySelector('contact-modal');
    if (modal) {
        const shadowRoot = modal.shadowRoot;
        shadowRoot.querySelector('h3').textContent = lang.contactTitle;
        shadowRoot.querySelectorAll('.copy-btn').forEach(btn => {
            btn.textContent = lang.copy;
        });
    }
    // Mise à jour de tous les éléments avec l'attribut data-translate
    document.querySelectorAll('[data-translate]').forEach(el => {
        const key = el.getAttribute('data-translate');
        if (lang[key]) {
            el.textContent = lang[key];
        }
    });

    // Mise à jour des labels du formulaire
    const formLabels = {
        name: lang.nameLabel,
        email: lang.emailLabel,
        phone: lang.phoneLabel,
        needs: lang.needsLabel
    };
    
    Object.entries(formLabels).forEach(([id, text]) => {
        const label = document.querySelector(`label[for="${id}"]`);
        if (label) label.textContent = text;
    });

    // Mise à jour du bouton du formulaire
    const submitBtn = document.querySelector('#contact-form button[type="submit"]');
    if (submitBtn) submitBtn.textContent = lang.submitBtn;

    // Mise à jour des boutons de tarifs
    document.querySelectorAll('#pricing a').forEach(btn => {
        btn.textContent = lang.bookBtn;
    });

    // Mise à jour du bouton hero
    const heroBtn = document.querySelector('.pulse-button');
    if (heroBtn) heroBtn.textContent = lang.contactBtn;

    // Mise à jour du texte du menu mobile
    const mobileMenuText = document.querySelector('.mobile-menu-text');
    if (mobileMenuText) mobileMenuText.textContent = lang.mobileMenuText;

    // Rafraîchissement des icônes feather
    feather.replace();
}
    // Bouton retour en haut
    const backToTopButton = document.createElement('button');
    backToTopButton.id = 'back-to-top';
    backToTopButton.innerHTML = '<i data-feather="arrow-up" class="w-6 h-6"></i>';
    document.body.appendChild(backToTopButton);
    
    window.addEventListener('scroll', () => {
        if (window.pageYOffset > 300) {
            backToTopButton.classList.add('show');
        } else {
            backToTopButton.classList.remove('show');
        }
    });

    backToTopButton.addEventListener('click', () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });
    // Effet parallaxe pour le background
window.addEventListener('scroll', function() {
        const scrollPosition = window.pageYOffset;
        const background = document.querySelector('body::before');
        if (background) {
            background.style.backgroundPositionY = `-${scrollPosition * 0.2}px`;
        }
    });
    // Effet parallaxe amélioré pour l'image hero avec inclinaison 3D
const heroImage = document.querySelector('.hero-image');
    const heroBg = document.querySelector('.hero-image .parallax-background');
    
    // Scroll parallax
    window.addEventListener('scroll', () => {
        if (heroBg) {
            const scrollY = window.scrollY;
            heroBg.style.transform = `translateZ(-10px) scale(1.1) translateY(${scrollY * 0.2}px)`;
        }
    });
if (heroImage) {
        heroImage.addEventListener('mousemove', (e) => {
            const xAxis = (window.innerWidth / 2 - e.pageX) / 20;
            const yAxis = (window.innerHeight / 2 - e.pageY) / 20;
            
            const foreground = heroImage.querySelector('img:not(.parallax-background)');
            const background = heroImage.querySelector('.parallax-background');
            
            foreground.style.transform = `translateX(${xAxis}px) translateY(${yAxis}px) rotateX(${-yAxis/2}deg) rotateY(${xAxis/2}deg)`;
            background.style.transform = `translateX(${xAxis * 0.5}px) translateY(${yAxis * 0.5}px) translateZ(-20px) scale(1.1)`;
            
            // Add light reflection effect
            heroImage.style.boxShadow = `${xAxis/2}px ${yAxis/2}px 30px rgba(0,0,0,0.2)`;
        });

        heroImage.addEventListener('mouseleave', () => {
            const foreground = heroImage.querySelector('img:not(.parallax-background)');
            const background = heroImage.querySelector('.parallax-background');
            
            foreground.style.transform = 'translateX(0) translateY(0) rotateX(0) rotateY(0)';
            background.style.transform = 'translateZ(-20px) scale(1.1)';
            heroImage.style.boxShadow = '0 25px 45px rgba(0,0,0,0.1)';
        });
        
        // Add random floating animation when not hovering
        setInterval(() => {
            if (!heroImage.matches(':hover')) {
                const randomX = (Math.random() - 0.5) * 10;
                const randomY = (Math.random() - 0.5) * 10;
                const foreground = heroImage.querySelector('img:not(.parallax-background)');
                foreground.style.transform = `translateX(${randomX}px) translateY(${randomY}px)`;
            }
        }, 3000);
    }
    
    // Add organic shapes to sections
    document.querySelectorAll('section').forEach((section, index) => {
        const shape = document.createElement('div');
        shape.className = 'organic-shape';
        shape.style.top = `${Math.random() * 80}%`;
        shape.style.left = `${Math.random() * 80}%`;
        shape.style.width = `${200 + Math.random() * 300}px`;
        shape.style.height = `${200 + Math.random() * 300}px`;
        shape.style.opacity = '0.3';
        section.appendChild(shape);
    });
    // Barre de progression du scroll
const progressBar = document.createElement('div');
    progressBar.className = 'fixed top-0 left-0 h-1 bg-champagne-500 z-50 transition-all duration-200';
    progressBar.style.width = '0%';
    document.body.prepend(progressBar);

    window.addEventListener('scroll', () => {
        const scrollTop = document.documentElement.scrollTop || document.body.scrollTop;
        const scrollHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
        const scrollProgress = (scrollTop / scrollHeight) * 100;
        progressBar.style.width = scrollProgress + '%';
    });
// Bouton flottant Contact
const contactBtn = document.createElement('a');
    contactBtn.href = '#contact';
    contactBtn.className = 'fixed bottom-28 right-6 bg-champagne-500 text-white p-4 rounded-full shadow-lg z-40 hover:bg-champagne-600 transition-all';
    contactBtn.innerHTML = '<i data-feather="mail" class="w-6 h-6"></i>';
    document.body.appendChild(contactBtn);
    feather.replace();
    // Style pour le bouton contact flottant
const style = document.createElement('style');
    style.textContent = `
        .fixed.bottom-28.right-6 {
            animation: pulse 2s infinite;
        }
        @keyframes pulse {
            0% { transform: scale(1); box-shadow: 0 0 0 0 rgba(209, 156, 90, 0.7); }
            70% { transform: scale(1.1); box-shadow: 0 0 0 10px rgba(209, 156, 90, 0); }
            100% { transform: scale(1); box-shadow: 0 0 0 0 rgba(209, 156, 90, 0); }
        }
    `;
    document.head.appendChild(style);
    // Compteurs animés avec easing
function animateCounter(element, target, duration = 2000) {
        const start = 0;
        const startTime = performance.now();
        
        function updateCounter(currentTime) {
            const elapsed = currentTime - startTime;
            const progress = Math.min(elapsed / duration, 1);
            // Ease-out quart easing function
            const easedProgress = 1 - Math.pow(1 - progress, 4);
            const current = Math.floor(easedProgress * target);
            
            element.textContent = current + (element.dataset.suffix || '');
            
            if (progress < 1) {
                requestAnimationFrame(updateCounter);
            } else {
                element.textContent = target + (element.dataset.suffix || '');
            }
        }
        
        requestAnimationFrame(updateCounter);
    }
const counters = document.querySelectorAll('[data-counter]');
    const counterObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const target = parseInt(entry.target.dataset.counter);
                animateCounter(entry.target, target);
                counterObserver.unobserve(entry.target);
            }
        });
    }, { threshold: 0.5 });

    counters.forEach(counter => counterObserver.observe(counter));
    // Carrousel de témoignages
const testimonials = [
        {
            name: "Sophie M.",
            text: "Alicia a été d'une aide précieuse lors des premières semaines avec notre jumeaux. Professionnelle et bienveillante.",
            textKey: "testimonial1Text",
            rating: 5
        },
        {
            name: "Thomas L.",
            text: "Son expérience en néonatalogie nous a rassurés. Notre bébé prématuré était entre de bonnes mains.",
            textKey: "testimonial2Text",
            rating: 4
        },
        {
            name: "Camille D.",
            text: "Les nuits étaient un cauchemar avant qu'Alicia n'intervienne. Elle a établi une routine qui a changé notre vie.",
            textKey: "testimonial3Text",
            rating: 5
        }
    ];

    const testimonialContainer = document.createElement('div');
    testimonialContainer.className = 'testimonial-carousel container mx-auto py-12 px-6';
    testimonialContainer.innerHTML = `
        <h2 class="text-3xl font-serif font-bold mb-12 text-center text-champagne-700" data-i18n="testimonialsTitle">Témoignages</h2>
        <div class="relative max-w-3xl mx-auto">
            <div class="testimonial-slides"></div>
            <button class="absolute left-0 top-1/2 -translate-y-1/2 p-2 text-champagne-500 hover:text-champagne-700" id="prev-testimonial">
                <i data-feather="chevron-left" class="w-8 h-8"></i>
            </button>
            <button class="absolute right-0 top-1/2 -translate-y-1/2 p-2 text-champagne-500 hover:text-champagne-700" id="next-testimonial">
                <i data-feather="chevron-right" class="w-8 h-8"></i>
            </button>
        </div>
    `;
    document.querySelector('section#pricing').after(testimonialContainer);

    let currentTestimonial = 0;
    function renderTestimonials() {
        const slides = document.querySelector('.testimonial-slides');
        slides.innerHTML = '';
        
        testimonials.forEach((testimonial, index) => {
            const stars = '★'.repeat(testimonial.rating) + '☆'.repeat(5 - testimonial.rating);
            const slide = document.createElement('div');
            slide.className = `testimonial-slide bg-white p-8 rounded-lg shadow-md text-center ${index === currentTestimonial ? 'block' : 'hidden'}`;
            slide.innerHTML = `
                <p class="text-lg italic mb-6" data-i18n="${testimonial.textKey}">${testimonial.text}</p>
                <div class="text-champagne-500 text-xl mb-2">${stars}</div>
                <p class="font-semibold">${testimonial.name}</p>
            `;
            slides.appendChild(slide);
        });
    }

    renderTestimonials();
    // Mettre à jour les traductions après le premier rendu
    if (typeof updateContent === 'function') updateContent();
    
    document.getElementById('next-testimonial').addEventListener('click', () => {
        currentTestimonial = (currentTestimonial + 1) % testimonials.length;
        renderTestimonials();
        if (typeof updateContent === 'function') updateContent();
    });
    document.getElementById('prev-testimonial').addEventListener('click', () => {
        currentTestimonial = (currentTestimonial - 1 + testimonials.length) % testimonials.length;
        renderTestimonials();
        if (typeof updateContent === 'function') updateContent();
    });

    // Auto-rotate testimonials
    setInterval(() => {
        currentTestimonial = (currentTestimonial + 1) % testimonials.length;
        renderTestimonials();
        if (typeof updateContent === 'function') updateContent();
    }, 5000);
    // Accordéon FAQ
const faqItems = [
        { question: "Quand engager une infirmière de maternité ?", answer: "Idéalement pendant la grossesse pour préparer l'arrivée du bébé, ou immédiatement après la naissance pour un soutien complet." },
        { question: "Quelle est la durée typique d'intervention ?", answer: "Varie selon les besoins: de quelques jours à plusieurs semaines, souvent 2-4 semaines pour établir de bonnes routines." },
        { question: "Prenez-vous en charge les bébés prématurés ?", answer: "Oui, mon expérience néonatale me permet de prendre en charge spécifiquement les bébés prématurés ou ayant des besoins particuliers." },
        { question: "Quelle est votre disponibilité ?", answer: "Je m'adapte à vos besoins : jours, nuits ou 24/7 selon la période, avec un planning établi à l'avance." },
        { question: "Proposez-vous des forfaits ?", answer: "Oui, des forfaits hebdomadaires comprenant jour et nuit sont disponibles avec des tarifs avantageux." }
];
const faqSection = document.createElement('section');
    faqSection.id = 'faq';
    faqSection.className = 'py-20 px-6 relative overflow-hidden';
    faqSection.style.cssText = "background: linear-gradient(rgba(252,248,244,0.72), rgba(252,248,244,0.72)), url('images/pied 2.jpg') center/cover fixed;";
    faqSection.innerHTML = `
        <div class="container mx-auto max-w-3xl">
            <h2 class="text-3xl font-serif font-bold mb-12 text-center text-champagne-700" data-i18n="faqTitle">FAQ</h2>
            <div class="faq-container space-y-4"></div>
        </div>
    `;
    document.querySelector('section#contact').before(faqSection);

    faqItems.forEach((item, index) => {
        const faqItem = document.createElement('div');
        faqItem.className = 'faq-item bg-white rounded-lg shadow-sm overflow-hidden';
        faqItem.innerHTML = `
            <button class="faq-question w-full text-left p-6 font-medium flex justify-between items-center hover:bg-champagne-100 transition">
                <span data-i18n="faq${index + 1}Q">${item.question}</span>
                <i data-feather="chevron-down" class="faq-icon transition-transform"></i>
            </button>
            <div class="faq-answer hidden p-6 pt-0 border-t border-champagne-100">
                <p data-i18n="faq${index + 1}A">${item.answer}</p>
            </div>
        `;
        document.querySelector('.faq-container').appendChild(faqItem);

        const question = faqItem.querySelector('.faq-question');
        question.addEventListener('click', () => {
            const answer = faqItem.querySelector('.faq-answer');
            const icon = faqItem.querySelector('.faq-icon');
            answer.classList.toggle('hidden');
            icon.style.transform = answer.classList.contains('hidden') ? 'rotate(0deg)' : 'rotate(180deg)';
        });
    });
    // Toggle menu mobile
const menuBtn = document.getElementById('menu-btn');
    const mobileMenu = document.getElementById('mobile-menu');
    
    if (menuBtn && mobileMenu) {
        menuBtn.addEventListener('click', function() {
            mobileMenu.classList.toggle('hidden');
            if (mobileMenu.classList.contains('hidden')) {
                feather.replace();
            } else {
                setTimeout(() => feather.replace(), 100);
            }
        });

        // Close mobile menu when clicking on a link
        const navLinks = document.querySelectorAll('#mobile-menu a');
        navLinks.forEach(link => {
            link.addEventListener('click', () => {
                mobileMenu.classList.add('hidden');
            });
        });
    }
// Soumission du formulaire via Formspree
const contactForm = document.getElementById('contact-form');
if (contactForm) {
    contactForm.addEventListener('submit', async function(e) {
        e.preventDefault();
        const btn = contactForm.querySelector('button[type="submit"]');
        btn.disabled = true;
        const t = (typeof translations !== 'undefined' && typeof currentLang !== 'undefined') ? translations[currentLang] : null;
        btn.textContent = (t && t.formSending) || 'Envoi en cours…';

        const data = new FormData(contactForm);
        try {
            const response = await fetch(contactForm.action, {
                method: 'POST',
                body: data,
                headers: { 'Accept': 'application/json' }
            });
            if (response.ok) {
                const successTitle = (t && t.formSuccess) || 'Merci, votre message est bien envoyé !';
                const successMsg = (t && t.formSuccessMsg) || 'Je reviens vers vous dans les <strong>2 heures</strong>, 7j/7.<br>En attendant, n\'hésitez pas à m\'écrire directement sur WhatsApp.';
                const waLabel = (t && t.formWhatsApp) || 'Écrire sur WhatsApp';
                contactForm.innerHTML = `
                    <div class="text-center py-10">
                        <div class="text-5xl mb-4">🌸</div>
                        <h3 class="text-xl font-serif font-semibold mb-3" style="color:#D4899D;">${successTitle}</h3>
                        <p class="text-sand-600 text-sm leading-relaxed mb-4">${successMsg}</p>
                        <a href="https://wa.me/41783005417" target="_blank" class="inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-white text-sm font-medium" style="background:linear-gradient(135deg,#E6A8B8,#D4899D);">
                            <svg width="16" height="16" viewBox="0 0 24 24" fill="white"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg>
                            ${waLabel}
                        </a>
                    </div>`;
            } else {
                btn.disabled = false;
                btn.textContent = (t && t.formSend) || 'Envoyer';
                alert((t && t.formError) || 'Une erreur est survenue. Merci de réessayer ou de me contacter directement par WhatsApp.');
            }
        } catch (err) {
            btn.disabled = false;
            btn.textContent = (t && t.formSend) || 'Envoyer';
            alert((t && t.formError) || 'Une erreur est survenue. Merci de réessayer ou de me contacter directement par WhatsApp.');
        }
    });
}
    // Intersection Observer pour les animations au scroll
const observerOptions = {
        threshold: 0.1
    };

    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);
    // Observer toutes les sections
const sections = document.querySelectorAll('section');
    sections.forEach(section => {
        observer.observe(section);
    });
    // Scroll fluide amélioré avec offset pour le header fixe
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            
            const targetId = this.getAttribute('href');
            if (targetId === '#') return;
            
            const targetElement = document.querySelector(targetId);
            if (targetElement) {
                const headerHeight = document.querySelector('nav').offsetHeight;
                const elementPosition = targetElement.getBoundingClientRect().top;
                const offsetPosition = elementPosition + window.pageYOffset - headerHeight;
                
                window.scrollTo({
                    top: offsetPosition,
                    behavior: 'smooth'
                });
                
                // Close mobile menu if open
                if (mobileMenu && !mobileMenu.classList.contains('hidden')) {
                    mobileMenu.classList.add('hidden');
                }
            }
        });
    });
    // Ajout d'un effet de scroll sur la navbar
window.addEventListener('scroll', function() {
        const nav = document.querySelector('nav');
        if (window.scrollY > 50) {
            nav.classList.add('scrolled');
        } else {
            nav.classList.remove('scrolled');
        }
    });
// Mise à jour de l'année dans le footer
const yearSpan = document.getElementById('current-year');
    if (yearSpan) {
        yearSpan.textContent = new Date().getFullYear();
    }

    // ============================================
    // LIRE PLUS / VOIR MOINS
    // ============================================
    initReadMore();
});

function initReadMore() {
    // --- Cartes de services : cacher le 2e paragraphe + puces 4-5 ---
    document.querySelectorAll('#services .rounded-2xl').forEach(card => {
        const paragraphs = Array.from(card.querySelectorAll(':scope > p'));
        const ul = card.querySelector('ul');
        const listItems = ul ? Array.from(ul.querySelectorAll('li')) : [];

        if (paragraphs.length < 2 && listItems.length <= 3) return;

        const extra = document.createElement('div');
        extra.className = 'read-more-extra';

        if (paragraphs[1]) {
            paragraphs[1].parentNode.insertBefore(extra, paragraphs[1]);
            extra.appendChild(paragraphs[1]);
        }
        listItems.forEach((li, i) => {
            if (i >= 3) extra.appendChild(li);
        });

        const btn = makeReadMoreBtn('btnSeeMore');
        btn.addEventListener('click', () => {
            const open = extra.classList.toggle('open');
            const key = open ? 'btnSeeLess' : 'btnSeeMore';
            btn.setAttribute('data-i18n', key);
            const label = (typeof translations !== 'undefined' && typeof currentLang !== 'undefined') ? (translations[currentLang][key] || key) : key;
            btn.innerHTML = `${label} <span class="rm-arrow">${open ? '↑' : '↓'}</span>`;
        });
        card.appendChild(btn);
    });

    // --- Blocs "Pourquoi moi" : cacher paragraphes 2-3 ---
    document.querySelectorAll('.why-block').forEach(block => {
        const textDiv = block.querySelector('div:not(.flex-shrink-0)');
        if (!textDiv) return;
        const paragraphs = Array.from(textDiv.querySelectorAll(':scope > p'));
        if (paragraphs.length <= 1) return;

        const extra = document.createElement('div');
        extra.className = 'read-more-extra';

        paragraphs.slice(1).forEach((p, i) => {
            if (i === 0) textDiv.insertBefore(extra, p);
            extra.appendChild(p);
        });

        const btn = makeReadMoreBtn('btnReadMore');
        btn.addEventListener('click', () => {
            const open = extra.classList.toggle('open');
            const key = open ? 'btnReadLess' : 'btnReadMore';
            btn.setAttribute('data-i18n', key);
            const label = (typeof translations !== 'undefined' && typeof currentLang !== 'undefined') ? (translations[currentLang][key] || key) : key;
            btn.innerHTML = `${label} <span class="rm-arrow">${open ? '↑' : '↓'}</span>`;
        });
        textDiv.appendChild(btn);
    });
}

function makeReadMoreBtn(labelKey) {
    const btn = document.createElement('button');
    btn.className = 'read-more-btn';
    btn.setAttribute('data-i18n', labelKey);
    const label = (typeof translations !== 'undefined' && typeof currentLang !== 'undefined') ? (translations[currentLang][labelKey] || labelKey) : labelKey;
    btn.innerHTML = `${label} <span class="rm-arrow">↓</span>`;
    return btn;
}
