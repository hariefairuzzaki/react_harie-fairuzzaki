import React from "react";
import { Button, Container, Nav, Navbar } from "react-bootstrap";
import Logo from "../assets/img/logo/logo.svg";

export default function Navibar() {
  return (
    <>
      <Navbar expand="lg">
        <Container className="container">
          <Navbar.Brand href="/">
            <img src={Logo} alt="Logo" />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav">
            <span className="navbar-toggler-icon" />
          </Navbar.Toggle>
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="mx-auto mb-2 mb-lg-0">
              <Nav.Link href="/" className="fw-semibold text-black">
                Home
              </Nav.Link>
              <Nav.Link href="#destination" className="fw-semibold text-black">
                Destination
              </Nav.Link>
              <Nav.Link href="#about-us" className="fw-semibold text-black">
                About
              </Nav.Link>
              <Nav.Link href="#subscribe" className="fw-semibold text-black">
                Subscribe
              </Nav.Link>
            </Nav>
            <Button variant="outline-success border-0" className="me-3" style={{ width: "8rem" }}>
              Login
            </Button>
            <Button variant="success border-0" style={{ width: "8rem" }}>
              Sign Up
            </Button>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
}
