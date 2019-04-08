import React from "react";
import { reduxForm } from "redux-form";

import User from "../components/User";

const CreateUserForm = props => <User {...props} />;

export const ConnectedCreateUserForm = reduxForm({
  form: "userForm",
  destroyOnUnmount: false,
  enableReinitialize: true
})(CreateUserForm);
