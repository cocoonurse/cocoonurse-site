class RippleButton extends HTMLElement {
  connectedCallback() {
    this.attachShadow({ mode: 'open' });
    this.shadowRoot.innerHTML = `
      <style>
        :host {
          display: inline-block;
          position: relative;
          overflow: hidden;
        }
        
        button {
          position: relative;
          overflow: hidden;
          transition: all 0.3s ease;
        }
        
        .ripple {
          position: absolute;
          border-radius: 50%;
          background: rgba(255,255,255,0.5);
          transform: scale(0);
          animation: ripple 0.6s linear;
          pointer-events: none;
        }
        
        @keyframes ripple {
          to {
            transform: scale(2.5);
            opacity: 0;
          }
        }
      </style>
      <button class="ripple-btn">
        <slot></slot>
      </button>
    `;
    
    this.shadowRoot.querySelector('button').addEventListener('click', this.createRipple.bind(this));
  }
  
  createRipple(e) {
    const btn = e.currentTarget;
    const circle = document.createElement('span');
    circle.classList.add('ripple');
    
    const d = Math.max(btn.clientWidth, btn.clientHeight);
    circle.style.width = circle.style.height = d + 'px';
    
    const rect = btn.getBoundingClientRect();
    circle.style.left = e.clientX - rect.left - d / 2 + 'px';
    circle.style.top = e.clientY - rect.top - d / 2 + 'px';
    
    btn.appendChild(circle);
    
    setTimeout(() => circle.remove(), 600);
  }
}

customElements.define('ripple-button', RippleButton);