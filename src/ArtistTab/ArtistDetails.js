import axios from "axios";
import React, { useEffect, useState } from "react";
import { Col, Row } from "react-bootstrap";
import "../CSS/Artist.css";

function ArtistDetails() {
  const [Artist, setArtist] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:5000/artapi/allartists")
      .then((result) => {
        setArtist(result.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <div>
      <h1>ArtistDetails</h1>
      <div>
        <Row>
          {Artist.map((data) => {
            return (
              <Col sm={12} md={9} lg={3}>
                <p>Name:{data.ArtistFullName}</p>
                <p>Email:{data.ArtistEmail}</p>
                <p>Address:{data.ArtistAddress}</p>
                <p>City:{data.ArtistCity}</p>
                <p>Mobile:{data.ArtistMobile}</p>
              </Col>
            );
          })}
        </Row>
      </div>
    </div>
  );
}

export default ArtistDetails;