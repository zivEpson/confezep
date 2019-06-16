// @flow
import React from "react";

import FormFields, { FieldArrayMap } from "../constants/FormFields";
import { renderFormFields } from "../../utils/FormUtils/RenderFormUtils";
import FormButtons from "../../utils/FormUtils/FormButtons";

/**
 * @file Display component for Create/Update/View Question.
 * @module QuestionForm
 */

type Props = {
  //redux-form - handles the form's submission.
  handleSubmit: Function,
  // switch to review question
  onSubmit: Function,
  //Router - history.goBack
  onCancel: Function,
  //the current flow mode - create/update/view
  mode: String
};

const QuestionForm = (props: Props) => {
  const { handleSubmit, onSubmit, onCancel, mode } = props;
  return (
    <div>
      <form onSubmit={handleSubmit(onSubmit)}>
        {renderFormFields(FormFields, FieldArrayMap, mode)}
        <FormButtons onCancel={onCancel} />
      </form>
    </div>
  );
};

export default QuestionForm;
