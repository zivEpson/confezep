import React from "react";
import { reduxForm } from "redux-form";

import QuestionForm from "../components/QuestionForm";

// props are filled by the redux-form
export const QuestionFormContainer = ({ onQuestionSubmit, handleSubmit }) => {
  return (
    <div>
      <QuestionForm handleSubmit={handleSubmit} onSubmit={onQuestionSubmit} />
    </div>
  );
};

const formConfiguration = {
  form: "questionForm",
  destroyOnUnmount: false
};

export default reduxForm(formConfiguration)(QuestionFormContainer);
