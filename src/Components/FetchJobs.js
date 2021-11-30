import React from "react";

import Styles from "../Styles/Jobs.module.css";
import { Accordion, Col, Row, Container } from "react-bootstrap";
import Footer from "./Footer";

export default class FetchJobs extends React.Component {
  state = {
    loading: true,
    jobs: [],
  };

  async componentDidMount() {
    const url = "http://localhost:3001/jobs";
    const response = await fetch(url);
    const data = await response.json();
    this.setState({ jobs: data.result, loading: false });
    console.log("Data came back");
    console.log(data.result[0]);
  }

  render() {
    if (this.state.loading) {
      return <div>Loading...</div>;
    }

    /*   if (!this.state.jobs) {
      return <div>Couldnt find user...</div>;
    } */

    return (
      <div className={Styles.jobs_content}>
        <Container className={Styles.jobs_container}>
          <Row className="mx-5">
            <Col>
              <h2>Recent job posting</h2>
            </Col>
          </Row>
          <Row className="mx-3">
            <Col md={12} sm={12}>
              <div>
                {/* map function that displays all data in State */}
                {this.state.jobs.map((job) => (
                  <div
                    className={Styles.container}
                    key={job.job_location + job.job_description}
                  >
                    <div className={Styles.test}>
                      {/* 1 */}
                      <div>
                        <Accordion>
                          <Accordion.Item eventKey="0">
                            <Accordion.Header>
                              Job posting : {job.company_name} / Post date :{" "}
                              {job.created_date}
                            </Accordion.Header>
                            <Accordion.Body>
                              <p className={Styles.jobs_inline}>Job ID : </p>
                              <p className={Styles.jobs_inline}>{job.id}</p>
                              <hr />
                              <div>
                                <p className={Styles.jobs_inline}>
                                  Job Location :{" "}
                                </p>
                                <p className={Styles.jobs_inline}>
                                  {job.job_location}
                                </p>
                              </div>
                              <hr />

                              <div>
                                <p className={Styles.jobs_inline}>
                                  Company Name :{" "}
                                </p>
                                <p className={Styles.jobs_inline}>
                                  {job.company_name}
                                </p>
                              </div>
                              <hr />
                              <div>
                                <p className={Styles.jobs_inline}>
                                  Job description :{" "}
                                </p>
                                <p className={Styles.jobs_inline}>
                                  {job.job_description}
                                </p>
                              </div>
                              <hr />
                              <div>
                                <p className={Styles.jobs_inline}>
                                  Job Type :{" "}
                                </p>
                                <p className={Styles.jobs_inline}>
                                  {job.job_type}
                                </p>
                              </div>
                              <hr />
                              <div>
                                <p className={Styles.jobs_inline}>
                                  Is available :{" "}
                                </p>
                                <p className={Styles.jobs_inline}>
                                  {job.is_active}
                                </p>
                              </div>
                              <hr />
                              <div>
                                <p className={Styles.jobs_inline}>
                                  Duration :{" "}
                                </p>
                                <p className={Styles.jobs_inline}>
                                  {job.duration}
                                </p>
                              </div>
                              <hr />
                              <div>
                                <p className={Styles.jobs_inline}>
                                  Vehicle available :{" "}
                                </p>
                                <p className={Styles.jobs_inline}>
                                  {job.plant_vehicle}
                                </p>
                              </div>
                              <hr />
                              <div>
                                <p className={Styles.jobs_inline}>
                                  Pay rate $:{" "}
                                </p>

                                <p className={Styles.jobs_inline}>{job.rate}</p>
                              </div>
                              <hr />
                              <div>
                                <p className={Styles.jobs_inline}>
                                  Job created :{" "}
                                </p>
                                <p className={Styles.jobs_inline}>
                                  {job.created_date}
                                </p>
                              </div>

                              <button class="btn btn-success my-2 mx-1">
                                Select
                              </button>
                              {/* <button class="btn btn-danger my-2 mx-1">Delete</button> */}
                            </Accordion.Body>
                          </Accordion.Item>
                        </Accordion>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </Col>
          </Row>
        </Container>
        <Footer />
      </div>
    );
  }
}
