import React, { Component } from "react";
import { connect } from "react-redux";
import queryString from "query-string";

import { ConnectedCreateQuestionForm } from "../redux-form/ReduxConnectedQuestion";
import { submitQuestion, getQuestion, resetQuestions } from "../questionAction";
import { isEmpty } from "../../utils/utils";
import QuestionFromReview from "../components/QuestionFormReview";

/**
 QuestionContainer can be called on two scanarios with/out question id as        param. When param is sent, then the intilaValues of the question form should    be initilized
 */
class QuestionContainer extends Component {
  state = {
    showFormReview: false,
    isViewMode: false
  };

  /*if question id param exist then fetch the question from the DB*/
  componentDidMount() {
    const { params } = this.props.match;
    if (!isEmpty(params)) {
      const mode = queryString.parse(this.props.location.search);
      this.setState({ isViewMode: mode["mode"] === "view" });
      this.props.getQuestion(params.id);
    } else {
      this.props.resetQuestions();
    }
  }

  renderContent() {
    if (!this.state.showFormReview) {
      return (
        <ConnectedCreateQuestionForm
          initialValues={this.props.initialValues}
          onSubmit={() => {
            this.setState({ showFormReview: true });
          }}
          isViewMode={this.state.isViewMode}
          onCancel={this.props.history.goBack}
        />
      );
    } else {
      console.log(this.props.formValues);
      return (
        <QuestionFromReview
          formValues={this.props.formValues}
          initialValues={this.props.initialValues}
          submitQuestion={this.props.submitQuestion}
          onReturn={this.props.history.goBack}
          onCancel={() => {
            this.setState({ showFormReview: false });
          }}
          isViewMode={this.state.isViewMode}
        />
      );
    }
  }

  render() {
    return <div>{this.renderContent()}</div>;
  }
}

/**
 * set this.props.formValues for QuestionFromReview
 * state.form.questionForm can be "undefined" (before form submmition)
 * in this case 'questionForm.values' will cause a null exception
 * @param {*} state
 */
const getFormValues = state => {
  if (typeof state.form.questionForm === "undefined") {
    return {};
  } else {
    return state.form.questionForm.values;
  }
};

function mapStateToProps(state) {
  return {
    formValues: getFormValues(state),
    initialValues: state.questions
  };
}

export default connect(
  mapStateToProps,
  { submitQuestion, getQuestion, resetQuestions }
)(QuestionContainer);
