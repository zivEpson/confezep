import React, { Component } from "react";

import FilterQuestionsFormContainer from "./FilterQuestionsFormContainer";
import QuestionListContainer from "./QuestionListContainer";

/**
 * Class to display find questions panel
 */
class FilterQuestionsPanel extends Component {
  render() {
    return (
      <div className="mt-4">
        <FilterQuestionsFormContainer />
        <hr className="my-5" />
        <QuestionListContainer />
      </div>
    );
  }
}

export default FilterQuestionsPanel;
