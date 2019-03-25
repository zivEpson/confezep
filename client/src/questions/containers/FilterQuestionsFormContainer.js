import React, { Component } from "react";
import { reduxForm } from "redux-form";
import { connect } from "react-redux";

import { fetchQuestions } from "../questionAction";
import FilterQuestionsForm from "../components/FilterQuestionsForm";

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

function validate(values) {
  const errors = {};
  return errors;
}

export default reduxForm({
  validate,
  form: "questionForm"
})(FilterQuestionsFormContainer);
