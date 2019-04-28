import React from "react";

function FormReviewButtons({
  onAction,
  onCancel,
  formValues,
  initialValues,
  mode
}) {
  const renderButton = () => {
    switch (mode) {
      case "add":
        return (
          <button
            onClick={() => onAction(formValues, initialValues)}
            className="btn btn-outline-success"
          >
            Submit
          </button>
        );
      case "update":
        return (
          <button
            onClick={() => onAction(formValues, initialValues)}
            className="btn btn-outline-success"
          >
            Update
          </button>
        );
      case "delete":
        return (
          <button
            onClick={() => onAction()}
            className="btn btn-outline-success"
          >
            Delete
          </button>
        );
      default:
        return null;
    }
  };

  return (
    <div className="text-center mt-3">
      <button onClick={onCancel} className="btn btn-outline-warning mr-2">
        Back
      </button>
      {renderButton()}
    </div>
  );
}

export default FormReviewButtons;
