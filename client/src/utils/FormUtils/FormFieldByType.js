import React from "react";

import RFReactSelect from "./RFReactSelect";

/**
 * Return Field type
 * @param {*} param
 */
export const FormFieldByType = ({
  input,
  label,
  placeHolder,
  type,
  disabled,
  selectOptions,
  meta: { error, touched }
}) => {
  const renderQuestionType = () => {
    if (type === "text") {
      return (
        <input
          {...input}
          disabled={disabled}
          className={"form-control"}
          placeholder={placeHolder}
        />
      );
    } else if (type === "textarea") {
      return (
        <textarea
          {...input}
          disabled={disabled}
          className="form-control"
          placeholder={placeHolder}
        />
      );
    } else if (type === "select") {
      return (
        <RFReactSelect
          input={input}
          options={selectOptions}
          isDisabled={disabled}
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

export default FormFieldByType;
