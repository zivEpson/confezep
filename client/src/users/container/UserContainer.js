import React, { Component } from "react";

import { ConnectedCreateUserForm } from "../redux-form/ReduxConnectedUser";

class UserContainer extends Component {
  render() {
    return (
      <div>
        <ConnectedCreateUserForm />
      </div>
    );
  }
}

export default UserContainer;
