import React from "react";
import { Navbar, Nav, Container } from "react-bootstrap";

const Header = () => {
  return (
    <Navbar bg="primary" expand="lg" className="shadow-sm" variant="dark">
      <Container>
        <Navbar.Brand href="/" className="fw-bold text-white">
          Eternal Memories
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <Nav.Link href="/" className="text-white">Home</Nav.Link>
            <Nav.Link href="/about" className="text-white">About</Nav.Link>
            <Nav.Link href="/memorials" className="text-white">Memorials</Nav.Link>
            <Nav.Link href="/contact" className="text-white">Contact</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Header;
