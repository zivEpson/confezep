import React from "react";
import { FieldArray } from "redux-form";

import RenderUsers from "./RenderUsers";

const User = () => {
  return (
    <div>
      <h1>User Component</h1>
      <FieldArray name="users" component={RenderUsers} />
    </div>
  );
};

export default User;
