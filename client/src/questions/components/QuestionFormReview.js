import React from "react";

import { default as PopUp } from "../../Layout/DataBaseResPopUp/DataBaseResPopUpContainer";
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
  const renderPopUp = () => {
    // if (!isViewMode) {
    return <PopUp onReturn={onReturn} />;
    // }
  };

  return (
    <div>
      <QuestionBody formValues={formValues} />
      <FormReviewButtons
        onAction={submitMethod}
        onCancel={onCancel}
        formValues={formValues}
        initialValues={initialValues}
        mode={mode}
      />
      {renderPopUp()}
    </div>
  );
};

export default QuestionFormReview;
