import React from "react";
import { reduxForm } from "redux-form";

import QuestionForm from "../components/QuestionForm";
import { validate } from "./Validations";

const CreateQuestionForm = props => <QuestionForm {...props} />;

export const ConnectedCreateQuestionForm = reduxForm({
  form: "questionForm",
  destroyOnUnmount: false,
  validate: validate,
  enableReinitialize: true
})(CreateQuestionForm);
