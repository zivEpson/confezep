// @flow
import _ from "lodash";
import React from "react";
import { Field } from "redux-form";

import FormFields from "../constants/FormFields";
import FormFieldByType from "../../utils/FormUtils/FormFieldByType";

/**
 * @file Display the question filter panel
 * @module FilterQuestionsForm
 */

type Props = {
  //redux-form - handles the form's submission.
  handleSubmit: Function,
  //questionAction - fetchQuestions by search criteria
  onSubmit: Function
};

export const FilterQuestionsForm = (props: Props) => {
  const { handleSubmit, onSubmit } = props;

  const renderFields = () => {
    return _.map(
      FormFields,
      ({ key, name, displayOnFilter, label, type, selectOptions }) => {
        // There are form fields which shouldn't be displayed on filter panel
        if (displayOnFilter === true) {
          return (
            <div key={key} className="col-3">
              <Field
                //use the component FormFieldByType
                component={FormFieldByType}
                type={type}
                name={name}
                label={label}
                isFilterPanel={true}
                selectOptions={selectOptions}
              />
            </div>
          );
        }
      }
    );
  };

  return (
    <div>
      <form onSubmit={handleSubmit(value => onSubmit(value))}>
        <div className="form-row">{renderFields()}</div>
        <button className="btn btn-light" type="submit">
          Filter
        </button>
      </form>
    </div>
  );
};

export default FilterQuestionsForm;
