// import React, { useEffect, useState } from "react";
import "../Allcss/Artist.css";
import {  Tab, Tabs } from "react-bootstrap";
import ArtWorkTab from "../ArtistTab/ArtWorkTab";
import OrderTab from "../ArtistTab/OrderTab";
import ProfileTab from "../ArtistTab/ProfileTab";
import { useLocation } from "react-router-dom";
// import axios from "axios";

const Artist = () => {
  const artistData = useLocation().state;

  
  return (
    <div>
     
      <div className="artist-container">
        <div className="profile-card">
          <div className="profile-header">
            <div className="main-profile">
              <div className="profile-image"></div>
              <div className="profile-names">
                <h1 className="username">
                <h4>Name:{artistData?.ArtistName}</h4>
               </h1>
                <small className="page-title"></small>
              </div>
            </div>
          </div>
          <div style={{ marginTop: "75px" }}>
            <p>{artistData._id}</p>
            <Tabs id="uncontrolled-tab-example" defaultActiveKey="ArtWork">
              <Tab eventKey="ArtWork" title="ArtWork">
                <ArtWorkTab />
              </Tab>

              <Tab eventKey="Order" title="Order">
                <OrderTab />
              </Tab>

              <Tab eventKey="Profile" title="Profile">
                <ProfileTab />
              </Tab>
            </Tabs>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Artist;
