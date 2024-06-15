import axios from "axios";
import React, { useEffect, useState } from "react";
import { Card, Col } from "react-bootstrap";
import "../CSS/ArtWorkTab.css";

const ArtWorkTab = ({ data }) => {
  const [AllArtWorks, setAllArtWorks] = useState([]);

  useEffect(() => {
    axios
      .post("http://localhost:5000/artapi/getartworksbyartistid", {
        ArtistId: data?.ArtistId?._id,
      })
      .then((result) => {
        console.log(result.data?.data);
        setAllArtWorks(result.data?.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [data]);

  return (
    <div>
      {/* <h5>ArtWorkTab</h5> */}
      {/* {AllArtWorks.length > 0 ? (
        AllArtWorks.map((art, index) => (
          <Col sm={12} md={9} lg={3} key={index}>
            <Card className="artworktab-card">
              <Card.Img
                className="artworktab-img"
                src={`http://localhost:5000${art.ArtWorkImage}`}
                alt="Artwork"
              />
              <Card.Body>
                <Card.Text>Name: {art.ArtWorkName}</Card.Text>
                <Card.Text>Type: {art.ArtWorkType}</Card.Text>
              </Card.Body>
            </Card>
          </Col>
        ))
      ) : (
        <p>No artworks found.</p>
      )} */}
      <h4>{data?.ArtWorkName}</h4>
    </div>
  );
};

export default ArtWorkTab;
