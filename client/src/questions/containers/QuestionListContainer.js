import React, { Component } from "react";
import { connect } from "react-redux";
import { Redirect } from "react-router";

import QuestionList from "../components/QuestionList";
import { deleteQuestion } from "../questionAction";
import {
  CREATE_QUESTION,
  UPDATE_QUESTION,
  DELETE_QUESTION,
  VIEW_QUESTION
} from "../constants/QuestionActionTypes";

class QuestionListContainer extends Component {
  state = {
    chosenQuestion: null,
    actionType: null
  };

  // Set the question action when chosen (add,update,view,delete)
  questionAction = type => {
    this.setState({ actionType: type });
  };

  // according to the question aciton an operation is created
  applyQuestionAction = () => {
    switch (this.state.actionType) {
      case null:
        return;
      case CREATE_QUESTION:
        return <Redirect push to={`/admin-dashboard/new-question`} />;
      case UPDATE_QUESTION:
        if (this.state.chosenQuestion !== null) {
          return (
            <Redirect
              push
              to={`/admin-dashboard/questions/${
                this.state.chosenQuestion
              }?mode=update`}
            />
          );
        }
        break;
      case VIEW_QUESTION:
        if (this.state.chosenQuestion !== null) {
          console.log(this.props);
          return (
            <Redirect
              push
              to={`/admin-dashboard/questions/${
                this.state.chosenQuestion
              }?mode=view`}
            />
          );
        }
        break;
      case DELETE_QUESTION:
        if (this.state.chosenQuestion !== null) {
          this.props.deleteQuestion(this.state.chosenQuestion);
        }
        break;
      // should validate the question should be chosen
      default:
        return;
    }
  };

  render() {
    return (
      <div>
        <QuestionList
          questions={this.props.questions}
          setChosenQuestion={questionId => {
            this.setState({ chosenQuestion: questionId });
          }}
          questionAction={type => this.questionAction(type)}
        />
        {this.applyQuestionAction()}
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
  { deleteQuestion }
)(QuestionListContainer);
