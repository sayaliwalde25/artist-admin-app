import axios from "axios";
import React, { useEffect, useState } from "react";
import { Card, Col, Row } from "react-bootstrap";
import "../CSS/ArtWorkTab.css";

const ArtWorkTab = ({ data }) => {
  const [AllArtWorks, setAllArtWorks] = useState([]);

  useEffect(() => {
    axios
      .post("http://localhost:5000/artapi/getartworksbyartistid", {
        ArtistId: data?._id,
      })
      .then((result) => {
        console.log(result.data);
        setAllArtWorks(result.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
  return (
    <div>
      <h5>ArtWorkTab</h5>
      Id: {data?._id}
      <Row>
        {AllArtWorks.map((art) => {
          return (
            <Col sm={12} md={9} lg={3}>
              <Card className="artworktab-card">
                <div className="artworktab-image">
                  <Card.Img
                    className="artworktab-img"
                    src={`http://localhost:5000${art.ArtWorkImage}`}
                  />
                </div>
                <Card.Body>
                  <Card.Text>Name: {art.ArtWorkName}</Card.Text>
                  <Card.Text>Price: &#8377;{art.ArtWorkPrice}</Card.Text>
                </Card.Body>
              </Card>
            </Col>
          );
        })}
      </Row>
    </div>
  );
};

export default ArtWorkTab;
