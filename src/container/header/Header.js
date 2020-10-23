import React, { Component } from "react";
import {
  Navbar,
  Nav,
  NavDropdown,
  Form,
  FormControl,
  Button,
  Container,
  Row,
  Col,
  Carousel,
  Image,
} from "react-bootstrap";
import logo from "../../images/logo.png";
import slide01 from "../../images/slide-01.jpg";
import slide02 from "../../images/slide-02.jpg";
import slide03 from "../../images/slide-03.jpg";
import "./header.css";

class Header extends Component {
  render() {
    return (
      <header id="home" className="header-styles">
        <Navbar bg="light" fixed="top" expand="lg" className="px-4">
          <Navbar.Brand href="#home">
            <img src={logo} alt="logo" />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="mx-auto">
              <Nav.Link href="#home">Home</Nav.Link>
              <Nav.Link href="#about">About</Nav.Link>
              <NavDropdown title="Administration" id="administration-dropdown">
                <NavDropdown.Item href="#courses">Courses</NavDropdown.Item>
                <NavDropdown.Item href="#administration2">
                  Administration
                </NavDropdown.Item>
                <NavDropdown.Item href="#administration3">
                  Administration
                </NavDropdown.Item>
              </NavDropdown>
              <NavDropdown title="Admission" id="admission-dropdown">
                <NavDropdown.Item href="#messages">News</NavDropdown.Item>
                <NavDropdown.Item href="#admission2">
                  Admission
                </NavDropdown.Item>
                <NavDropdown.Item href="#admission3">
                  Admission
                </NavDropdown.Item>
                <NavDropdown.Item href="#admission4">
                  Admission
                </NavDropdown.Item>
                <NavDropdown.Item href="#admission5">
                  Admission
                </NavDropdown.Item>
              </NavDropdown>
              <NavDropdown title="Faculty" id="campus-dropdown">
                <NavDropdown.Item href="#campus1">Campus 01</NavDropdown.Item>
                <NavDropdown.Item href="#campus1">Campus 01</NavDropdown.Item>
                <NavDropdown.Item href="#campus1">Campus 01</NavDropdown.Item>
              </NavDropdown>
              <Nav.Link href="#contact">Contact</Nav.Link>
            </Nav>
            <Form inline>
              <FormControl
                type="text"
                placeholder="Search"
                className="mr-sm-2"
              />
              <Button variant="outline-success enroll-btn">Enroll</Button>
            </Form>
          </Navbar.Collapse>
        </Navbar>

        <Container fluid>
          <Row className="max-height">
            <Col xs={10} className="mx-auto div-col">
              <Carousel>
                <Carousel.Item>
                  <Image
                    className="d-block w-100"
                    src={slide01}
                    alt="First slide"
                    fluid
                  />
                  <Carousel.Caption
                    className="text-left"
                    data-aos="fade-down"
                    // data-aos-offset="300"
                    // data-aos-easing="ease-in-sine"
                  >
                    <h1> First slide label First slide label </h1>
                    <p>
                      Nulla vitae elit libero, a pharetra augue mollis interdum.
                      Nulla vitae elit libero, a pharetra augue mollis interdum.
                      Nulla vitae elit libero, a pharetra augue mollis interdum.
                      Nulla vitae elit libero, a pharetra augue mollis interdum.
                      Nulla vitae elit libero, a pharetra augue mollis interdum.
                    </p>
                    <Button variant="danger" style={{ marginBottom: 10 }}>
                      Now
                    </Button>
                  </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                  <Image
                    className="d-block w-100"
                    src={slide02}
                    alt="Third slide"
                    fluid
                  />

                  <Carousel.Caption data-aos="fade-right" className="text-left">
                    <h1>Second slide label</h1>
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    </p>
                    <Button variant="danger" style={{ marginBottom: 10 }}>
                      Now
                    </Button>
                  </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                  <Image
                    className="d-block w-100"
                    src={slide03}
                    alt="Third slide"
                    fluid
                  />

                  <Carousel.Caption data-aos="fade-right" className="text-left">
                    <h1>Third slide label</h1>
                    <p>
                      Praesent commodo cursus magna, vel scelerisque nisl
                      consectetur.
                    </p>
                    <Button variant="danger" style={{ marginBottom: 10 }}>
                      Now
                    </Button>
                  </Carousel.Caption>
                </Carousel.Item>
              </Carousel>
            </Col>
          </Row>
        </Container>
      </header>
    );
  }
}

export default Header;
