import Autosuggest from "react-bootstrap-autosuggest";

export default function Navbar({ searchTerm }) {
  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        {/* <div className="collapse navbar-collapse" id="navbarSupportedContent"> */}
        <div className="float-sm-left navbar-collapse">
          {/* <ul className="navbar-nav ml-auto"> */}
          <input type="text" placeholder="Search" value={searchTerm} />
          <Autosuggest datalist={searchTerm} placeholder="Write realmlist" />
          {/* <button
              className="btn btn-outline-light my-2 my-sm-0"
              type="submit"
            >
              Search
            </button> */}
          {/* </ul> */}
        </div>
      </nav>
    </div>
  );
}
