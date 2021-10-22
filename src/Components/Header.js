import React from "react";
import {
  Navbar,
  Nav,
  Container,
  NavDropdown,
  Form,
  FormControl,
  Button,
} from "react-bootstrap";

export class Header extends React.Component {
  render() {
    return (
      <div>
        <Navbar bg="primary" variant="dark" className="px-2" expand="md">
          <Container fluid>
            <Navbar.Brand href="#home">Logo</Navbar.Brand>
            <Navbar.Toggle aria-controls="navbarScroll" />
            <Navbar.Collapse id="navbarScroll">
              <Nav className="mx-2" style={{ maxHeight: "300px" }} navbarScroll>
                <Nav.Link href="/">Home</Nav.Link>
                <Nav.Link href="/About">About</Nav.Link>
                <Nav.Link href="/Employees">Employees</Nav.Link>
                <Nav.Link href="/Employers">Employers</Nav.Link>

                <Nav.Link href="/Register">Register</Nav.Link>
                <Nav.Link href="/Login">Login</Nav.Link>
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>
      </div>
    );
  }
}
