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
import { Slide } from "./Components/Slide";
import { Cards } from "./Components/Cards";
import { Quote } from "./Components/Quote";

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

          <Route path="/Register" component={Register} exact></Route>
          {/* <Route path="/Login" component={Login} exact></Route> */}
        </Switch>
      </div>
      <Slide />
      <Quote />
      <Cards />
      <Footer />
    </Router>
  );
}

export default App;
