import React, { Component } from "react";
import { reduxForm } from "redux-form";
import { connect } from "react-redux";

import { fetchQuestions } from "../questionAction";
import FilterQuestionsForm from "../components/FilterQuestionsForm";
import { validate } from "../components/Validations";

/**
 * container for the component which display the question filter panel
 */
class FilterQuestionsFormContainer extends Component {
  render() {
    return (
      <FilterQuestionsForm
        handleSubmit={this.props.handleSubmit}
        onSubmit={this.props.fetchQuestions}
      />
    );
  }
}

FilterQuestionsFormContainer = connect(
  null,
  { fetchQuestions }
)(FilterQuestionsFormContainer);

export default reduxForm({
  validate,
  form: "filterQuestionForm"
})(FilterQuestionsFormContainer);
