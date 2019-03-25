import React from "react";
import _ from "lodash";

import FormFields from "../constants/FormFields";
import DataBaseResPopUpContainer from "../../Layout/DataBaseResPopUp/containers/DataBaseResPopUpContainer";

export const QuestionFormReview = ({ submitQuestion, formValues }) => {
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

  return (
    <div>
      <div className="card">{reviewFields()}</div>
      <button
        onClick={() => submitQuestion(formValues)}
        className="btn btn-outline-success"
      >
        Submit Question
      </button>
      <DataBaseResPopUpContainer />
    </div>
  );
};

export default QuestionFormReview;
