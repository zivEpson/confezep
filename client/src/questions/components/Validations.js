/**
 * validation error method for question form
 */
export const validate = values => {
  const errors = {};
  if (!values.title) {
    errors.title = "Required";
  }
  if (!values.body) {
    errors.body = "Required";
  }
  if (!values.answer) {
    errors.answer = "Required";
  }
  return errors;
};
