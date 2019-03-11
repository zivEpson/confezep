import React from "react";

export default ({ input, label, placeHolder, meta: { error, touched } }) => {
  return (
    <div className="form-group">
      <label>{label}</label>
      <input {...input} className="form-control" placeholder={placeHolder} />
      <div className="text-danger ml-1">
        <small>{touched && error}</small>
      </div>
    </div>
  );
};
