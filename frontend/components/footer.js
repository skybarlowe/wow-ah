class Footer extends HTMLElement {
    constructor() {
      super();
    }

    connectedCallback() {
        this.innerHTML = `
        <footer class="pt-4 my-md-5 pt-md-5">
          <div class="row justify-content-md-center">
            <div class="col-md-auto">
              <ul class="list-unstyled text-small">
                <li><a class="text-muted" href="#">Blog</a></li>
                <li><a class="text-muted" href="#">FAQ</a></li>
                <li><a class="text-muted" href="#">Donate</a></li>
              </ul>
            </div>
            <div class="col-md-auto">
              <ul class="list-unstyled text-small">
                <li><a class="text-muted" href="#">Top seller</a></li>
                <li><a class="text-muted" href="#">Top Realm</a></li>
                <li><a class="text-muted" href="#">Top Profession</a></li>
              </ul>
            </div>
            <div class="col-md-auto">
              <ul class="list-unstyled text-small">
                <li><a class="text-muted" href="#">Work</a></li>
                <li><a class="text-muted" href="#">Terms</a></li>
                <li><a class="text-muted" href="#">Contac</a></li>
              </ul>
            </div>
          </div>
        </footer>
        `;
      }
}

customElements.define('footer-component', Footer);