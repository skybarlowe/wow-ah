class Footer extends HTMLElement {
    constructor() {
      super();
    }

    connectedCallback() {
        this.innerHTML = `
        <footer class="footer bg-dark">
          <div class="container">
           <span class="text-muted">
              By Skybar  
            </span>
          </div>
        </footer>
        `;
      }
}

customElements.define('footer-component', Footer);