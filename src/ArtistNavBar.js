import React from "react";
import { Container, Nav, Navbar } from "react-bootstrap";
import { Link } from "react-router-dom";
import "./CSS/ArtistNavBar.css";

const ArtistNavBar = () => {
  return (
    <div>
      <Navbar className="nav-bar" expand="lg">
        <Container>
          <Navbar.Brand>Artist</Navbar.Brand>
          <Navbar.Toggle aria-controls="nav-bar" />
          <Navbar.Collapse id="nav-bar">
            <Nav>
              <Nav.Link>
                <Link to="/">DashBoard</Link>
              </Nav.Link>
              <Nav.Link>
                <Link to="/customers">AllCustomers</Link>
              </Nav.Link>
              <Nav.Link>
                <Link to="/allartists">AllArtists</Link>
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
};

export default ArtistNavBar;
