import Autosuggest from "react-bootstrap-autosuggest";

export default function Navbar() {
  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <div className="float-sm-left">
          <Autosuggest
            datalist={[
              "Uldum",
              "Zuljin",
              "Sanguino",
              "Tyrande",
              "Colinas Pardas",
            ]}
            placeholder="Write realmlist"
          />
        </div>
      </nav>
    </div>
  );
}
