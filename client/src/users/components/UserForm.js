//@flow
import React from "react";

import { renderFormFields } from "../../utils/FormUtils/RenderFormUtils";
import FormFields from "../constants/FormFields";
import FormButtons from "../../utils/FormUtils/FormButtons";

/**
 * @file Display component for Create/Update/View User.
 * @module UserForm
 */

type Props = {
  //redux-form - handles the form's submission.
  handleSubmit: Function,
  // switch to review user
  onSubmit: Function,
  //Router - history.goBack
  onCancel: Function,
  //the current flow mode - create/update/view
  mode: String
};

const UserForm = (props: Props) => {
  const { handleSubmit, onSubmit, onCancel, mode } = props;

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
