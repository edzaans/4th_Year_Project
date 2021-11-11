import React, { useState, useEffect } from "react";
import Axios from "axios";

import Styles from "../Styles/Form.module.css";

function Form() {
  const [name, setname] = useState("");
  const [lname, setlname] = useState("");
  const [email, setemail] = useState("");

  const register = () => {
    Axios.post("http://localhost:3001/register", {
      name: name,
      lname: lname,
      email: email,
    }).then((response) => {
      console.log(response);
    });
  };

  return (
    <div className={Styles.container}>
      <h1>Register</h1>
      <p>Please fill in this form to create an account.</p>

      <label for="name">Name</label>
      <input
        className={Styles.input}
        type="text"
        placeholder="Enter name"
        name="name"
        required
        onChange={(event) => {
          setname(event.target.value);
        }}
      />

      <label for="lname">Last Name</label>
      <input
        className={Styles.input}
        type="text"
        placeholder="Enter last name"
        name="lname"
        required
        onChange={(event) => {
          setlname(event.target.value);
        }}
      />

      <label for="email">Email</label>
      <input
        className={Styles.input}
        type="email"
        placeholder="Email"
        name="email"
        required
        onChange={(event) => {
          setemail(event.target.value);
        }}
      />

      <button className={Styles.btn} type="submit" onClick={register}>
        Register
      </button>
    </div>
  );
}
export default Form;
