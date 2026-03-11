
class ContactModal extends HTMLElement {
  connectedCallback() {
    this.attachShadow({ mode: 'open' });
    this.shadowRoot.innerHTML = `
      <style>
        :host {
          display: none;
          position: fixed;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background: rgba(0,0,0,0.5);
          z-index: 1000;
          align-items: center;
          justify-content: center;
        }
        
        .modal-content {
          background: linear-gradient(to bottom right, #FFF9F9, #F5F1E8);
          padding: 2.5rem;
          border-radius: 16px;
          max-width: 500px;
          width: 90%;
          box-shadow: 0 15px 40px rgba(0,0,0,0.2);
          position: relative;
          animation: fadeIn 0.3s ease-out;
          border: 1px solid rgba(217, 169, 105, 0.3);
        }
        
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(-20px); }
          to { opacity: 1; transform: translateY(0); }
        }
        
        .close-btn {
          position: absolute;
          top: 1.2rem;
          right: 1.2rem;
          background: none;
          border: none;
          font-size: 1.5rem;
          cursor: pointer;
          color: #d9a969;
          transition: transform 0.3s;
        }
        
        .close-btn:hover {
          transform: rotate(90deg);
        }
        
        h3 {
          color: #8B6B3D;
          font-family: 'Playfair Display', serif;
          font-size: 1.75rem;
          margin-bottom: 2rem;
          text-align: center;
          font-weight: 600;
        }
        
        .contact-info {
          display: flex;
          flex-direction: column;
          gap: 1.5rem;
          width: 100%;
        }
        
        .contact-item {
          display: flex;
          align-items: center;
          gap: 0.8rem;
          width: 100%;
          background: rgba(255,255,255,0.8);
          border-radius: 8px;
          padding: 0.8rem 1rem;
          border: 1px solid rgba(217, 169, 105, 0.2);
        }
        
        .contact-icon {
          width: 20px;
          height: 20px;
          color: #d9a969;
          flex-shrink: 0;
        }
        
        .contact-link {
          color: #5A4A42;
          text-decoration: none;
          flex-grow: 1;
          text-align: left;
          padding: 0 0.5rem;
          transition: color 0.3s;
          font-size: 0.95rem;
        }
        
        .contact-link:hover {
          color: #d9a969;
        }
        
        .copy-btn {
          background: linear-gradient(to right, #d9a969, #c2874b);
          color: white;
          border: none;
          padding: 0.5rem 1rem;
          border-radius: 6px;
          cursor: pointer;
          transition: all 0.3s;
          font-size: 0.9rem;
          white-space: nowrap;
          min-width: 80px;
          text-align: center;
          box-shadow: 0 3px 10px rgba(201, 169, 97, 0.3);
        }
        
        .copy-btn:hover {
          transform: translateY(-2px);
          box-shadow: 0 5px 15px rgba(201, 169, 97, 0.4);
        }

        .whatsapp-logo {
          width: 20px;
          height: 20px;
          flex-shrink: 0;
        }
      </style>
      <div class="modal-content">
        <button class="close-btn">&times;</button>
        <h3 data-translate="contactTitle">Contactez-moi</h3>
        <div class="contact-info">
          <div class="contact-item">
            <i data-feather="mail" class="contact-icon"></i>
            <a href="mailto:alicia.carli2@gmail.com" class="contact-link">alicia.carli2@gmail.com</a>
            <button class="copy-btn" data-text="alicia.carli2@gmail.com" data-translate="copy">Copier</button>
          </div>
          <div class="contact-item">
            <img src="https://upload.wikimedia.org/wikipedia/commons/6/6b/WhatsApp.svg" alt="WhatsApp" class="whatsapp-logo">
            <a href="https://wa.me/41783005417" target="_blank" class="contact-link">+41 78 300 54 17</a>
          </div>
        </div>
      </div>
`;

    this.shadowRoot.querySelector('.close-btn').addEventListener('click', () => {
      this.style.display = 'none';
    });

    this.shadowRoot.querySelectorAll('.copy-btn').forEach(btn => {
      btn.addEventListener('click', () => {
        const text = btn.getAttribute('data-text');
        navigator.clipboard.writeText(text).then(() => {
          btn.textContent = 'Copié!';
          setTimeout(() => {
            btn.textContent = 'Copier';
          }, 2000);
        });
      });
    });
  }

  open() {
    this.style.display = 'flex';
    feather.replace();
  }
}

customElements.define('contact-modal', ContactModal);