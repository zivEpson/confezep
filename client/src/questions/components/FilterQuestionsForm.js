import _ from "lodash";
import React from "react";
import { Field } from "redux-form";

import QuestionField from "./QuestionField";
import FormFields from "../constants/FormFields";

/**
 * component which display the question filter panel
 *
 * @param {props} param
 */
export const FilterQuestionsForm = ({ handleSubmit, onSubmit, onClear }) => {
  const renderFields = () => {
    return _.map(FormFields, ({ key, name, displayOnFilter, label, type }) => {
      // There are form fields shouldn't be displayed on filter panel
      if (displayOnFilter === true) {
        return (
          <div key={key} className="col">
            <Field
              component={QuestionField}
              type={type}
              name={name}
              label={label}
              isFilterPanel={true}
            />
          </div>
        );
      }
    });
  };

  return (
    <div>
      <div>
        <form onSubmit={handleSubmit(value => onSubmit(value))}>
          <div className="form-row">{renderFields()}</div>
          <button className="btn btn-light" type="submit">
            Filter
          </button>
        </form>
      </div>
    </div>
  );
};

export default FilterQuestionsForm;
