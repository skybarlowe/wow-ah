import React from 'react';

import { Navbar, Sidebar, Table } from '../components';

export default function AuctionHouse() {
  return (
    <div class="d-flex" id="wrapper">
      <div class="bg-dark border-right" id="sidebar-wrapper">
        <Sidebar />
      </div>
      <div id="page-content-wrapper">
        <div class="navbar navbar-expand-lg navbar-dark bg-dark border-bottom">
          <Button />
          <BUttonCollapseMenu />
          <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <Navbar />
          </div>  
        </div>  
        <div class="container-fluid">
          <Table />
        </div>
      </div>
    </div>
  );
}