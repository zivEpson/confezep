import React, { Component } from "react";
import { connect } from "react-redux";

import { ConnectedFilterUserForm } from "../redux-form/ReduxConnectedUser";
import UserList from "../components/UserList";
import { fetchUsers } from "../userAction";

/**
 * This container represent the User panel
 */
class UserPanelContainer extends Component {
  render() {
    return (
      <div>
        <ConnectedFilterUserForm onSubmit={this.props.fetchUsers} />
        <UserList users={this.props.users} />
      </div>
    );
  }
}

function mapStateToProps(state) {
  return { users: state.users };
}

export default connect(
  mapStateToProps,
  { fetchUsers }
)(UserPanelContainer);
