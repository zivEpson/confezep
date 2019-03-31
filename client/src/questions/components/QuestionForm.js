import _ from "lodash";
import React from "react";
import { Field } from "redux-form";
import { Link } from "react-router-dom";

import QuestionField from "./QuestionField";
import FormFields from "../constants/FormFields";

const QuestionForm = ({
  handleSubmit,
  onSubmit,
  isViewMode,
  submitting,
  onCancel
}) => {
  const renderFields = () => {
    return _.map(FormFields, ({ key, label, type, name, placeHolder }) => {
      return (
        <Field
          key={key}
          component={QuestionField}
          type={type}
          name={name}
          placeHolder={placeHolder}
          label={label}
          isViewMode={isViewMode}
        />
      );
    });
  };

  return (
    <div>
      <form onSubmit={handleSubmit(onSubmit)}>
        {renderFields()}
        <div className="text-center">
          <button
            onClick={onCancel}
            className="btn btn-outline-warning text-center mr-2"
            type="button"
          >
            Cancel
          </button>
          <button
            disabled={submitting}
            className="btn btn-outline-success text-center "
            type="submit"
          >
            Next
          </button>
        </div>
      </form>
    </div>
  );
};

export default QuestionForm;
