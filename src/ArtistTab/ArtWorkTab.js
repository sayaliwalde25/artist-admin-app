import axios from "axios";
import React, { useEffect, useState } from "react";
import { Card, Col, Container, Row } from "react-bootstrap";
import "../CSS/ArtWorkTab.css";
import { useLocation } from "react-router-dom";

const ArtWorkTab = ({ data }) => {
  // AllArtWorks
  const [AllArtWorks, setAllArtWorks] = useState([]);
  const artistData = useLocation().state;

  // AllArtWorks
  useEffect(() => {
    axios
      .post("http://localhost:5000/artapi/getartworksbyartistid")
      .then((result) => {
        console.log("Data", result.data);
        setAllArtWorks(result.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <div>
      <h5></h5>
      <Container>
        <Row>
          {AllArtWorks.map((art) => {
            return (
              <Col sm={12} md={8} lg={4}>
                <Card className="artworktab-card" style={{ marginTop: "10px" }}>
                  <Card.Img
                    className="artworktab-img"
                    src={`http://localhost:5000${art.ArtWorkImage}`}
                  />
                  <Card.Body className="artworktab-body">
                    <Card.Text className="artworktab-text">
                      {/* {art.ArtWorkName} */}
                    </Card.Text>
                    <div>
                      <Card.Subtitle className="artworktab-text">
                        {/* &#8377;{art.ArtWorkPrice} */}
                      </Card.Subtitle>
                    </div>
                    <Card.Text className="artworktab-text">
                      {/* {art.ArtWorkFrameSize} */}
                    </Card.Text>
                  </Card.Body>
                </Card>
              </Col>
            );
          })}
        </Row>
      </Container>
    </div>
  );
};

export default ArtWorkTab;
