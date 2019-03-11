import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import { connect } from "react-redux";
import * as actions from "../../actions";

import "./SideBar.css";
import { ADD_QUESTION, SHOW_QUESTIONS } from "./actionTypes";

class SideBar extends Component {
  render() {
    return (
      <div className="row border-right border-light" id="full-size-sidebar">
        <div className="col mt-3">
          <nav className="nav flex-column">
            <ul className="navbar-nav">
              <span>Questions</span>
              <li className="nav-item sidebar-nav-item">
                <button
                  className="nav-link btn btn-link text-muted"
                  onClick={() => this.props.actionChange(ADD_QUESTION)}
                >
                  Add Question
                </button>
              </li>
              <li className="nav-item sidebar-nav-item">
                <button
                  className="nav-link btn btn-link text-muted"
                  onClick={() => this.props.actionChange(SHOW_QUESTIONS)}
                >
                  Show Questions
                </button>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    );
  }
}

export default connect(
  null,
  actions
)(SideBar);
