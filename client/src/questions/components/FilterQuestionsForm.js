import _ from "lodash";
import React from "react";
import { Field } from "redux-form";

import QuestionField from "./QuestionField";
import FormFields from "../constants/FormFields";
import { required } from "./Validations";

/**
 * component which display the question filter panel
 *
 * @param {props} param
 */
export const FilterQuestionsForm = ({ handleSubmit, onSubmit }) => {
  const renderFields = () => {
    return _.map(FormFields, ({ key, name, displayOnFilter, label, type }) => {
      // There are form fields shouldn't be displayed on filter panel
      if (displayOnFilter === true) {
        return (
          <Field
            key={key}
            component={QuestionField}
            type={type}
            name={name}
            label={label}
            isFilterPanel={true}
          />
        );
      }
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
