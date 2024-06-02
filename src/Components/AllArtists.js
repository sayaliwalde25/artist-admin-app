import axios from "axios";
import React, { useEffect, useState } from "react";
import { Card, Col, Container, Row } from "react-bootstrap";
// import img1 from "../images/art.png";
import "../CSS/AllArtists.css";
import { useNavigate } from "react-router-dom";

const AllArtists = () => {
  // AllArtists
  const [allArtists, setallArtists] = useState([]);

  const navigate = useNavigate();

  //  AllArtists
  useEffect(() => {
    axios
      .get("http://localhost:5000/artapi/allartists")
      .then((result) => {
        setallArtists(result.data);
        // navigate("/")
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <div style={{ marginTop: "80px" }}>
      <div className="main">
        <h2>All Artists</h2>
        <Container>
          <Row>
            {allArtists.map((artist) => {
              return (
                <Col>
                  <div className="allart-div">
                    <div className="allart-img">
                      <Card.Img
                        className="allart-image"
                        src={`http://localhost:5000${artist.ArtistProfile}`}
                      />
                    </div>
                    <div className="allart-content">
                      <div className="allart-details">
                        <h2 className="allart-h2">
                          <Card.Subtitle className="allart-subtitle">
                            {artist.ArtistFullName}
                          </Card.Subtitle>
                        </h2>
                        <Card.Body className="allart-body">
                          <h3 className="allart-h3">
                            <Card.Text className="allart-text">
                              {artist.ArtistEmail}
                            </Card.Text>
                          </h3>
                          <h3 className="allart-h3">
                            <Card.Text className="allart-text">
                              {artist.ArtistAddress}
                            </Card.Text>
                          </h3>
                          <h3 className="allart-h3">
                            <Card.Text className="allart-text">
                              {artist.ArtistCity}
                            </Card.Text>
                          </h3>
                          <h3 className="allart-h3">
                            <Card.Text className="allart-text">
                              {artist.ArtistMobile}
                            </Card.Text>
                          </h3>
                        </Card.Body>
                        <Card.Footer className="allart-footer">
                          <button
                            className="allart-button"
                            onClick={() =>
                              navigate("/artist", { state: artist })
                            }
                          >
                            Artist details
                          </button>
                        </Card.Footer>
                      </div>
                    </div>
                  </div>
                </Col>
              );
            })}
          </Row>
        </Container>
      </div>
    </div>
  );
};

export default AllArtists;
