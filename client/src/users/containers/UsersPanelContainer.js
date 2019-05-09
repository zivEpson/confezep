import React, { Component } from "react";
import { connect } from "react-redux";

import { ConnectedFilterUserForm as FilterUserForm } from "../redux-form/ReduxConnectedUser";
import UsersTableList from "../components/UsersTableList";
import { fetchUsers, deleteUser } from "../userAction";

/**
 * This container represent the User panel
 */
class UsersPanelContainer extends Component {
  render() {
    const { fetchUsers, deleteUser, users } = this.props;
    return (
      <div>
        <FilterUserForm onSubmit={fetchUsers} />
        <hr className="mt-5" />
        <UsersTableList users={users} deleteFunc={deleteUser} />
      </div>
    );
  }
}

function mapStateToProps(state) {
  return { users: Array.isArray(state.users) ? state.users : [] };
}

export default connect(
  mapStateToProps,
  { fetchUsers, deleteUser }
)(UsersPanelContainer);
