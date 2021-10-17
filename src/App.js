import React from "react";
import "./App.css";
// Import Bootstrap
import "bootstrap/dist/css/bootstrap.min.css";
// Import Header Component
import { Header } from "./Components/Header";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <div className="App">
        {/* Render Header component */}
        <Header></Header>
        {/* Add Switch for navigation */}
        <Switch>
          <Route path="/" component="" exact></Route>
          <Route path="/About" component="" exact></Route>
          <Route path="/Insert" component="" exact></Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
