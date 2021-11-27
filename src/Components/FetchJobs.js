import React from "react";
import Styles from "../Styles/Jobs.module.css";

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
      return <div>loading...</div>;
    }

    if (!this.state.jobs.length) {
      return <div>didn't get a person</div>;
    }

    return (
      <div>
        <div>
          {this.state.jobs.map((job) => (
            <div key={job.job_location + job.job_description}>
              <div className={Styles.test}>
                <h2>{job.job_location}</h2>
                <p className={Styles.p1}>{job.job_description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  }
}
