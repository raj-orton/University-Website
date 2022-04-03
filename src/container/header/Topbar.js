import React, { Component } from "react";
import {
  Navbar,
  Nav,
  NavDropdown,
  Form,
  FormControl,
  Button,
} from "react-bootstrap";
import logo from "../../images/logo.png";
import "./header.css";
import { Link } from "react-router-dom";

export class Topbar extends Component {
  render() {
    return (
      <Navbar
        expand="lg"
        className="px-4 text-capitalize"
        style={{ backgroundColor: "#fff" }}
      >
        <Navbar.Brand href="#home">
          <img src={logo} alt="logo" />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mx-auto">
            <Link to="/">
              <Nav.Link href="#home">Home</Nav.Link>
            </Link>

            <NavDropdown title="Attendance" id="administration-dropdown">
              <Link to="/viewAttendance">
                <NavDropdown.Item href="/viewAttendance">View</NavDropdown.Item>
              </Link>
              <Link to="/editAttendance">
                <NavDropdown.Item href="/editAttendance">Edit</NavDropdown.Item>
              </Link>
            </NavDropdown>
            <Link to="/faculty">
              <Nav.Link href="/faculty">Faculty</Nav.Link>
            </Link>
            <Link to="/login">
              <Nav.Link href="/login">Login</Nav.Link>
            </Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    );
  }
}

export default Topbar;
