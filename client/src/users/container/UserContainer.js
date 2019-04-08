import React, { Component } from "react";

import { ConnectedCreateUserForm } from "./ReduxConnectedUser";

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
