import React, { Component } from "react";
import { connect } from "react-redux";

import { ConnectedFilterUserForm as FilterUserForm } from "../redux-form/ReduxConnectedUser";
import UsersTableList from "../components/UsersTableList";
import { fetchUsers } from "../userAction";

/**
 * This container represent the User panel
 */
class UsersPanelContainer extends Component {
  render() {
    return (
      <div>
        <FilterUserForm onSubmit={this.props.fetchUsers} />
        <hr className="mt-5" />
        <UsersTableList users={this.props.users} />
      </div>
    );
  }
}

function mapStateToProps(state) {
  return { users: Array.isArray(state.users) ? state.users : [] };
}

export default connect(
  mapStateToProps,
  { fetchUsers }
)(UsersPanelContainer);
