import React from "react";

export const QuestionField = ({
  input,
  label,
  placeHolder,
  type,
  isViewMode,
  isFilterPanel,
  meta: { error, touched }
}) => {
  const renderQuestionType = () => {
    if (type === "text") {
      return (
        <input
          {...input}
          disabled={isViewMode}
          className={"form-control" + (isFilterPanel ? " ml-2" : "")}
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
