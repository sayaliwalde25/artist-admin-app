import axios from "axios";
import React, { useEffect, useState } from "react";
import { Col, Row } from "react-bootstrap";
import '../Allcss/Artist.css'
function ArtistsDetails() {
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
      <h1>ArtistsDetails</h1>
      <div>
        <Row>
          {Artist.map((data) => {
            return (
              <Col sm={12} md={9} lg={3}>
                <p>Name:{data.ArtistName}</p>
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

export default ArtistsDetails;
