import _ from "lodash";
import React from "react";
import { Field } from "redux-form";

import FormFields from "../constants/FormFields";
import FormFieldByType from "../../utils/FormUtils/FormFieldByType";

/**
 * Search panel for users
 */
function FilterUsersForm({ handleSubmit, onSubmit }) {
  const renderFields = () => {
    return _.map(FormFields, ({ key, name, displayOnFilter, label, type }) => {
      if (displayOnFilter === true) {
        return (
          <div key={key} className="col-3">
            <Field
              component={FormFieldByType}
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
      <form onSubmit={handleSubmit(value => onSubmit(value))}>
        <div className="form-row">{renderFields()}</div>
        <button className="btn btn-light" type="submit">
          Filter
        </button>
      </form>
    </div>
  );
}

export default FilterUsersForm;
