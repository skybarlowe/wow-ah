import { Navbar, Table } from "../components";
import { useState, useEffect } from "react";
import realmList from "../realmList.json";

export default function RealmList() {
  const [searchTerm, setSearchTerm] = useState("");
  const [searchResults, setSearchResults] = useState([]);

  const handleChange = (e) => {
    // e.preventDefault();
    setSearchTerm(e.target.value);
  };

  useEffect(() => {
    const results = realmList.filter((realm) =>
      realm.name.toLowerCase().includes(searchTerm)
    );
    setSearchResults(results);
  }, [searchTerm]);

  return (
    <div className="d-flex" id="wrapper">
      <div id="page-content-wrapper">
        <Navbar value={searchTerm} onChange={handleChange} />
        <div className="container-fluid ">
          <input
            type="text"
            placeholder="Search"
            value={searchTerm}
            onChange={handleChange}
          />
          <Table items={searchResults} />
        </div>
      </div>
    </div>
  );
}
