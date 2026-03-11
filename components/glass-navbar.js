class GlassNavbar extends HTMLElement {
  connectedCallback() {
    this.attachShadow({ mode: 'open' });
    this.shadowRoot.innerHTML = `
      <style>
        :host {
          display: block;
          position: fixed;
          top: 0;
          left: 0;
          width: 100%;
          z-index: 1000;
          transition: all 0.3s ease;
        }
        
        nav {
          display: flex;
          justify-content: space-between;
          align-items: center;
          padding: 1.5rem 2rem;
          background: rgba(255, 255, 255, 0.85);
          backdrop-filter: blur(12px);
          -webkit-backdrop-filter: blur(12px);
          box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
          border-bottom: 1px solid rgba(255, 255, 255, 0.3);
          transition: all 0.3s ease;
        }
        
        .scrolled {
          padding: 1rem 2rem;
          background: rgba(255, 255, 255, 0.95);
          box-shadow: 0 2px 20px rgba(0, 0, 0, 0.1);
        }
        
        .logo {
          font-family: 'Great Vibes', cursive;
          font-size: 2rem;
          color: #D4AF37;
          text-decoration: none;
          transition: all 0.3s ease;
        }
        
        .logo:hover {
          transform: scale(1.05);
        }
        
        .nav-links {
          display: flex;
          gap: 2rem;
        }
        
        .nav-links a {
          color: #5A4A42;
          text-decoration: none;
          font-weight: 500;
          position: relative;
          transition: all 0.3s ease;
          padding: 0.5rem 0;
        }
        
        .nav-links a::after {
          content: '';
          position: absolute;
          bottom: 0;
          left: 0;
          width: 0;
          height: 2px;
          background: linear-gradient(90deg, #D4AF37, #C9A961);
          transition: width 0.3s ease;
        }
        
        .nav-links a:hover::after {
          width: 100%;
        }
        
        .nav-links a:hover {
          color: #D4AF37;
        }
        
        .contact-btn {
          background: linear-gradient(135deg, #D4AF37, #C9A961);
          color: white;
          padding: 0.7rem 1.5rem;
          border-radius: 30px;
          transition: all 0.3s ease;
          box-shadow: 0 4px 15px rgba(212, 175, 55, 0.3);
        }
        
        .contact-btn:hover {
          transform: translateY(-3px);
          box-shadow: 0 6px 20px rgba(212, 175, 55, 0.4);
        }
        
        .mobile-menu-btn {
          display: none;
          background: none;
          border: none;
          font-size: 1.5rem;
          cursor: pointer;
          color: #5A4A42;
        }
        
        @media (max-width: 768px) {
          .nav-links {
            position: fixed;
            top: 80px;
            left: 0;
            width: 100%;
            background: rgba(255, 255, 255, 0.98);
            flex-direction: column;
            align-items: center;
            padding: 2rem 0;
            gap: 1.5rem;
            box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
            transform: translateY(-150%);
            transition: transform 0.4s cubic-bezier(0.68, -0.55, 0.265, 1.55);
          }
          
          .nav-links.active {
            transform: translateY(0);
          }
          
          .mobile-menu-btn {
            display: block;
          }
        }
      </style>
      
      <nav>
        <a href="/" class="logo">Cocoonurse</a>
        <button class="mobile-menu-btn">
          <i data-feather="menu"></i>
        </button>
        <div class="nav-links">
          <a href="#about">À Propos</a>
          <a href="#services">Services</a>
          <a href="#experience">Parcours</a>
          <a href="#pricing">Tarifs</a>
          <a href="#contact" class="contact-btn">Contact</a>
        </div>
      </nav>
    `;

    window.addEventListener('scroll', this.handleScroll.bind(this));
    this.shadowRoot.querySelector('.mobile-menu-btn').addEventListener('click', this.toggleMenu.bind(this));
    
    // Close menu when clicking on a link (for mobile)
    this.shadowRoot.querySelectorAll('.nav-links a').forEach(link => {
      link.addEventListener('click', () => {
        this.shadowRoot.querySelector('.nav-links').classList.remove('active');
      });
    });
  }

  handleScroll() {
    const nav = this.shadowRoot.querySelector('nav');
    if (window.scrollY > 50) {
      nav.classList.add('scrolled');
    } else {
      nav.classList.remove('scrolled');
    }
  }

  toggleMenu() {
    const menu = this.shadowRoot.querySelector('.nav-links');
    menu.classList.toggle('active');
  }
}

customElements.define('glass-navbar', GlassNavbar);