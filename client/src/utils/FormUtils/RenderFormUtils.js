import _ from "lodash";
import React from "react";
import { Field, FieldArray } from "redux-form";

import FormFieldByType from "./FormFieldByType";

export const renderFormFields = (FormFields, FieldArrayMap, mode) => {
  const isDisabled = isDisabledFields(mode);
  return _.map(
    FormFields,
    ({ key, label, type, name, placeHolder, isArrayField, selectOptions }) => {
      if (isArrayField) {
        return (
          <FieldArray
            key={key}
            name={name}
            type={type}
            placeHolder={placeHolder}
            label={label}
            disabled={isDisabled}
            selectOptions={selectOptions}
            component={FieldArrayMap[name]}
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
            disabled={isDisabled}
            selectOptions={selectOptions}
          />
        );
      }
    }
  );
};

const isDisabledFields = mode => {
  switch (mode) {
    case "add":
      return false;
    case "update":
      return false;
    case "delete":
      return true;
    case "view":
      return true;
    default:
      return true;
  }
};
