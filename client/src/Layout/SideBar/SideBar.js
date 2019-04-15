import React from "react";
import { Link } from "react-router-dom";

import "./SideBar.css";

export const SideBar = () => {
  return (
    <div className="row border-right border-light" id="full-size-sidebar">
      <div className="col mt-3">
        <nav className="nav flex-column">
          <ul className="navbar-nav">
            <li className="nav-item ">
              <Link
                className="nav-link text-dark"
                to="/admin-dashboard/admin-home"
              >
                Home
              </Link>
            </li>
            <span>Questions</span>
            <li className="nav-item sidebar-nav-item">
              <Link
                className="nav-link text-muted"
                to="/admin-dashboard/new-question"
              >
                Add Question
              </Link>
            </li>
            <li className="nav-item sidebar-nav-item">
              <Link
                className="nav-link text-muted"
                to="/admin-dashboard/question-panel"
              >
                Find Questions
              </Link>
            </li>
            <span>Users</span>
            <li className="nav-item sidebar-nav-item">
              <Link
                className="nav-link text-muted"
                to="/admin-dashboard/add-user"
              >
                Add User
              </Link>
            </li>
            <li className="nav-item sidebar-nav-item">
              <Link
                className="nav-link text-muted"
                to="/admin-dashboard/user-panel"
              >
                Find Users
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
};

export default SideBar;
