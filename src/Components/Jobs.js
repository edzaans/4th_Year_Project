// Import React and useState
import React, { useState } from "react";
//Import Styles module
import Styles from "../Styles/Jobs.module.css";
// Import BS Components
import { Container } from "react-bootstrap";
// Import Axios
import Axios from "axios";

function Jobs() {
  // Set JOBS state
  const [jobs, setjobs] = useState({ location: "", description: "" });

  // On submit when button is pressed
  const onSubmit = (e) => {
    e.preventDefault();

    Axios.get("http://localhost:3001/jobs")

      .then(({ data }) => {
        // Set Jobs state with data returned from server
        setjobs({
          location: data.location,
          description: data.description,
        });

        console.log(data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div>
      <Container>
        <h2>Jobs Listing</h2>
        <button onClick={onSubmit}>All jobs</button>

        <table class="table table-dark">
          <thead>
            <tr>
              <th scope="col">Location</th>
              <th scope="col">Description</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>{jobs.location}</td>
              <td>{jobs.description}</td>
            </tr>
          </tbody>
        </table>
      </Container>
    </div>
  );
}

export default Jobs;
