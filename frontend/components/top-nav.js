class TopNav extends HTMLElement {
    constructor() {
      super();
    }

    connectedCallback() {
        this.innerHTML = `

        <nav class="navbar navbar-expand-sm fixed-top bg-dark navbar-dark">
          <!-- search button  -->
          <div class="container-fluid justify-content-center">
            <form class="d-flex">
              <input class="form-control me-2" type="search" placeholder="Search database" aria-label="Search">
              <button class="btn btn-outline-light" type="submit">Go!</button>
            </form>
            <ul class="navbar-nav">
              <il class="nav-item">
                <a class="nav-link" href="#">Token price</a>
              </il>
            </ul>
          </div>
        </nav>
        `;
      }
}

customElements.define('top-nav-component', TopNav);