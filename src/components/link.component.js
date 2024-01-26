class CustomLink extends HTMLElement {
    static get observedAttributes() {
        return ['link', 'label'];
    }

    constructor() {
        super();

        // Creazione di un'ombra DOM e specifica dello stile
        const shadow = this.attachShadow({mode: 'open'});

        // Creazione dell'elemento HTML
        const style = document.createElement('style');
        const anchor = document.createElement('a');

        // Applicazione dello stile al custom element
        style.textContent = `
        a {
            display:block;
          text-align: center;
          background: transparent;
          border:4px solid var(--first-color);
          padding: var(--unit-md) var(--unit-lg);
          color: var(--first-color);
          text-decoration: none;
        }
        a:hover{
          background: var(--first-color);
          color: var(--second-color);
        }
      `;

        // Aggiunta degli elementi al DOM ombra
        shadow.appendChild(style);
        shadow.appendChild(anchor);
    }

    connectedCallback() {
        this.updateLink();
    }

    attributeChangedCallback(name, oldValue, newValue) {
        if (name === 'link' || name === 'label') {
            this.updateLink();
        }
    }

    updateLink() {
        const shadow = this.shadowRoot;
        const anchor = shadow.querySelector('a');
        const link = this.getAttribute('link');
        const label = this.getAttribute('label') || 'ciao';

        anchor.textContent = label;
        anchor.href = link;
        anchor.target = '_blank';
    }
}

// Registrazione del custom element
customElements.define('custom-link', CustomLink);
