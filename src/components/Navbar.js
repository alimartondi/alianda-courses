import React from "react";
import { Nav, Button, Navbar, Container } from "react-bootstrap";

export default function NavBar() {
  return (
    <Navbar bg="light" expand="lg" className="py-2 py-md-4">
      <Container>
        <Navbar.Brand href="#home">Our Logo</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ml-auto">
            <Nav.Link href="#home">Tentang Kami</Nav.Link>
            <Nav.Link href="#link">Gagasan</Nav.Link>
            <Nav.Link href="#link">Campaign</Nav.Link>
            <Nav.Link href="#link">Event</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
