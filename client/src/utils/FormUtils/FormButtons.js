import React from "react";

const FormButtons = ({ onCancel }) => {
  return (
    <div className="text-center">
      <button
        onClick={onCancel}
        className="btn btn-outline-warning text-center mr-2"
        type="button"
      >
        Cancel
      </button>
      <button className="btn btn-outline-success text-center " type="submit">
        Next
      </button>
    </div>
  );
};

export default FormButtons;
