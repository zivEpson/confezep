import React, { Component } from "react";
import { connect } from "react-redux";
import { fetchQuestions } from "../../../actions";

class QuestionList extends Component {
  state = {
    chosenQuestionId: null
  };

  handleClick(e) {
    console.log(this);
    console.log(e.target.value);
  }

  renderQuestions() {
    let rowNumber = 1;
    return this.props.questions.map(question => {
      return (
        <tr key={question._id}>
          <td>
            <input
              type="checkbox"
              name="name1"
              onClick={this.handleClick.bind(question._id)}
            />
          </td>
          <th scope="row">{rowNumber++}</th>
          <td> {question.title}</td>
        </tr>
      );
    });
  }
  render() {
    return (
      <div>
        <table className="table table-hover">
          <thead>
            <tr>
              <th>Select</th>
              <th>Number</th>
              <th>Title</th>
            </tr>
          </thead>
          <tbody>{this.renderQuestions()}</tbody>
        </table>
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
