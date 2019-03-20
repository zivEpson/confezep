import React, { Component } from "react";
import { reduxForm } from "redux-form";

import QuestionForm from "./QuestionForm";
import QuestionFormReview from "./QuestionFormReview";

class QuestionNew extends Component {
  state = {
    showFormReview: false
  };

  renderContent() {
    if (this.state.showFormReview) {
      return (
        <QuestionFormReview
          onCancel={() => this.setState({ showFormReview: false })}
        />
      );
    }
    return (
      <QuestionForm
        onQuestionSubmit={() => this.setState({ showFormReview: true })}
      />
    );
  }

  render() {
    return <div className="mt-2">{this.renderContent()}</div>;
  }
}

export default reduxForm({
  form: "questionForm"
})(QuestionNew);
