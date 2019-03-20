import React, { Component } from "react";
import FilterQuestionsForm from "./FilterQuestionsForm";
import QuestionList from "./QuestionList";

class FilterQuestionsPanel extends Component {
  render() {
    return (
      <div className="mt-4">
        <FilterQuestionsForm />
        <hr className="my-5" />
        <QuestionList />
      </div>
    );
  }
}

export default FilterQuestionsPanel;
