import React from "react";
import { Tab, Tabs } from "react-bootstrap";
import { useLocation } from "react-router-dom";
import ArtWorkTab from "../ArtistTab/ArtWorkTab";
import ArtOrderTab from "../ArtistTab/ArtOrderTab";
import ArtProfileTab from "../ArtistTab/ArtProfileTab";
import '../CSS/Artist.css'

const Artist = () => {
  const artistData = useLocation().state;

  return (
    <div style={{marginTop:'110px'}}>
      <div className="artist-container">
        <div className="artist-card">
          <div className="artist-header">
            <div className="artist-profile">
              <img
                className="artist-image"
                src={`http://localhost:5000${artistData?.ArtistProfile}`}
              ></img>
              <div className="artist-names">
                <h1 className="username">
                  <h4>{artistData?.ArtistFullName}</h4>
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
                <ArtOrderTab />
              </Tab>

              <Tab eventKey="Profile" title="Profile">
                <ArtProfileTab data={artistData} />
              </Tab>
            </Tabs>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Artist;
