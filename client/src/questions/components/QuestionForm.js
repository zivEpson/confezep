import React from "react";

import FormFields, { FieldArrayMap } from "../constants/FormFields";
import { renderFormFields } from "../../utils/FormUtils/RenderFormUtils";
import FormButtons from "../../utils/FormUtils/FormButtons";

const QuestionForm = ({ handleSubmit, onSubmit, onCancel, mode }) => {
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
