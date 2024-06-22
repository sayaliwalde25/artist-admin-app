import axios from "axios";
import React, { useEffect, useState } from "react";
import { Card, Col, Row } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

const ArtistOrderTab = ({ data }) => {
  const [ArtistOrders, setArtistOrders] = useState([]);
  const navigator = useNavigate();

  useEffect(() => {
    axios
      .get("http://localhost:5000/artapi/allorders")
      .then((result) => {
        setArtistOrders(result.data);
        console.log("Data", result.data);
      })
      .catch((err) => {
        console.log(err);
      });
  });

  return (
    <div>
      <h4>ArtistOrderTab</h4>
      {/* Id:{data?._id} */}
      <Row>
        {ArtistOrders.map((order) => {
          return (
            <Col sm={12} md={9} lg={3}>
              <Card>
                <Card.Body>
                  <Card.Text>Date: {order.OrderDate}</Card.Text>
                  <Card.Text>Status: {order.OrderStatus}</Card.Text>
                  <Card.Text>Total: &#8377; {order.OrderTotalAmount}</Card.Text>
                </Card.Body>
                {/* <Card.Footer>
                  <button
                    onClick={navigator("/artistorderdetails", { state: order })}
                  >
                    Order Details
                  </button>
                </Card.Footer> */}
              </Card>
            </Col>
          );
        })}
      </Row>
    </div>
  );
};

export default ArtistOrderTab;
