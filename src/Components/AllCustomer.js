import axios from "axios";
import React, { useEffect, useState } from "react";
import { Card, Col, Container, Row } from "react-bootstrap";
import img2 from "../images/art1.jpg";
import '../Allcss/Allcustomer.css'

const AllCustomers = () => {
  // AllCustomers
  const [allcustomers, setallcustomers] = useState([]);


  // AllCustomers
  useEffect(() => {
    axios
      .get("http://localhost:5000/api/allcustomer")
      .then((result) => {
        setallcustomers(result.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <div className="main">
      <h2>allcustomers</h2>
      <Container>
        <Row>
          {allcustomers.map((cust) => {
            return (
              <Col>
                <div className="card-art">
                  <div className="imgBx">
                    <Card.Img src={img2} />
                  </div>
                  <div className="content">
                    <div className="details">
                      <Card.Title>{cust. CustomerName}</Card.Title>
                      <div className="data">
                        <Card.Body>
                          <Card.Text>{cust.CustomerMobileNo}</Card.Text>
                          <Card.Text>{cust.CustomerAddress}</Card.Text>
                          <Card.Text>{cust.CustomerCity}</Card.Text>
                          <Card.Text>{cust.CustomerEmail}</Card.Text>
                        </Card.Body>
                      </div>
                      <div>
                        <Card.Footer>
                          <button >
                            Delete
                          </button> 
                        </Card.Footer>
                      </div>
                    </div>
                  </div>
                </div>

                {/* <div className="card">
                <Card>
                  <div className="imgBx">
                  <Card.Img
                    src={img2}
                  />
                  </div>
                  <div className="content">
                    <div className="details">
                  <Card.Title>{cust.CustomerCity}</Card.Title>
                  <Card.Body>
                    <Card.Text>{cust.CustomerProfile}</Card.Text>
                    <Card.Subtitle>{cust.CustomerPinCode}</Card.Subtitle>
                    </Card.Body>
                     </div>
                  </div>
                  <div className="data">
                  <Card.Footer>
                    <button className="actionBtn">Update</button>
                    <button>Delete</button>
                  </Card.Footer>
                  </div>
                </Card>
                </div> */}
              </Col>
            );
          })}
        </Row>
      </Container>
    </div>
  );
};

export default AllCustomers;
