import axios from "axios";
import React, { useEffect, useState } from "react";
import { Card, Col, Container, Modal, Row } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import "../CSS/OrderTab.css";

const OrderTab = () => {
  // AllOrders
  const [AllOrders, setAllOrders] = useState([]);
  const [onShowDelete, setonShowDelete] = useState(false);

  const navigator = useNavigate();

  // AlllOrders
  useEffect(() => {
    axios
      .get("http://localhost:5000/artapi/allorders")
      .then((result) => {
        setAllOrders(result.data);
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
          {AllOrders.map((order) => {
            return (
              <Col sm={12} md={6} lg={4}>
                <Card className="ordertab-card">
                  <Card.Body className="ordertab-body">
                    <Card.Text className="ordertab-text">
                      Date:{order.OrderDate}
                    </Card.Text>
                    <Card.Text className="ordertab-text">
                      Status:{order.OrdererStatus}
                    </Card.Text>
                    <Card.Text className="ordertab-text">
                      Total:{order.OrderTotalAmount}
                    </Card.Text>
                  </Card.Body>
                  <div className="ordertab-div">
                    <button
                      className="ordertab-button"
                      onClick={() =>
                        navigator("/orderdetails", { state: order })
                      }
                    >
                      OrderDetails
                    </button>
                    <button
                      className="order-button"
                      onClick={() => {
                        onShowDelete(true);
                      }}
                    >
                      Delete
                    </button>
                  </div>
                </Card>
              </Col>
            );
          })}
        </Row>
      </Container>

      {/* Delete */}
      <Modal show={onShowDelete} onHide={() => setonShowDelete(false)}>
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
      </Modal>
    </div>
  );
};

export default OrderTab;
