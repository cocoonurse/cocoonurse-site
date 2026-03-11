class FloatingParticles extends HTMLElement {
  connectedCallback() {
    this.attachShadow({ mode: 'open' });
    this.shadowRoot.innerHTML = `
      <style>
        :host {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          overflow: hidden;
          z-index: -1;
          pointer-events: none;
        }
        
        .particle {
          position: absolute;
          border-radius: 50%;
          background: linear-gradient(45deg, rgba(255,214,224,0.7) 0%, rgba(255,236,210,0.7) 100%);
          animation: float linear infinite;
          filter: blur(1px);
}
        
        @keyframes float {
          0% { transform: translateY(0) rotate(0deg); }
          100% { transform: translateY(-100vh) rotate(360deg); }
        }
      </style>
    `;
    
    this.createParticles();
  }
  
  createParticles() {
    const particleCount = 20;
    
    for (let i = 0; i < particleCount; i++) {
      const particle = document.createElement('div');
      particle.classList.add('particle');
      
      // Random properties
      const size = Math.random() * 30 + 10;
const posX = Math.random() * 100;
      const duration = Math.random() * 15 + 15;
      const delay = Math.random() * -15;
      
      particle.style.width = `${size}px`;
      particle.style.height = `${size}px`;
      particle.style.left = `${posX}%`;
      particle.style.animationDuration = `${duration}s`;
      particle.style.animationDelay = `${delay}s`;
      particle.style.opacity = Math.random() * 0.8 + 0.2;
this.shadowRoot.appendChild(particle);
    }
  }
}

customElements.define('floating-particles', FloatingParticles);