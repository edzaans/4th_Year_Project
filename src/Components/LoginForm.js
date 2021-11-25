import React, { useState } from "react";
// Import Axios
import Axios from "axios";
import Styles from "../Styles/Login.module.css";
import { Form, Container } from "react-bootstrap";

function LoginForm() {
  // Set state for login details
  const [body, setbody] = useState({ username: "", email: "" });
  // Set message to server response
  const [loginStatus, setloginStatus] = useState({
    greeting: "",
    user: "",
  });

  // Set body sate with values entered in form
  const inputChange = ({ target }) => {
    const { name, value } = target;
    setbody({ ...body, [name]: value });
  };

  // Main SUBMIT function (preventDefault is SUPER IMPORTANT!!!!!!!!)
  const onSubmit = (e) => {
    e.preventDefault();
    console.log(body);

    // Axios HTTP request
    Axios.post("http://localhost:3001/login", body)
      .then(({ data }) => {
        // Check if data returned has value, display value
        if (data.name) {
          setloginStatus({ greeting: "Welcome ", user: data.name });
          console.log(data.name);
          // If data returned empty, set state with error
        } else {
          setloginStatus({ greeting: "Incorrect credentials", user: "" });
        }
      })
      .catch(({ response }) => {
        console.log(response.data);
      });
  };

  return (
    <div>
      {/* Container */}
      <Container className={Styles.container}>
        {/* Form starts here */}
        <h2>{loginStatus.greeting + " " + loginStatus.user}</h2>
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
                  value={body.username}
                  onChange={inputChange}
                  name="username"
                />
              </Form.Group>
            </div>

            <div className="col-md-6">
              {/* Set user Email */}
              <Form.Group className={Styles.input} controlId="form.email">
                <Form.Label>Email address</Form.Label>
                <Form.Control
                  type="email"
                  required
                  placeholder="name@example.com"
                  value={body.email}
                  onChange={inputChange}
                  name="email"
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
                  onClick={onSubmit}
                />
              </Form.Group>
            </div>
          </div>
        </Form>
      </Container>
    </div>
  );
}
export default LoginForm;
