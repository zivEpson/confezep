import React from "react";

import RFReactSelect from "../../utils/FromUtils/RFReactSelect";
import { questionsTypes } from "../constants/QuestionTypes";

export const QuestionField = ({
  input,
  label,
  placeHolder,
  type,
  isViewMode,
  meta: { error, touched }
}) => {
  const renderQuestionType = () => {
    if (type === "text") {
      return (
        <input
          {...input}
          disabled={isViewMode}
          className={"form-control"}
          placeholder={placeHolder}
        />
      );
    } else if (type === "textarea") {
      return (
        <textarea
          {...input}
          disabled={isViewMode}
          className="form-control"
          placeholder={placeHolder}
        />
      );
    } else if (type === "select") {
      return <RFReactSelect input={input} options={questionsTypes} />;
    }
  };

  return (
    <div className="form-group">
      <label>{label}</label>
      {renderQuestionType()}
      <div className="text-danger ml-1">
        <small>{touched && error}</small>
      </div>
    </div>
  );
};

export default QuestionField;
