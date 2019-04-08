import React from "react";
import { Field } from "redux-form";

import RenderField from "./RenderField";

const RenderUsers = ({ fields, meta: { error } }) => {
  return (
    <div>
      <ul>
        <li>
          <button
            className="btn btn-outline-secondary"
            type="button"
            onClick={() => fields.push()}
          >
            Add Hobby
          </button>
        </li>
        {fields.map((hobby, index) => (
          <li key={index}>
            <button
              className="btn btn-outline-secondary"
              type="button"
              title="Remove Hobby"
              onClick={() => fields.remove(index)}
            />
            <Field
              name={hobby}
              type="text"
              component={RenderField}
              label={`Hobby #${index + 1}`}
            />
          </li>
        ))}
        {error && <li className="error">{error}</li>}
      </ul>
    </div>
  );
};

export default RenderUsers;
