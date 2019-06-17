//@flow
import React from "react";

import FormFields from "../constants/FormFields";
import { renderFormFields } from "../../utils/FormUtils/RenderFormUtils";
import FormButtons from "../../utils/FormUtils/FormButtons";

/**
 * @file Display component for Create/Update/View Course.
 * @module CourseForm
 */

type Props = {
  //redux-form - handles the form's submission.
  handleSubmit: Function,
  //
  onSubmit: Function,
  //Router - history.goBack
  onCancel: Function,
  //the current flow mode - create/update/view
  mode: String
};

const CourseForm = (props: Props) => {
  const { handleSubmit, onSubmit, onCancel, mode } = props;
  return (
    <div>
      <form onSubmit={handleSubmit(onSubmit)}>
        {renderFormFields(FormFields, null, mode)}
        <FormButtons onCancel={onCancel} />
      </form>
    </div>
  );
};

export default CourseForm;
