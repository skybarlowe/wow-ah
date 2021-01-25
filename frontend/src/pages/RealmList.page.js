import { Navbar } from "../components";
import realmList from "../realmList.json";

<script src="path-to-dist/react-bootstrap-autosuggest.min.js"></script>;

export default function RealmList() {
  return (
    <div className="d-flex" id="wrapper">
      <div id="page-content-wrapper">
        <Navbar />
      </div>
    </div>
  );
}
