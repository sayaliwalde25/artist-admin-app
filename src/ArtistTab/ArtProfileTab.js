import React from "react";
import "../CSS/ArtProfileTab.css";
import { Card, Col, Row } from "react-bootstrap";

const ArtProfileTab = ({ data }) => {
  return (
    <div className="ArtProfileTab">
      {console.log(data)}

      <div className="ArtPofileTab-container">
        <div className="ArtPofileTab-cover">
      <Card >
          <p >
            <span>Name:</span> 
            {data?.ArtistFullName}
          </p>
          <p >
            <span>Address:</span>
            {data?.ArtistAddress}
          </p>
          <p >
            <span>City:</span> 
            {data?.ArtistCity}
          </p>
          <p >
            <span>Mobile No: </span>
            {data?.ArtistMobileNo}
          </p>
          <p >
            <span>Email:</span> 
            {data?.ArtistEmail}
          </p>
          <p >
            <span>State:</span> 
            {data?.ArtistState}
          </p>
          <p >
            <span>Pin Code: </span>
            {data?.ArtistPincode}
          </p>
          <p >
            <span>Adhar Card No:</span> 
            {data?.ArtistAdharCardNo}
          </p>
          <p >
            <span>IsVerified: </span>
            {data?.IsVerified}
          </p>
        </Card>
        <Card >
          <Row >
            <div className="front">
              <Col>Adhar Card Image: </Col>
            <Col>
              {" "}
              <img src={`http://localhost:5000${data?.ArtistAdharCardImage}`} />
            </Col>
            </div>
          </Row>
          <Row >
            <div className="back">
            <Col> Handicap Certificate Image:</Col>
            <Col>
              {" "}
              <img
                src={`http://localhost:5000${data?.ArtistHandicapCertificateImage}`}
              />
            </Col>
            </div>
          </Row>
        </Card>
        </div>
      </div>
    </div>
  );
};

export default ArtProfileTab;
