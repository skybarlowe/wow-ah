export default function Navbar() {
  return ( 
    <div>
      <nav class="navbar navbar-expand-lg navbar-dark bg-dark border-bottom">
        <button class="btn btn-light" id="menu-toggle"><i class="fa fa-bars"></i></button>
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>          
        </button>
      </nav>
      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav ml-auto mt-2 mt-lg-0">
          <input class="form-control form-control-dark mr-sm-2" type="text" placeholder="Search" aria-label="Search" />
          <button class="btn btn-outline-light my-2 my-sm-0" type="submit">Search</button>
        </ul>
      </div>
    </div>
  );
}