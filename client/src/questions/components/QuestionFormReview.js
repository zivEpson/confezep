import React from "react";
import _ from "lodash";

import FormFields from "../constants/FormFields";
import { default as PopUp } from "../../Layout/DataBaseResPopUp/DataBaseResPopUpContainer";
import QuestionBody from "./QuestionBody";

export const QuestionFormReview = ({
  submitQuestion,
  formValues,
  initialValues,
  onReturn,
  onCancel,
  isViewMode
}) => {
  const reviewFields = () => {
    return <QuestionBody formValues={formValues} />;
  };

  const renderPopUp = () => {
    if (!isViewMode) {
      return <PopUp onReturn={onReturn} />;
    }
  };

  return (
    <div>
      <QuestionBody formValues={formValues} />
      <div className="text-center mt-3">
        <button onClick={onCancel} className="btn btn-outline-warning mr-2">
          Cancel
        </button>
        <button
          onClick={() => submitQuestion(formValues, initialValues)}
          className="btn btn-outline-success"
        >
          Submit Question
        </button>
      </div>
      {renderPopUp()}
    </div>
  );
};

export default QuestionFormReview;
