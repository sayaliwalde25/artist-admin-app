import axios from "axios";
import React, { useEffect, useState } from "react";
import { Card, Col, Container, Modal, Row } from "react-bootstrap";
import "../CSS/Customers.css";
import { MdCancel, MdDelete } from "react-icons/md";
import { BiCheck } from "react-icons/bi";

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
  // Delete
  const [showDelete, setshowDelete] = useState(false);
  const [selectedArtWorks, setselectedArtWorks] = useState([]);
  const doDelete = () => {
    let artworkIdDelete = {
      artworkid: selectedArtWorks._id,
    };
    axios
      .delete("http://localhost:5000/artapi/deleteartwork", {
        data: artworkIdDelete,
      })
      .then((result) => {
        console.log(result);
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
          Delete ArtWorks
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
