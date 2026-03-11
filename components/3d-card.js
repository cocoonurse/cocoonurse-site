class ThreeDCard extends HTMLElement {
  connectedCallback() {
    this.attachShadow({ mode: 'open' });
    this.shadowRoot.innerHTML = `
      <style>
        :host {
          display: block;
          perspective: 1000px;
        }
        
        .card {
          background: white;
          border-radius: 15px;
          padding: 2rem;
          box-shadow: 0 10px 20px rgba(0, 0, 0, 0.1);
          transition: all 0.5s ease;
          transform-style: preserve-3d;
          position: relative;
        }
        
        :host(:hover) .card {
          transform: rotateY(10deg) rotateX(5deg);
          box-shadow: 0 20px 40px rgba(0, 0, 0, 0.2);
        }
        i {
          font-size: 2.5rem;
          color: #D4B996;
          margin-bottom: 1rem;
          display: inline-block;
        }
        
        h3 {
          color: #5A4A42;
          margin-bottom: 1rem;
        }
p {
          color: #666;
        }
      </style>
      
      <div class="card">
        <slot></slot>
      </div>
    `;
  }
}

customElements.define('3d-card', ThreeDCard);