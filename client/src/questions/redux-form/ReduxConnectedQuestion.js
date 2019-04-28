import React from "react";
import { reduxForm } from "redux-form";

import QuestionForm from "../components/QuestionForm";
import FilterQuestionsForm from "../components/FilterQuestionsForm";
import { validate } from "./Validations";

const CreateQuestionForm = props => <QuestionForm {...props} />;
const FilterQuestionForm = props => <FilterQuestionsForm {...props} />;

export const ConnectedCreateQuestionForm = reduxForm({
  form: "createQuestionForm",
  destroyOnUnmount: false,
  validate: validate
})(CreateQuestionForm);

export const ConnectedFilterQuestionForm = reduxForm({
  form: "filterQuestionForm",
  validate
})(FilterQuestionForm);
