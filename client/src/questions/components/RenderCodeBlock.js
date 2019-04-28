import React from "react";
import { Field } from "redux-form";

import FormFieldByType from "../../utils/FormUtils/FormFieldByType";

const RenderCodeBlock = ({
  label,
  placeHolder,
  type,
  disabled,
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
          className="btn btn-link"
          type="button"
          onClick={() => fields.push()}
        >
          <i className="fas fa-plus" />
        </button>
        <button
          className="btn btn-link"
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
            disabled={disabled}
            selectOptions={selectOptions}
          />
        </div>
      ))}
      {error && <li className="error">{error}</li>}
    </div>
  );
};

export default RenderCodeBlock;
