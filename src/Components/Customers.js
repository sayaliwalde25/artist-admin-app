import axios from "axios";
import React, { useEffect, useState } from "react";
import { Card, Col, Container, Row } from "react-bootstrap";
import "../CSS/Customers.css";

const Customers = () => {
  // AllCustomers
  const [allCustomers, setallCustomers] = useState([]);

  // AllCustomers
  useEffect(() => {
    axios
      .get("http://localhost:5000/artapi/allcustomers")
      .then((result) => {
        setallCustomers(result.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <div style={{ marginTop: "80px" }}>
      <h6>Customers</h6>
      <Container>
        <Row>
          {allCustomers.map((cust) => {
            return (
              <Col sm={12} md={8} lg={4}>
                <div className="allcust-container">
                  <Card className="allcust-back">
                    <Card.Body>
                      <Card.Text className="cust-text">
                        Mobile No: {cust.CustomerMobileNo}
                      </Card.Text>
                      <Card.Text className="cust-text">
                        Address: {cust.CustomerAddress}
                      </Card.Text>
                      <Card.Text className="cust-text">
                        City: {cust.CustomerCity}
                      </Card.Text>
                      <Card.Text className="cust-text">
                        Email: {cust.CustomerEmail}
                      </Card.Text>
                    </Card.Body>
                    <Card.Footer>
                      <button>Delete</button>
                    </Card.Footer>
                  </Card>
                  <Card className="allcust-front">
                    <div className="allcust-image">
                      <Card.Img
                        className="allcust-img"
                        src={`http://localhost:5000${cust.CustomerProfile}`}
                      />
                    </div>
                      <Card.Title className="allcust-title">
                        Name: {cust.CustomerName}
                      </Card.Title>
                  </Card>
                </div>
              </Col>
            );
          })}
        </Row>
      </Container>
    </div>
  );
};

export default Customers;
