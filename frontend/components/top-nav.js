class TopNav extends HTMLElement {
    constructor() {
      super();
    }

    connectedCallback() {
        this.innerHTML = `
        <nav class="navbar navbar-expand-sm fixed-top bg-dark navbar-dark">
        <ul class="navbar-nav"> <!-- don't work justify-content-center -->
          <li class="nav-item active">
            <a class="nav-link" href="#about">About</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#work">Work</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#contact">Contact</a>
          </li>
        </ul> 
        <!-- search button  -->
        <div class="container-fluid justify-content-end">
          <form class="d-flex">
            <input class="form-control me-2" type="search" placeholder="Search database" aria-label="Search">
            <button class="btn btn-outline-light" type="submit">Go!</button>
          </form>
        </div>
      </nav>
        `;
      }
}

customElements.define('top-nav-component', TopNav);