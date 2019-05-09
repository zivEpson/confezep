import React from "react";

import ModalRoot from "../../utils/modal/components/ModalRoot";
import QuestionBody from "./QuestionDisplay";
import FormReviewButtons from "../../utils/FormUtils/FormReviewButtons";

export const QuestionFormReview = ({
  submitMethod,
  formValues,
  initialValues,
  onReturn,
  onCancel,
  mode
}) => {
  return (
    <div>
      <QuestionBody formValues={formValues} />
      <FormReviewButtons
        onAction={submitMethod}
        onCancel={onCancel}
        formValues={formValues}
        initialValues={initialValues}
        mode={mode}
        onReturn={onReturn}
      />
      <ModalRoot />
    </div>
  );
};

export default QuestionFormReview;
