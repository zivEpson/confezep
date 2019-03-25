import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { connect } from "react-redux";

import { fetchUser } from "./users/userAction";
import Routes from "./Routes";

class App extends Component {
  componentDidMount() {
    this.props.fetchUser();
  }

  render() {
    return (
      <Router>
        <Routes location={this.props.location} />
      </Router>
    );
  }
}

export default connect(
  null,
  { fetchUser }
)(App);
