import React, { Component } from "react";
import { reduxForm } from "redux-form";
import { connect } from "react-redux";

import { submitQuestion } from "../questionAction";
import QuestionFormContainer from "./QuestionFormContainer";
import QuestionFormReviewContainer from "./QuestionFormReviewContainer";

class QuestionContainer extends Component {
  state = {
    showFormReview: false
  };

  renderContent() {
    console.log(this.props);
    if (this.state.showFormReview) {
      return (
        <QuestionFormReviewContainer
          submitQuestion={this.props.submitQuestion}
        />
      );
    }
    return (
      <QuestionFormContainer
        onQuestionSubmit={() => this.setState({ showFormReview: true })}
      />
    );
  }

  render() {
    return <div className="mt-2">{this.renderContent()}</div>;
  }
}

QuestionContainer = connect(
  null,
  { submitQuestion }
)(QuestionContainer);

export default QuestionContainer;
// export default reduxForm({
//   form: "questionForm"
// })(QuestionContainer);
