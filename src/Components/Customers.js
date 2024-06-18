import axios from "axios";
import React, { useEffect, useState } from "react";
import { Card, Col, Container, Modal, Row } from "react-bootstrap";
import "../CSS/Customers.css";
import { MdCancel, MdDelete } from "react-icons/md";
import { BiCheck } from "react-icons/bi";

const Customers = () => {
  // AllCustomers
  const [AllCustomers, setAllCustomers] = useState([]);

  // AllCustomers
  useEffect(() => {
    axios
      .get("http://localhost:5000/artapi/allcustomers")
      .then((result) => {
        setAllCustomers(result.data);
        console.log(result.data)
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
  // Delete
  const [showDelete, setshowDelete] = useState(false);
  const [selectedArtWorks, setselectedArtWorks] = useState([]);
  const doDelete = () => {
    let artworkIdDelete = {
      CustId: selectedArtWorks._id,
    };
    axios
      .delete("http://localhost:5000/artapi/deletecustomer", {
        data: artworkIdDelete,
      })
      .then((result) => {
        console.log(result.data);
        setshowDelete(false);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  return (
    <div style={{ marginTop: "80px" }}>
      <h6>Customers</h6>
      <Container>
        <Row>
          {AllCustomers.map((cust) => {
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
                      <MdDelete
                        className="cust-delete"
                        onClick={() => {
                          setshowDelete(true);
                          setselectedArtWorks(cust);
                        }}
                      >
                        Delete
                      </MdDelete>
                    </Card.Footer>
                  </Card>
                  <Card className="cust-front">
                    <div className="cust-image">
                      <Card.Img
                        className="cust-img"
                        src={`http://localhost:5000${cust.CustomerProfile}`}
                      />
                    </div>
                    <Card.Title className="cust-title">
                      Name: {cust.CustomerName}
                    </Card.Title>
                  </Card>
                </div>
              </Col>
            );
          })}
        </Row>
      </Container>
      {/* Delete */}
      <Modal show={showDelete} onHide={() => setshowDelete(false)}>
        <Modal.Header style={{ backgroundColor: "#cdb4db" }} closeButton>
          <h5 style={{ fontSize: "21px" }}>Delete ArtWorks</h5>
        </Modal.Header>
        <Modal.Body style={{ backgroundColor: "#cdb4db" }}>
          <h4>Are you sure you want to delete this artworks?</h4>
        </Modal.Body>
        <Modal.Footer style={{ backgroundColor: "#cdb4db" }}>
          <BiCheck
            style={{
              border: "2px solid green",
              color: "white",
              background: "green",
              borderRadius: "50%",
              marginRight: "10px",
            }}
            onClick={() => doDelete()}
          >
            Yes
          </BiCheck>
          <MdCancel
            style={{
              border: "1px solid red",
              color: "white",
              background: "red",
              borderRadius: "50%",
            }}
            onClick={() => setshowDelete(false)}
          >
            No
          </MdCancel>
        </Modal.Footer>
      </Modal>
    </div>
  );
};

export default Customers;
