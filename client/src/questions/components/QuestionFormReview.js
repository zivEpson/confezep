import React from "react";
import _ from "lodash";

import FormFields from "../constants/FormFields";
import DataBaseResPopUpContainer from "../../Layout/DataBaseResPopUp/DataBaseResPopUpContainer";

export const QuestionFormReview = ({
  submitQuestion,
  formValues,
  onReturn,
  onCancel,
  isViewMode
}) => {
  const reviewFields = () => {
    return _.map(FormFields, ({ name, label }) => {
      return (
        <div className="card-body" key={name}>
          <h5 className="card-title">{label}</h5>
          <div> {formValues[name]}</div>
        </div>
      );
    });
  };

  const renderPopUp = () => {
    if (!isViewMode) {
      return <DataBaseResPopUpContainer onReturn={onReturn} />;
    }
  };

  return (
    <div>
      <div className="card">{reviewFields()}</div>
      <div className="text-center mt-3">
        <button onClick={onCancel} className="btn btn-outline-warning mr-2">
          Cancel
        </button>
        <button
          onClick={() => submitQuestion(formValues)}
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
