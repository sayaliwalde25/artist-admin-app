import React from "react";
import "../CSS/ProfileTab.css";
import { Card } from "react-bootstrap";

const ProfileTab = ({ data }) => {
  return (
    <div className="">
      {console.log(data)}

      <h4 className="profile-h4">ProfileTab</h4>
      <div className="profile-div">
        <Card className="profile-card">
          <p className="profile-p">
            Adhar Card Image:{" "}
            <img src={`http://localhost:5000${data?.ArtistAdharCardImage}`} />
          </p>
          <p className="profile-p">
            Handicap Certificate Image:{" "}
            <img
              src={`http://localhost:5000${data?.ArtistHandicapCertificateImage}`}
            />
          </p>
        </Card>
        <Card className="profile-cards">
          <p className="profile-p">Name: {data?.ArtistFullName}</p>
          <p className="profile-p">Address: {data?.ArtistAddress}</p>
          <p className="profile-p">City: {data?.ArtistCity}</p>
          <p className="profile-p">Mobile No: {data?.ArtistMobileNo}</p>
          <p className="profile-p">Email: {data?.ArtistEmail}</p>
          <p className="profile-p">State: {data?.ArtistState}</p>
          <p className="profile-p">Pin Code: {data?.ArtistPincode}</p>
          <p className="profile-p">Adhar Card No: {data?.ArtistAdharCardNo}</p>
          <p className="profile-p">IsVerified: {data?.IsVerified}</p>
        </Card>
      </div>
    </div>
  );
};

export default ProfileTab;
