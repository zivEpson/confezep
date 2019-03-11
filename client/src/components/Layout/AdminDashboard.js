import React, { Component } from "react";
import { connect } from "react-redux";

import QuestionList from "../questions/QuestionList";
import SideBar from "./SideBar";
import QuestionNew from "../questions/QuestionNew";

import { ADD_QUESTION, SHOW_QUESTIONS } from "./actionTypes";

class AdminDashboard extends Component {
  renderContent() {
    switch (this.props.navAction) {
      case ADD_QUESTION:
        return <QuestionNew />;
      case SHOW_QUESTIONS:
        return <QuestionList />;
      default:
        return;
    }
  }

  render() {
    return (
      <div className="container-fluid">
        <div className="row">
          <div className="col-2">
            <SideBar />
          </div>
          <div className="col">{this.renderContent()}</div>
        </div>
      </div>
    );
  }
}

function mapStateToProps(state) {
  //state from the reducer
  return { navAction: state.navAction };
}

export default connect(mapStateToProps)(AdminDashboard);
