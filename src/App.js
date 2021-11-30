import React from "react";

import "./App.css";
// Import Bootstrap
import "bootstrap/dist/css/bootstrap.min.css";
// Import Header Component
import { Header } from "./Components/Header";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

import { Employees } from "./Components/Employees";
import { Employers } from "./Components/Employers";
import { Home } from "./Components/Home";
import LoginForm from "./Components/LoginForm";
import Jobs from "./Components/Jobs";
import FetchJobs from "./Components/FetchJobs";

//Import testing Profile page that is protected
import Profile from "./Components/Pofile";

function App() {
  return (
    <Router>
      <div className="App">
        {/* Render Header component */}
        <Header></Header>
        {/* Add Switch for navigation */}
        <Switch>
          <Route path="/Home" component={Home} exact></Route>
          <Route path="/Login" component={LoginForm} exact></Route>
          <Route path="/Jobs" component={Jobs} exact></Route>
          <Route path="/Jobs2" component={FetchJobs} exact></Route>

          <Route path="/Employees" component={Employees} exact />
          <Route path="/Employers" component={Employers} exact />
          <Route
            path="/Profile"
            component={() => <Profile authorized={false} />}
            exact
          />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
