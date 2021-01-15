import React, { useState, useEffect } from "react";
import ITEMS from "../items.json";

import fetch from "../fetch";
import { Navbar, Sidebar, Table } from "../components";

export default function AuctionHouse() {
  const [items, setItems] = useState([]);
  // console.log(items);
  useEffect(() => {
    fetch().then((items) => {
      setItems(items);
    });
  }, []);

  return (
    <div className="d-flex" id="wrapper">
      {/* Sidebar */}
      <div className="bg-dark border-right" id="sidebar-wrapper">
        <Sidebar />
      </div>
      {/* Page Content */}
      <div id="page-content-wrapper">
        <Navbar />
        <div className="container-fluid">
          <Table items={items} />
        </div>
      </div>
    </div>
  );
}
