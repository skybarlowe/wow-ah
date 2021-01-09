import React from 'react';

import { Navbar, Sidebar, Table } from '../components';

export default function AuctionHouse() {
  return (
    <div class="d-flex" id="wrapper">
      <Sidebar />
      <div id="page-content-wrapper">
        <Navbar />
        <div class="container-fluid">
          <Table />
        </div>
      </div>
    </div>
  );
}
