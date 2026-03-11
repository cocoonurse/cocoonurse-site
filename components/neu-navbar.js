class NeuNavbar extends HTMLElement {
  connectedCallback() {
    this.attachShadow({ mode: 'open' });
    this.shadowRoot.innerHTML = `
      <style>
        :host {
          display: block;
          position: sticky;
          top: 0;
          z-index: 100;
          width: 100%;
        }
        
        nav {
          background-color: white;
          padding: 1rem 2rem;
          box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
          display: flex;
          justify-content: space-between;
          align-items: center;
        }
        
        .logo {
          font-size: 1.5rem;
          font-weight: bold;
          color: #5A4A42;
          text-decoration: none;
}
        
        .nav-links {
          display: flex;
          gap: 2rem;
        }
        
        .nav-links a {
          color: #333;
          text-decoration: none;
          font-weight: 500;
          transition: all 0.3s ease;
          position: relative;
        }
        
        .nav-links a:hover {
          color: #D4B996;
}
        
        .nav-links a::after {
          content: '';
          position: absolute;
          width: 0;
          height: 2px;
          bottom: -5px;
          left: 0;
          background-color: #D4B996;
transition: width 0.3s ease;
        }
        
        .nav-links a:hover::after {
          width: 100%;
        }
        
        .mobile-menu-btn {
          display: none;
          background: none;
          border: none;
          font-size: 1.5rem;
          cursor: pointer;
          color: #333;
        }
        
        @media (max-width: 768px) {
          .nav-links {
            position: fixed;
            top: 70px;
            left: 0;
            width: 100%;
            background-color: white;
            flex-direction: column;
            align-items: center;
            padding: 1rem 0;
            gap: 1rem;
            box-shadow: 0 5px 10px rgba(0, 0, 0, 0.1);
            transform: translateY(-150%);
            transition: transform 0.3s ease;
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
        <a href="/" class="logo">Maternity Nurse</a>
        <button class="mobile-menu-btn">☰</button>
        <div class="nav-links">
          <a href="#about">À propos</a>
          <a href="#services">Services</a>
          <a href="#contact">Contact</a>
        </div>
      </nav>
    `;

    const menuBtn = this.shadowRoot.querySelector('.mobile-menu-btn');
    const navLinks = this.shadowRoot.querySelector('.nav-links');
    
    menuBtn.addEventListener('click', () => {
      navLinks.classList.toggle('active');
    });
  }
}

customElements.define('neu-navbar', NeuNavbar);