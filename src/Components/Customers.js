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
    <div>
      <h6>Customers</h6>
      <Container>
        <Row>
          {allCustomers.map((cust) => {
            return (
              <Col sm={12} md={8} lg={4}>
                <div className="cust-container">
                  <Card className="cust-back">
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
                  <Card className="cust-front">
                    <div className="cust-image">
                      <Card.Img
                        className="cust-img"
                        src={`http://localhost:5000${cust.CustomerProfile}`}
                      />
                      <Card.Footer className="cust-foot">
                        <Card.Title className="cust-title">
                          Name: {cust.CustomerName}
                        </Card.Title>
                      </Card.Footer>
                    </div>
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
