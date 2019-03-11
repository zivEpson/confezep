import React, { Component } from "react";
import { connect } from "react-redux";
import { fetchQuestions } from "../../actions";

class QuestionList extends Component {
  renderQuestions() {
    return this.props.questions.map(question => {
      return (
        <div className="card-body" key={question._id}>
          <h5 className="card-title">{question.title}</h5>
          <p> {question.questionBody}</p>
          <p> {question.questionAnswer}</p>
        </div>
      );
    });
  }

  componentDidMount() {
    const questions = this.props.fetchQuestions();
  }

  render() {
    return (
      <div>
        <h1>questionList</h1>
        {this.renderQuestions()}
      </div>
    );
  }
}

function mapStateToProps(state) {
  //state from the reducer
  return { questions: state.questions };
}

export default connect(
  mapStateToProps,
  { fetchQuestions }
)(QuestionList);
