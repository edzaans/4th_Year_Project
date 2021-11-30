import React from "react";
import { Navbar, Nav, Container } from "react-bootstrap";
import Styles from "../Styles/Header.module.css";
import LoginForm from "./LoginForm";

// mport Assets
const logo = require("../Assets/Logo3.png");

export class Header extends React.Component {
  render() {
    return (
      <div>
        <Navbar className={Styles.test} expand="md">
          <Container fluid>
            <Navbar.Brand href="#">
              <img alt="" src={logo.default} width="100" height="40"></img>
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="navbarScroll" />
            <Navbar.Collapse id="navbarScroll">
              <Nav className="mx-2" style={{ maxHeight: "300px" }} navbarScroll>
                <Nav.Link href="/Home">Home</Nav.Link>
                <Nav.Link href="/About">About</Nav.Link>
                <Nav.Link href="/Employees">Employees</Nav.Link>
                <Nav.Link href="/Employers">Employers</Nav.Link>

                <Nav.Link href="/Jobs2">Jobs</Nav.Link>
                <Nav.Link href="/Profile">Profile</Nav.Link>
                <Nav.Link href="/Login">Login</Nav.Link>
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>
      </div>
    );
  }
}
