import { Navbar } from "../components";
import RealmSuggest from "../components/RealmSuggest";

export default function RealmList() {
  return (
    <div className="">
      {/* <div className="row">
        <div className="col-4">
          <RealmSuggest />
        </div>
        <div className="col-8">
          <Navbar />
        </div>
      </div> */}
      <div>
        {/* <Navbar /> */}
        <RealmSuggest />
      </div>
      {/* <Navbar props={RealmSuggest} /> */}
    </div>
  );
}
