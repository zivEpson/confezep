import React from "react";
import { connect } from "react-redux";

import QuestionFromReview from "../components/QuestionFormReview";

export const QuestionFormReviewContainer = ({ submitQuestion, formValues }) => {
  return (
    <div>
      <QuestionFromReview
        formValues={formValues}
        submitQuestion={submitQuestion}
      />
    </div>
  );
};

// map state from the reducer to this component props
function mapStateToProps(state) {
  return { formValues: state.form.questionForm.values };
}

export default connect(
  mapStateToProps,
  null
)(QuestionFormReviewContainer);
