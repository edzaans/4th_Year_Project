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

  const test = [{ name: "test" }, { name: "test2" }];

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
        const jobs = [data];
        /*  console.log(data); */

        console.log(jobs[0].result[0]);
        console.log(jobs[0].result[1]);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  // Test function
  const showAll = (e) => {
    e.preventDefault();
    {
      test.map((el) => <p>{el.name}</p>);
    }
  };

  return (
    <div>
      <Container>
        <h2>Jobs Listing</h2>
        <button onClick={onSubmit}>Load Jobs</button>

        <table class="table table-dark">
          <thead>
            <tr>
              <th scope="col">Location</th>
              <th scope="col">Description</th>
            </tr>
          </thead>
          <tbody></tbody>
        </table>

        {test.map((el) => (
          <p>{el.name}</p>
        ))}
      </Container>
    </div>
  );
}

export default Jobs;
