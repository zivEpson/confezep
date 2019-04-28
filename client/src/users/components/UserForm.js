import React from "react";

import { renderFormFields } from "../../utils/FormUtils/RenderFormUtils";
import FormFields from "../constants/FormFields";
import FormButtons from "../../utils/FormUtils/FormButtons";
/**
 * This component is to add a new User in the system
 */
const UserForm = props => {
  return (
    <div>
      <form onSubmit={props.handleSubmit(() => props.onSubmit())}>
        {renderFormFields(FormFields, null, props.mode)}
        <FormButtons onCancel={props.onCancel} />
      </form>
    </div>
  );
};

export default UserForm;
