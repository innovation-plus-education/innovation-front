import React from "react";
import { Container, Nav, Navbar } from "react-bootstrap";

function NavBar() {
  return (
    <Navbar bg="innovation-light" expand="lg" className="innovation-navbar">
      <Container>
        <Navbar.Brand href="#home">INNOVATION</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto" />
          <Nav>
            <Nav.Link href="#home">ECOLES</Nav.Link>
            <Nav.Link href="#link">COURS</Nav.Link>
            <Nav.Link href="#link">SUJETS</Nav.Link>
            <Nav.Link href="#link">BLOG</Nav.Link>
            <Nav.Link href="#link">EN SAVOIR PLUS</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavBar;
