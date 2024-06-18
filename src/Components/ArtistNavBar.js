import React from "react";
import { Container, Nav, Navbar } from "react-bootstrap";
import { Link } from "react-router-dom";
import "../CSS/ArtistNavBar.css";
import img1 from "../images/nav-removebg-preview.png";
import DashBoard from "../images/icons8-dashboard-48.png";
import Customers from "../images/icons8-customers-50.png";
import Artist from "../images/artist.png";

const ArtistNavBar = () => {
  return (
    <div>
      <Navbar className="artnav-bar" expand="lg">
        <Container>
          <Navbar.Brand className="artnav-brand">
            <div style={{ display: "flex", marginTop: "30px" }}>
              <img className="artnav-logo" src={img1} />
              <div className="artnav-div">Art Vision</div>
            </div>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="nav-bar" />
          <Navbar.Collapse id="nav-bar">
            <Nav className="me-auto artnav-nav">
              <Nav.Link className="artnav-link">
                <Link className="artnav-links" to="/">
                  {/* <div className="artnav-div"> */}
                  <img className="artnav-icon" src={DashBoard} />
                  DashBoard
                  {/* </div> */}
                </Link>
              </Nav.Link>
              <Nav.Link className="artnav-link">
                <Link className="artnav-links" to="/customers">
                  {/* <div className="artnav-div"> */}
                  <img className="artnav-icon" src={Customers} />
                  AllCustomers
                  {/* </div> */}
                </Link>
              </Nav.Link>
              <Nav.Link className="artnav-link">
                <Link className="artnav-links" to="/allartists">
                  {/* <div className="artnav-div"> */}
                  <img className="artnav-icon" src={Artist} />
                  AllArtists
                  {/* </div> */}
                </Link>
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
};

export default ArtistNavBar;
