import React, { Component } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";

class Header extends Component {
  renderContent() {
    switch (this.props.auth) {
      case null:
        return;
      case false:
        return (
          <li className="nav-item">
            <a href="/auth/google" className="nav-link">
              Login With Google
            </a>
          </li>
        );
      default:
        return (
          <li className="nav-item">
            <a href="/api/logout" className="nav-link">
              Logout
            </a>
          </li>
        );
    }
  }

  render() {
    return (
      <nav className="navbar navbar-expand navbar-light bg-light mb-3">
        <div className="container">
          <Link
            to={this.props.auth ? "/surveys" : "/"}
            className="navbar-brand"
          >
            CONFEZEP
          </Link>
          <button
            className="navbar-toggler"
            data-toggle="collapse"
            data-target="#navbarNav"
          >
            <span className="navbar-toggler-icon" />
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav ml-auto">{this.renderContent()}</ul>
          </div>
        </div>
      </nav>
    );
  }
}

function mapStateToProps({ auth }) {
  return { auth };
}

export default connect(mapStateToProps)(Header);