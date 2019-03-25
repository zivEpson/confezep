import React from "react";
import { Field } from "redux-form";
import _ from "lodash";
import QuestionField from "./QuestionField";
import FormFields from "../constants/FormFields";

export const FilterQuestionsForm = ({ handleSubmit, onSubmit }) => {
  const renderFields = () => {
    return _.map(FormFields, ({ key, name, label, placeHolder }) => {
      return (
        <Field
          key={key}
          component={QuestionField}
          type="text"
          name={name}
          label={name}
        />
      );
    });
  };

  return (
    <div>
      <div>
        <form
          className="form-inline"
          onSubmit={handleSubmit(value => onSubmit(value))}
        >
          {renderFields()}
          <button className="btn btn-light" type="submit">
            Filter
          </button>
        </form>
      </div>
    </div>
  );
};

export default FilterQuestionsForm;
