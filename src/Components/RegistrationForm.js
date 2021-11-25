import React, { useState } from "react";
// Import Axios
import Axios from "axios";
// Import Styles from modules
import Styles from "../Styles/RegistrationForm.module.css";

// Import React Bootstrap
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";

// Set state for all inputs
function UserForm() {
  const [name, setname] = useState("");
  const [lname, setlname] = useState("");
  const [email, setemail] = useState("");
  const [location, setlocation] = useState("");
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

      licence_cat: licence_cat,
      qualifications: qualifications,
      penalty_points: penalty_points,
      experience_years: experience_years,
      work_type: work_type,
      available: available,
    }).then((result) => {
      alert("Posted");
      console.log(result);
    });
    console.log("This came from employee form");
  };

  return (
    <div>
      {/* Container */}
      <Container className={Styles.container}>
        {/* Form starts here */}
        <h2>Employee registration</h2>
        <Form>
          {/* Set user First Name */}
          <div className="row">
            <div className="col-md-6">
              <Form.Group className={Styles.input} controlId="form.name">
                <Form.Label>First name</Form.Label>
                <Form.Control
                  type="text"
                  required
                  placeholder="Your first name"
                  onChange={(event) => {
                    setname(event.target.value);
                  }}
                />
              </Form.Group>
            </div>
            <div className="col-md-6">
              {/* Set user Last Name */}
              <Form.Group className={Styles.input} controlId="form.lname">
                <Form.Label>Last name</Form.Label>
                <Form.Control
                  type="text"
                  required
                  placeholder="Your last name"
                  onChange={(event) => {
                    setlname(event.target.value);
                  }}
                />
              </Form.Group>
            </div>
          </div>

          <div className="row">
            <div className="col-md-6">
              {/* Set user Email */}
              <Form.Group className={Styles.input} controlId="form.email">
                <Form.Label>Email address</Form.Label>
                <Form.Control
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
              {/* Set user Location */}
              <Form.Group className={Styles.input} controlId="form.location">
                <Form.Label>Your location</Form.Label>
                <Form.Control
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
              {/* Set user Licence category */}
              <Form.Group className={Styles.input} controlId="form.licence">
                <Form.Label>Category held</Form.Label>
                <Form.Control
                  type="text"
                  required
                  placeholder="Licence Category held"
                  onChange={(event) => {
                    setlicence_cat(event.target.value);
                  }}
                />
              </Form.Group>
            </div>
            <div className="col-md-6">
              {/* Set user Qualifications */}
              <Form.Group
                className={Styles.input}
                controlId="form.qualifications"
              >
                <Form.Label>Qualifications held</Form.Label>
                <Form.Control
                  type="text"
                  required
                  placeholder="Qualifications held"
                  onChange={(event) => {
                    setqualifications(event.target.value);
                  }}
                />
              </Form.Group>
            </div>
          </div>

          <div className="row">
            <div className="col-md-6">
              {/* Set user Penalty Points */}
              <Form.Group className={Styles.input} controlId="form.penalty">
                <Form.Label>Penalty Points</Form.Label>
                <Form.Control
                  type="text"
                  required
                  placeholder="Penalty points"
                  onChange={(event) => {
                    setpenalty_points(event.target.value);
                  }}
                />
              </Form.Group>
            </div>
            <div className="col-md-6">
              {/* Set user Experience */}
              <Form.Group className={Styles.input} controlId="form.experience">
                <Form.Label>Your experience</Form.Label>
                <Form.Control
                  type="text"
                  required
                  placeholder="Your experience"
                  onChange={(event) => {
                    setexperience_years(event.target.value);
                  }}
                />
              </Form.Group>
            </div>
          </div>

          <div className="row">
            <div className="col-md-6">
              {/* Set user Work Type */}
              <Form.Group className={Styles.input} controlId="form.work">
                <Form.Label>What work type youre looking for?</Form.Label>
                <Form.Control
                  type="text"
                  required
                  placeholder="Choose work type"
                  onChange={(event) => {
                    setwork_type(event.target.value);
                  }}
                />
              </Form.Group>
            </div>
            <div className="col-md-6">
              {" "}
              {/* Set user Availability */}
              <Form.Group className={Styles.input} controlId="form.available">
                <Form.Label>Availability</Form.Label>
                <Form.Control
                  type="text"
                  required
                  placeholder="Availability"
                  onChange={(event) => {
                    setavailable(event.target.value);
                  }}
                />
              </Form.Group>
            </div>
          </div>
          <div className="row">
            <div className="col-md-6 mx-auto mt-3">
              {/* Submit  */}
              <Form.Group controlId="form.submit">
                <Form.Control
                  className={Styles.btn}
                  type="submit"
                  value="Submit"
                  onClick={register}
                />
              </Form.Group>
            </div>
          </div>
        </Form>
      </Container>
    </div>
  );
}
export default UserForm;
