import React from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";

import "../components/styles/navBar.css";

const NavBar = () => {
  return (
    <Navbar className="navBarApp" bg="light" expand="lg">
      <Container className="barColor">
        <Navbar.Brand href="#/">User App</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
      </Container>
    </Navbar>
  );
};

export default NavBar;
