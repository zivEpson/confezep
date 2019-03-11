import React, { Component } from "react";
import { BrowserRouter, Route } from "react-router-dom";
import { connect } from "react-redux";
import * as actions from "../actions";

import Header from "./Layout/Header";
import Landing from "./Layout/Landing";
import AdminDashboard from "./Layout/AdminDashboard";
import QuestionNew from "./questions/QuestionNew";

class App extends Component {
  componentDidMount() {
    this.props.fetchUser();
  }

  render() {
    return (
      <BrowserRouter>
        <div>
          <Header />
          <div className="container-fluid">
            <Route exact path="/" component={Landing} />
            <Route exact path="/admin-dashboard" component={AdminDashboard} />
            <Route path="/question/new" component={QuestionNew} />
          </div>
        </div>
      </BrowserRouter>
    );
  }
}

export default connect(
  null,
  actions
)(App);
