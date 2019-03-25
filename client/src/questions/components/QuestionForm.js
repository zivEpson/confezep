import _ from "lodash";
import React from "react";
import { Field } from "redux-form";
import { Link } from "react-router-dom";

import QuestionField from "./QuestionField";
import FormFields from "../constants/FormFields";

export const QuestionForm = ({ handleSubmit, onSubmit }) => {
  const renderFields = () => {
    return _.map(FormFields, ({ key, label, name, placeHolder }) => {
      return (
        <Field
          key={key}
          component={QuestionField}
          type="text"
          name={name}
          placeHolder={placeHolder}
          label={label}
        />
      );
    });
  };

  return (
    <div>
      <form onSubmit={handleSubmit(onSubmit)}>
        {renderFields()}
        <div className="text-center">
          <Link
            className="btn btn-outline-warning text-center"
            to="/admin-dashboard"
          >
            Cancel
          </Link>
          <button className="btn btn-outline-success text-center" type="submit">
            Next
          </button>
        </div>
      </form>
    </div>
  );
};

export default QuestionForm;
