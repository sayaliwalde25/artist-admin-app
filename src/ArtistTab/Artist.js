import React from "react";
import { Tab, Tabs } from "react-bootstrap";
import { useLocation } from "react-router-dom";
import ArtWorkTab from "../ArtistTab/ArtWorkTab";
import ArtistOrderTab from "../ArtistTab/ArtistOrderTab";
import ArtistProfileTab from "../ArtistTab/ArtistProfileTab";
import "../CSS/Artist.css";

const Artist = () => {
  const artistData = useLocation().state;

  return (
    <div
      style={{
        marginTop: "109px",
        //  marginLeft:'2px'
      }}
    >
      <div className="artist-container">
        <div className="artist-card">
          <div className="artist-header">
            <div className="artist-profile">
              <div className="artist-names">
                <h1 className="username">
                  <h4 style={{ marginLeft: "10px" }}>
                    {artistData?.ArtistFullName}
                  </h4>
                </h1>
                <small className="page-title"></small>
              </div>
              <img
                className="artist-image"
                src={`http://localhost:5000${artistData?.ArtistProfile}`}
              />
            </div>
          </div>
          <div style={{ marginTop: "30px" }}>
            <Tabs id="uncontrolled-tab-example" defaultActiveKey="ArtWork">
              <Tab eventKey="ArtWork" title="ArtWork">
                <ArtWorkTab data={artistData} />
              </Tab>

              <Tab eventKey="Order" title="Order">
                <ArtistOrderTab data={artistData} />
              </Tab>

              <Tab eventKey="Profile" title="Profile">
                <ArtistProfileTab data={artistData} />
              </Tab>
            </Tabs>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Artist;
