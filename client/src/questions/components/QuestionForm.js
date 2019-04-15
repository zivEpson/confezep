import _ from "lodash";
import React from "react";
import { Field, FieldArray } from "redux-form";

import FormFields from "../constants/FormFields";
import RenderHints from "./RenderHints";
import RenderCodeBlock from "./RenderCodeBlock";
import FormFieldByType from "../../utils/FromUtils/FormFieldByType";

const QuestionForm = ({
  handleSubmit,
  onSubmit,
  isViewMode,
  submitting,
  onCancel
}) => {
  const renderFields = () => {
    return _.map(
      FormFields,
      ({
        key,
        label,
        type,
        name,
        placeHolder,
        isArrayField,
        selectOptions
      }) => {
        if (isArrayField) {
          return (
            <FieldArray
              key={key}
              name={name}
              type={type}
              placeHolder={placeHolder}
              label={label}
              selectOptions={selectOptions}
              component={name === "hints" ? RenderHints : RenderCodeBlock}
            />
          );
        } else {
          return (
            <Field
              key={key}
              component={FormFieldByType}
              type={type}
              name={name}
              placeHolder={placeHolder}
              label={label}
              isViewMode={isViewMode}
              selectOptions={selectOptions}
            />
          );
        }
      }
    );
  };

  return (
    <div>
      <form onSubmit={handleSubmit(onSubmit)}>
        {renderFields()}
        <div className="text-center">
          <button
            onClick={onCancel}
            className="btn btn-outline-warning text-center mr-2"
            type="button"
          >
            Cancel
          </button>
          <button
            disabled={submitting}
            className="btn btn-outline-success text-center "
            type="submit"
          >
            Next
          </button>
        </div>
      </form>
    </div>
  );
};

export default QuestionForm;
