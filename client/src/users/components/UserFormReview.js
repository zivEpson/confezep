import React from "react";

import FormReviewButtons from "../../utils/FormUtils/FormReviewButtons";

const UserFormReview = ({
  submitMethod,
  onCancel,
  formValues,
  initialValues,
  mode
}) => {
  return (
    <div>
      <h6>User Fields will be displayed</h6>
      <FormReviewButtons
        onAction={submitMethod}
        onCancel={onCancel}
        formValues={formValues}
        initialValues={initialValues}
        mode={mode}
      />
    </div>
  );
};

export default UserFormReview;
