import React from "react";
import { Container, Nav, Navbar } from "react-bootstrap";
import { Link } from "react-router-dom";
import "../CSS/ArtistNavBar.css";

const ArtistNavBar = () => {
  return (
    <div>
      <Navbar className="artnav-bar" expand="lg">
        <Container>
          <Navbar.Brand>Artist</Navbar.Brand>
          <Navbar.Toggle aria-controls="nav-bar" />
          <Navbar.Collapse id="nav-bar">
            <Nav className="artnav-nav">
              <Nav.Link>
                <Link className="artnav-link" to="/">
                  <div className="artnav-div">DashBoard</div>
                </Link>
              </Nav.Link>
              <Nav.Link>
                <Link className="artnav-link" to="/customers">
                  <div className="artnav-div">AllCustomers</div>
                </Link>
              </Nav.Link>
              <Nav.Link>
                <Link className="artnav-link" to="/allartists">
                  <div className="artnav-div">AllArtists</div>
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
