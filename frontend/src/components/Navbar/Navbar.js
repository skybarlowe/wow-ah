import RealmSuggest from "../RealmSuggest/RealmSuggest";
import ReactDOM from "react-dom";

export default function Navbar() {
  return (
    <div>
      <nav className="navbar-nav navbar-expand-sm navbar-dark bg-dark">
        {/* <div className="container-fluid"> */}
        <ul className="navbar-nav ml-auto mx-5">
          <li class="nav-item" id="auto-suggest"></li>
          <li class="nav-item">
            <button className="btn btn-light m-1">Contact us</button>
          </li>
          <li class="nav-item">
            <button className="btn btn-light m-1">Blog</button>
          </li>
        </ul>
        {/* </div> */}
      </nav>
    </div>
  );
}

// ReactDOM.render(<RealmSuggest />, document.getElementById("auto-suggest"));
