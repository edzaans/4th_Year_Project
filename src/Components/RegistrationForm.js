import React, { useState, useEffect } from "react";
// Import Axios
import Axios from "axios";
// Import Styles from modules
import Styles from "../Styles/Form.module.css";

// Import React Bootstrap
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";

// Set state for all inputs
function UserForm() {
  const [name, setname] = useState("");
  const [lname, setlname] = useState("");
  const [email, setemail] = useState("");
  const [location, setlocation] = useState("");
  const [register_date, setregister_date] = useState("");
  const [licence_cat, setlicence_cat] = useState("");
  const [qualifications, setqualifications] = useState("");
  const [penalty_points, setpenalty_points] = useState("");
  const [experience_years, setexperience_years] = useState("");
  const [work_type, setwork_type] = useState("");
  const [available, setavailable] = useState("");

  // Post function with corresponding variables/db fields
  const register = () => {
    Axios.post("http://localhost:3001/register", {
      name: name,
      lname: lname,
      email: email,
      location: location,
      register_date: register_date,
      licence_cat: licence_cat,
      qualifications: qualifications,
      penalty_points: penalty_points,
      experience_years: experience_years,
      work_type: work_type,
      available: available,
    }).then((response) => {
      console.log(response);
    });
  };

  return (
    <div>
      {/* Container */}
      <Container className={Styles.container}>
        {/* Form starts here */}
        <Form>
          {/* Set user First Name */}
          <Form.Group className={Styles.input} controlId="form.name">
            <Form.Label>First name</Form.Label>
            <Form.Control
              type="text"
              placeholder="Your first name"
              onChange={(event) => {
                setname(event.target.value);
              }}
            />
          </Form.Group>

          {/* Set user Last Name */}
          <Form.Group className={Styles.input} controlId="form.lname">
            <Form.Label>Last name</Form.Label>
            <Form.Control
              type="text"
              placeholder="Your last name"
              onChange={(event) => {
                setlname(event.target.value);
              }}
            />
          </Form.Group>

          {/* Set user Email */}
          <Form.Group className={Styles.input} controlId="form.email">
            <Form.Label>Email address</Form.Label>
            <Form.Control
              type="email"
              placeholder="name@example.com"
              onChange={(event) => {
                setemail(event.target.value);
              }}
            />
          </Form.Group>

          {/* Set user Location */}
          <Form.Group className={Styles.input} controlId="form.location">
            <Form.Label>Your location</Form.Label>
            <Form.Control
              type="text"
              placeholder="Your location"
              onChange={(event) => {
                setlocation(event.target.value);
              }}
            />
          </Form.Group>

          {/* Set user Licence category */}
          <Form.Group className={Styles.input} controlId="form.licence">
            <Form.Label>Category held</Form.Label>
            <Form.Control
              type="text"
              placeholder="Licence Category held"
              onChange={(event) => {
                setlicence_cat(event.target.value);
              }}
            />
          </Form.Group>

          {/* Set user Qualifications */}
          <Form.Group className={Styles.input} controlId="form.qualifications">
            <Form.Label>Qualifications held</Form.Label>
            <Form.Control
              type="text"
              placeholder="Qualifications held"
              onChange={(event) => {
                setqualifications(event.target.value);
              }}
            />
          </Form.Group>

          {/* Set user Penalty Points */}
          <Form.Group className={Styles.input} controlId="form.penalty">
            <Form.Label>Penalty Points</Form.Label>
            <Form.Control
              type="text"
              placeholder="Penalty points"
              onChange={(event) => {
                setpenalty_points(event.target.value);
              }}
            />
          </Form.Group>

          {/* Set user Experience */}
          <Form.Group className={Styles.input} controlId="form.experience">
            <Form.Label>Your experience</Form.Label>
            <Form.Control
              type="text"
              placeholder="Your experience"
              onChange={(event) => {
                setexperience_years(event.target.value);
              }}
            />
          </Form.Group>

          {/* Set user Work Type */}
          <Form.Group className={Styles.input} controlId="form.work">
            <Form.Label>What work type youre looking for?</Form.Label>
            <Form.Control
              type="text"
              placeholder="Choose work type"
              onChange={(event) => {
                setwork_type(event.target.value);
              }}
            />
          </Form.Group>

          {/* Set user Availability */}
          <Form.Group className={Styles.input} controlId="form.available">
            <Form.Label>Availability</Form.Label>
            <Form.Control
              type="text"
              placeholder="Availability"
              onChange={(event) => {
                setavailable(event.target.value);
              }}
            />
          </Form.Group>

          {/* Submit  */}
          <Form.Group controlId="form.submit">
            <Form.Control
              className={Styles.btn}
              type="submit"
              value="Submit"
              onClick={register}
            />
          </Form.Group>
        </Form>
      </Container>
    </div>
  );
}
export default UserForm;
