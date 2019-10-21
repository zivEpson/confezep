//@flow
import React from "react";
import { Link } from "react-router-dom";

import "../SideBar/SideBar.css";

/**
 * @file Component which represent the user side bar
 * @module UserSideBar
 */

export const UserSideBar = () => {
  return (
    <div className="row border-right border-light" id="full-size-sidebar">
      <div className="col mt-3">
        <nav className="nav flex-column">
          <ul className="navbar-nav">
            <li className="nav-item sidebar-nav-item">
              <Link
                className="nav-link text-muted"
                to="/user-dashboard/user-home"
              >
                Home
              </Link>
              <Link
                className="nav-link text-muted"
                to="/user-dashboard/course-panel"
              >
                Course
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
};

export default UserSideBar;
