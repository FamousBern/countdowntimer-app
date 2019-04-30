import React, { Component } from "react";
import data from "./data/images";
import Nav from "./components/Nav";
import Home from "./components/Home";

import { BrowserRouter as Router, Route } from "react-router-dom";
import ContactMe from "./components/ContactMe";

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      properties: data
    };
  }

  render() {
    return (
      <Router>
        <div>
          <Nav />
          <div className="container">
            <Route exact path="/" component={Home} />

            <Route path="/contactme" component={ContactMe} />

            <p>
              <i className="fab fa-linkedin-in" />{" "}
              <i className="fab fa-twitter" /> <i className="fab fa-github" />
            </p>
          </div>
        </div>
      </Router>
    );
  }
}

export default App;
