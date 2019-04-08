import React from "react";
import { Field } from "redux-form";

import QuestionField from "./QuestionField";

const RenderHints = ({
  name,
  label,
  placeHolder,
  type,
  isViewMode,
  fields,
  meta: { error }
}) => {
  return (
    <div>
      <div className="btn-group btn-group-sm" role="group">
        <span className="mr-2">{label}</span>
        <button
          label={label}
          className="btn btn-outline-secondary"
          type="button"
          title="Add Hint"
          onClick={() => fields.push()}
        >
          <i className="fas fa-plus" />
        </button>
        <button
          className="btn btn-outline-secondary"
          type="button"
          title="Remove Hint"
          onClick={() => fields.pop()}
        >
          <i className="far fa-trash-alt" />
        </button>
      </div>

      {fields.map((hints, index) => (
        <div key={index}>
          <Field
            component={QuestionField}
            type={type}
            name={hints}
            placeHolder={placeHolder}
            isViewMode={isViewMode}
          />
        </div>
      ))}
      {error && <li className="error">{error}</li>}
    </div>
  );
};

export default RenderHints;
