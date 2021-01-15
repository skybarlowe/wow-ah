import React from 'react';

import { Navbar, Sidebar, Table} from '../components';

  const colPrice = "Price";
  const colName = "Item name";
  const colAvailable = "Available";

  const items = [{
    id: 107264,
    price: 500,
    name: "sword",
    available: 12,
  },
  {
    id: 107264,
    price: 5000,
    name: "Shell",
    available: 24,
  }
];

export default function AuctionHouse() {
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
        <table class="table table-hover">
          <thead>
            <tr>
              <th scope="col">{colPrice}</th>
              <th scope="col">{colName}</th>
              <th scope="col">{colAvailable}</th>
            </tr>
          </thead>
          <tbody>
            {items.map((item) => { 
              return (
                <Table {...item} />
              );
            })}
          </tbody>
        </table>
      </div>
      </div>
    </div>
  );
}