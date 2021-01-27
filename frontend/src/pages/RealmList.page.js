import { Navbar } from "../components";
import RealmSuggest from "../components/RealmSuggest";

export default function RealmList() {
  return (
    <div className="d-flex">
      <div id="page-content-wrapper">
        <div className="">
          <RealmSuggest />
        </div>
      </div>
    </div>
  );
}
