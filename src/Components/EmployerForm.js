import React, { useState } from "react";
// Import Axios
import Axios from "axios";
// Import Styles from modules
import Styles from "../Styles/EmployerForm.module.css";

// Import React Bootstrap
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";

// Set state for all inputs
function EmployerForm() {
  const [name, setname] = useState("");
  const [email, setemail] = useState("");
  const [location, setlocation] = useState("");
  const [registration, setregistration] = useState("");
  const [website, setwebsite] = useState("");
  const [phone, setphone] = useState("");

  // Post function with corresponding variables/db fields
  const employer_register = () => {
    Axios.post("http://localhost:3001/employer_register", {
      name: name,
      email: email,
      location: location,
      registration: registration,
      website: website,
      phone: phone,
    }).then((response) => {
      console.log(response);
    });
  };

  return (
    <div>
      {/* Container */}
      <Container className={Styles.emp_container}>
        {/* Form starts here */}
        <h2 className="mb-5">Employer registration</h2>
        <Form>
          {/* Set Company Name */}
          <div className="row">
            <div className="col-md-6">
              <Form.Group controlId="form.name">
                <Form.Label>Company Name</Form.Label>
                <Form.Control
                  className={Styles.emp_input}
                  type="text"
                  required
                  placeholder="Company name"
                  onChange={(event) => {
                    setname(event.target.value);
                  }}
                />
              </Form.Group>
            </div>

            <div className="col-md-6">
              {/* Set user Location */}
              <Form.Group controlId="form.location">
                <Form.Label>Company location</Form.Label>
                <Form.Control
                  className={Styles.emp_input}
                  type="text"
                  required
                  placeholder="Your location"
                  onChange={(event) => {
                    setlocation(event.target.value);
                  }}
                />
              </Form.Group>
            </div>
          </div>

          <div className="row">
            <div className="col-md-6">
              {/* Set user Email */}
              <Form.Group controlId="form.email">
                <Form.Label>Company email</Form.Label>
                <Form.Control
                  className={Styles.emp_input}
                  type="email"
                  required
                  placeholder="name@example.com"
                  onChange={(event) => {
                    setemail(event.target.value);
                  }}
                />
              </Form.Group>
            </div>

            <div className="col-md-6">
              {/* Set Company Reg Number */}
              <Form.Group controlId="form.registration">
                <Form.Label>Company Registration Nr</Form.Label>
                <Form.Control
                  className={Styles.emp_input}
                  type="text"
                  required
                  placeholder="Registration Nr"
                  onChange={(event) => {
                    setregistration(event.target.value);
                  }}
                />
              </Form.Group>
            </div>
          </div>

          <div className="row">
            <div className="col-md-6">
              {/* Set Company Website */}
              <Form.Group controlId="form.website">
                <Form.Label>Company website</Form.Label>
                <Form.Control
                  className={Styles.emp_input}
                  type="text"
                  required
                  placeholder="Your experience"
                  onChange={(event) => {
                    setwebsite(event.target.value);
                  }}
                />
              </Form.Group>
            </div>
            <div className="col-md-6">
              {/* Set Company Phwone Number */}
              <Form.Group controlId="form.phone">
                <Form.Label>Company Phone number</Form.Label>
                <Form.Control
                  className={Styles.emp_input}
                  type="text"
                  required
                  placeholder="Company Phone nr"
                  onChange={(event) => {
                    setphone(event.target.value);
                  }}
                />
              </Form.Group>
            </div>
          </div>
          <div className="row">
            <div className="col-md-12 col-sm-12 mx-auto mt-3">
              {/* Submit  */}
              <Form.Group controlId="form.submit">
                <Form.Control
                  className={Styles.emp_btn}
                  type="submit"
                  value="Submit"
                  onClick={employer_register}
                />
              </Form.Group>
            </div>
          </div>
        </Form>
      </Container>
    </div>
  );
}
export default EmployerForm;
