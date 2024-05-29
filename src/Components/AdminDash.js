import React from "react";
import { MdDashboard } from "react-icons/md";
import "../CSS/AdminDash.css";

const AdminDash = () => {
  return (
    <div>
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
            <MdDashboard className="admin-card_icon" />
          </div>
          <div className="admin-card">
            <div className="admin-card-inner">
              <h3>ArtWork</h3>
              <h1>106</h1>
            </div>
            <MdDashboard className="admin-card_icon" />
          </div>
          <div className="admin-card">
            <div className="admin-card-inner">
              <h3>Order</h3>
              <h1>300</h1>
            </div>
            <MdDashboard className="admin-card_icon" />
          </div>
          <div className="admin-card">
            <div className="admin-card-inner">
              <h3>Customer</h3>
              <h1>300</h1>
            </div>
            <MdDashboard className="admin-card_icon" />
          </div>
          <div className="admin-card">
            <div className="admin-card-inner">
              <h3>Contact</h3>
              <h1>14</h1>
            </div>
            <MdDashboard className="admin-card_icon" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminDash;
