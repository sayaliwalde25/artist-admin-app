import axios from "axios";
import React, { useEffect, useState } from "react";
import { Card, Col, Container, Row } from "react-bootstrap";
import "../CSS/ArtWorkTab.css";

const ArtWorkTab = ({ data }) => {
  const [AllArtWorks, setAllArtWorks] = useState([]);

  // AllArtWorks
  useEffect = () => {
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
  };
  return (
    <div>
      <h5>ArtWorkTab</h5>
      <Col sm={12} md={9} lg={3}>
        {AllArtWorks.map((art) => {
          return (
            <Card className="artworktab-card">
              <Card.Img
                className="artworktab-img"
                src={`http://localhost:5000${art.ArtWorkImage}`}
              />
            </Card>
          );
        })}
      </Col>
    </div>
  );
};

export default ArtWorkTab;
