import React, { Component } from "react";
import { connect } from "react-redux";

import { ConnectedFilterQuestionForm as FilterQuestionForm } from "../redux-form/ReduxConnectedQuestion";
import QuestionsTableList2 from "../components/QuestionsTableList";

import {
  deleteQuestion,
  resetQuestions,
  fetchQuestions
} from "../questionAction";

/**
 * Class to display find questions panel
 */
class QuestionsPanelContainer extends Component {
  render() {
    return (
      <div className="mt-4">
        <FilterQuestionForm onSubmit={this.props.fetchQuestions} />
        <hr className="my-5" />
        <QuestionsTableList2
          questions={this.props.questions}
          deleteFunc={deleteQuestion}
        />
      </div>
    );
  }
}

/**
 * Add question and question list share the same reducer,
 * when returned from add question, the reducer state is {}
 * question list expect [].
 * @param {*} questions
 */
function setQuestionsList(questions) {
  if (Array.isArray(questions)) {
    return questions;
  } else {
    return [];
  }
}

function mapStateToProps(state) {
  return { questions: setQuestionsList(state.questions) };
}

export default connect(
  mapStateToProps,
  { deleteQuestion, resetQuestions, fetchQuestions }
)(QuestionsPanelContainer);

// export default QuestionsPanelContainer;
