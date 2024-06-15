import React from "react";
import "../CSS/AdminDash.css";
import artist from "../images/icons8-artist-30.png";
import artwork from "../images/icons8-artwork-64.png";
import order from "../images/icons8-order-30.png";
import customer from "../images/icons8-customer-50.png";
import contact from "../images/icons8-contact-50.png";

const AdminDash = (data) => {
  return (
    <div style={{ marginTop: "50px" }}>
      <div className="admin-container">
        <div className="admin-title">
          <h3>Dashboard</h3>
        </div>
        <div className="admin-cards">
          <div className="admin-card">
            <div className="admin-card-inner">
              <h3>Artist</h3>
              <h1>300</h1>
            </div>
            <img src={artist} className="admin-card_icon" />
          </div>
          <div className="admin-card">
            <div className="admin-card-inner">
              <h3>ArtWork</h3>
              <h1>106</h1>
            </div>
            <img src={artwork} className="admin-card_icon" />
          </div>
          <div className="admin-card">
            <div className="admin-card-inner">
              <h3>Order</h3>
              <h1>300</h1>
            </div>
            <img src={order} className="admin-card_icon" />
          </div>
          <div className="admin-card">
            <div className="admin-card-inner">
              <h3>Customer</h3>
              <h1>300</h1>
            </div>
            <img src={customer} className="admin-card_icon" />
          </div>
          <div className="admin-card">
            <div className="admin-card-inner">
              <h3>Contact</h3>
              <h1>14</h1>
            </div>
            <img src={contact} className="admin-card_icon" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminDash;
