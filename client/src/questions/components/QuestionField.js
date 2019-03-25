import React from "react";

export const QuestionForm = ({
  input,
  label,
  placeHolder,
  meta: { error, touched }
}) => {
  return (
    <div className="form-group">
      <label>{label}</label>
      <input {...input} className="form-control" placeholder={placeHolder} />
      <div className="text-danger ml-1">
        <small>{touched && error}</small>
      </div>
    </div>
  );
};

export default QuestionForm;
