import React from "react";

import "./App.css";
// Import Bootstrap
import "bootstrap/dist/css/bootstrap.min.css";
// Import Header Component
import { Header } from "./Components/Header";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
// Import Footer and FooterStyles Components
import Footer from "./Components/Footer";
// Import Register
import { Register } from "./Components/Register";

import { Employees } from "./Components/Employees";
import { Employers } from "./Components/Employers";
import { Home } from "./Components/Home";

function App() {
  return (
    <Router>
      <div className="App">
        {/* Render Header component */}
        <Header></Header>
        {/* Add Switch for navigation */}
        <Switch>
          <Route path="/Home" component={Home} exact></Route>
          <Route path="/About" component="" exact></Route>

          <Route path="/Register" component={Register} exact></Route>
          <Route path="/Employees" component={Employees} exact />
          <Route path="/Employers" component={Employers} exact />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
