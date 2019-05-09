import React, { Component } from "react";
import { connect } from "react-redux";

import { ConnectedCreateQuestionForm as QuestionForm } from "../redux-form/ReduxConnectedQuestion";
import { submitQuestion, getQuestion } from "../questionAction";
import { getModelMode } from "../../utils/FormUtils/FormUtils";
import LoadingSpinner from "../../utils/LoadinSpinner/LoadingSpinner";
import { isEmpty } from "../../utils/utils";
import QuestionFromReview from "../components/QuestionFormReview";

/**
 QuestionContainer can be called on two scanarios with/out question id as        param. When param is sent, then the intilaValues of the question form should    be initilized
 */
class QuestionContainer extends Component {
  state = {
    showFormReview: false
  };

  /*if question id param exist then fetch the question from the DB*/
  componentDidMount() {
    const { params } = this.props.match;
    if (!isEmpty(params)) {
      this.props.getQuestion(params.id);
    } else {
      this.props.getQuestion(null);
    }
  }

  renderContent() {
    const {
      initialValues,
      formValues,
      location,
      history,
      submitQuestion
    } = this.props;

    const mode = getModelMode(location.search);
    if (!this.state.showFormReview) {
      return (
        <QuestionForm
          initialValues={initialValues}
          mode={mode}
          onCancel={history.goBack}
          onSubmit={() => {
            this.setState({ showFormReview: true });
          }}
        />
      );
    } else {
      return (
        <QuestionFromReview
          formValues={formValues}
          initialValues={initialValues}
          submitMethod={submitQuestion}
          onReturn={history.goBack}
          onCancel={() => {
            this.setState({ showFormReview: false });
          }}
          mode={mode}
        />
      );
    }
  }

  render() {
    return (
      <div>
        {this.props.isFetching ? <LoadingSpinner /> : this.renderContent()}
      </div>
    );
  }
}

function mapStateToProps(state) {
  const { questions, form } = state;
  return {
    initialValues: questions.items,
    isFetching: questions.isFetching,
    // before values are filled on the form
    formValues:
      typeof form.createQuestionForm === "undefined"
        ? {}
        : form.createQuestionForm.values
  };
}

export default connect(
  mapStateToProps,
  { submitQuestion, getQuestion }
)(QuestionContainer);
