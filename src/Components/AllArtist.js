import axios from "axios";
import React, { useEffect, useState } from "react";
import { Card, Col, Container, Row } from "react-bootstrap";
import img1 from "../images/art.png";
import "../Allcss/ArtCard.css";
import { useNavigate } from "react-router-dom";
const AllArtists = () => {
  // AllArtists
  const [allartists, setallartists] = useState([]);

  const navigate = useNavigate();

  //  AllArtists
  useEffect(() => {
    axios
      .get("http://localhost:5000/api/allartist")
      .then((result) => {
        setallartists(result.data);
        // navigate("/")
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <div className="main">
      <h2>all artists</h2>
      <Container>
        <Row>
          {allartists.map((artist) => {
            return (
              <Col>
                <div className="card-art">
                  <div className="imgBx">
                    <Card.Img src={img1} />
                  </div>
                  <div className="content">
                    <div className="details">
                      <Card.Title>Name:{artist.artist?.ArtistName}</Card.Title>
                      <Card.Body>
                      <Card.Text>{artist.ArtistEmail}</Card.Text>
                       <Card.Text>{artist.ArtistAddress}</Card.Text>
                        <Card.Text>{artist.ArtistCity}</Card.Text>
                        <Card.Text>{artist.ArtistMobile}</Card.Text>
                      </Card.Body>
                      <Card.Footer>
                        <button onClick={() => navigate("/artist",{state:artist})}>
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
        {/* <Row>
            {allartists.map((art)=> {
              return(
                <Col sm={12} md={4} lg={2}>
                  <Card>
                    <Card.Img src={img1}/>
                     <Card.Title>{art.ArtistName}</Card.Title>
                     <Card.Body>
                      <Card.Text>{art.ArtistEmail}</Card.Text>
                      <Card.Subtitle>{art.ArtistMobile}</Card.Subtitle>
                     </Card.Body>
                     <Card.Footer>
                      <button> Update</button>
                      <button> Delete</button>
                    </Card.Footer>
                  </Card>
                </Col>
              )
            })}
          </Row> */}
      </Container>
    </div>
  );
};

export default AllArtists;
