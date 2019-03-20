import React, { Component } from "react";
import { connect } from "react-redux";

import FilterQuestionsPanel from "../questions/FilterQuestions/FilterQuestionsPanel";
import SideBar from "./SideBar";
import QuestionNew from "../questions/AddQuestion/QuestionNew";
import AdminHOme from "./AdminHome";

import { ADD_QUESTION, SHOW_QUESTIONS, ADMIN_HOME } from "./actionTypes";

class AdminDashboard extends Component {
  renderContent() {
    switch (this.props.navAction) {
      case ADD_QUESTION:
        return <QuestionNew />;
      case SHOW_QUESTIONS:
        return <FilterQuestionsPanel />;
      case ADMIN_HOME:
        return <AdminHOme />;
      default:
        return <AdminHOme />;
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
