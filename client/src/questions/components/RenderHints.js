// @flow
/**
 * @module RenderHints
 *  */
import React from "react";
import { Field } from "redux-form";

import FormFieldByType from "../../utils/FormUtils/FormFieldByType";

type Props = {
  label: any,
  placeHolder: any,
  type: any,
  disabled: Boolean,
  fields: any,
  selectOptions: any,
  meta: any
};

const RenderHints = (props: Props) => {
  const {
    label,
    placeHolder,
    type,
    disabled,
    fields,
    selectOptions,
    meta: { error }
  } = props;

  return (
    <div>
      <div className="btn-group btn-group-sm" role="group">
        <span className="mr-2">{label}</span>
        <button
          label={label}
          className="btn btn-link"
          type="button"
          title="Add Hint"
          onClick={() => fields.push()}
        >
          <i className="fas fa-plus" />
        </button>
        <button
          className="btn btn-link"
          type="button"
          title="Remove Hint"
          onClick={() => fields.pop()}
        >
          <i className="far fa-trash-alt" />
        </button>
      </div>

      {fields.map((hints, index) => (
        <div key={index}>
          <div className="input-group mb-3">
            <div className="input-group-prepend">
              <label className="input-group-text" htmlFor="inputGroupSelect01">
                Field Type
              </label>
              <select className="custom-select" id="inputGroupSelect01">
                <option defaultValue>Choose...</option>
                <option value="1">text</option>
                <option value="2">textarea</option>
              </select>
            </div>
            <div className="input-group-prepend">
              <label className="input-group-text" htmlFor="inputGroupSelect01">
                Is Hidden?
              </label>
              <select className="custom-select" id="inputGroupSelect01">
                <option defaultValue>Choose...</option>
                <option value="1">yes</option>
                <option value="2">no</option>
              </select>
            </div>
            <div className="input-group-prepend">
              <button
                className="btn btn-outline-secondary"
                type="button"
                id="button-addon1"
              >
                Set
              </button>
            </div>
          </div>
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

export default RenderHints;
