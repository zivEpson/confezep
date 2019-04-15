import React from "react";
import { Field } from "redux-form";

import FormFieldByType from "../../utils/FromUtils/FormFieldByType";

const RenderCodeBlock = ({
  name,
  label,
  placeHolder,
  type,
  isViewMode,
  fields,
  selectOptions,
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
          onClick={() => fields.push()}
        >
          <i className="fas fa-plus" />
        </button>
        <button
          className="btn btn-outline-secondary"
          type="button"
          onClick={() => fields.pop()}
        >
          <i className="far fa-trash-alt" />
        </button>
      </div>

      {fields.map((hints, index) => (
        <div key={index}>
          <Field
            component={FormFieldByType}
            type={type}
            name={hints}
            placeHolder={placeHolder}
            isViewMode={isViewMode}
            selectOptions={selectOptions}
          />
        </div>
      ))}
      {error && <li className="error">{error}</li>}
    </div>
  );
};

export default RenderCodeBlock;
