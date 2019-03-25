import React, { Component } from "react";
import { connect } from "react-redux";
import { Redirect } from "react-router";

import { CREATE_QUESTION } from "../constants/QuestionActionTypes";
import QuestionList from "../components/QuestionList";

class QuestionListContainer extends Component {
  state = {
    chosenQuestion: null,
    actionType: null
  };

  questionAction = type => {
    this.setState({ actionType: type });
  };

  applyQuestionAction = () => {
    switch (this.state.actionType) {
      case null:
        return;
      case CREATE_QUESTION:
        return <Redirect push to="/admin-dashboard/new-question" />;
    }
  };

  render() {
    return (
      <div>
        <QuestionList
          questions={this.props.questions}
          setChosenQuestion={questionId => {
            this.setState({ chosenQuestion: questionId });
            console.log(questionId);
          }}
          questionAction={type => this.questionAction(type)}
        />
        {this.applyQuestionAction()}
      </div>
    );
  }
}

function mapStateToProps(state) {
  return { questions: state.questions };
}

export default connect(
  mapStateToProps,
  null
)(QuestionListContainer);
