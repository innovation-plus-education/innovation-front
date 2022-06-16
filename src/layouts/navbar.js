import React from "react";
import PropTypes from "prop-types";
import { Container, Nav, Navbar } from "react-bootstrap";
import getMediaUrl from "../utils/getMediaUrl";

function NavBar({ navbar: { homepage, navigables } }) {
  return (
    <Navbar bg="innovation-light" expand="lg" className="innovation-navbar">
      <Container>
        <Navbar.Brand href={homepage.link}>
          <img src={getMediaUrl(homepage.logo)} alt={homepage.link} />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto" />
          <Nav>
            {navigables.map((navigable) => (
              <Nav.Link href={navigable.link}>{navigable.name}</Nav.Link>
            ))}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

NavBar.propTypes = {
  navbar: PropTypes.shape({
    homepage: PropTypes.shape({
      link: PropTypes.string.isRequired,
      logo: PropTypes.string.isRequired,
    }).isRequired,
    navigables: PropTypes.arrayOf({
      link: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
    }),
  }).isRequired,
};

export default NavBar;
