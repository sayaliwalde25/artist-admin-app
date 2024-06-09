import axios from "axios";
import React, { useEffect, useState } from "react";
import { Card, Col, Container, Modal, Row } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import "../CSS/ArtOrderTab.css";

const ArtistOrderTab = () => {
  // ArtOrders
  const [ArtOrders, setArtOrders] = useState([]);
  // const [onShowDelete, setonShowDelete] = useState(false);

  const navigator = useNavigate();

  // ArtOrders
  useEffect(() => {
    axios
      .get("http://localhost:5000/artapi/allorders")
      .then((result) => {
        setArtOrders(result.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <div>
      <h5 className="ordertab-h5">ArtOrderTab</h5>
      {/* AllOrders */}
      <Container>
        <Row>
          {ArtOrders.map((order) => {
            return (
              <Col sm={12} md={6} lg={4}>
                <Card className="artordertab-card">
                  <Card.Body className="artordertab-body">
                    <Card.Text className="artordertab-text">
                      Date:{order.OrderDate}
                    </Card.Text>
                    <Card.Text className="artordertab-text">
                      Status:{order.OrderStatus}
                    </Card.Text>
                    <Card.Text className="artordertab-text">
                      Total:{order.OrderTotalAmount}
                    </Card.Text>
                  </Card.Body>
                  <div className="artordertab-div">
                    <button
                      className="artordertab-button"
                      onClick={() =>
                        navigator("/artistorderdetails", { state: order })
                      }
                    >
                      OrderDetails
                    </button>
                    {/* <button
                      className="artorder-button"
                      onClick={() => {
                        onShowDelete(true);
                      }}
                    >
                      Delete
                    </button> */}
                  </div>
                </Card>
              </Col>
            );
          })}
        </Row>
      </Container>

      {/* Delete */}
      {/* <Modal show={onShowDelete} onHide={() => setonShowDelete(false)}>
        <Modal.Header closeButton>
          <Modal.Title>Order Delete</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <h4>Are you sure to delete this Dish?</h4>
        </Modal.Body>
        <Modal.Footer>
          <button className="ordertab-button">Yes</button>
          <button
            className="ordertab-button"
            onClick={() => setonShowDelete(false)}
          >
            No
          </button>
        </Modal.Footer>
      </Modal> */}
    </div>
  );
};

export default ArtistOrderTab;
