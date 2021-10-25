import React from "react";
import { Form, Button, Container } from "react-bootstrap";
import Styles from "../Styles.css";

export class Register extends React.Component {
  constructor() {
    super();
  }

  onSubmit(event) {
    alert("User added");
  }

  render() {
    return (
      <div>
        <h1>Testing Registration</h1>
        <Container>
          {/* Working Form with BootStrap styles */}
          <Form onSubmit={this.onSubmit}>
            <Form.Group className="mb-3" controlId="employee-name">
              <Form.Label>First name</Form.Label>
              <Form.Control type="text" required />
            </Form.Group>

            <Form.Group className="mb-3" controlId="employee-lname">
              <Form.Label>Last name</Form.Label>
              <Form.Control type="text" required />
            </Form.Group>

            <Form.Group className="mb-3" controlId="employee-city">
              <Form.Label>City</Form.Label>
              <Form.Control type="text" required />
            </Form.Group>

            <Button variant="primary" type="submit" value="add">
              Register
            </Button>
          </Form>
        </Container>
      </div>
    );
  }
}
