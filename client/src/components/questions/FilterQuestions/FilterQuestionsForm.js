import _ from "lodash";
import React, { Component } from "react";
import { reduxForm, Field } from "redux-form";

import filterFormFields from "./filterFormFields";
import filterField from "./filterField";
import { connect } from "react-redux";
import { fetchQuestions } from "../../../actions";

class FilterQuestionsForm extends Component {
  renderFields() {
    return _.map(filterFormFields, ({ key, name, label, placeHolder }) => {
      return (
        <Field
          key={key}
          component={filterField}
          type="text"
          name={name}
          label={label}
          placeHolder={placeHolder}
        />
      );
    });
  }

  render() {
    const { handleSubmit, fetchQuestions } = this.props;
    return (
      <div>
        <form
          className="form-inline"
          // handle submit is passed by redux-form as prop
          onSubmit={handleSubmit(value => fetchQuestions(value))}
        >
          {this.renderFields()}
          <button className="btn btn-light" type="submit">
            Filter
          </button>
        </form>
      </div>
    );
  }
}

FilterQuestionsForm = connect(
  null,
  { fetchQuestions }
)(FilterQuestionsForm);

function validate(values) {
  const errors = {};
  return errors;
}

// To make your form component communicate with the store, we need to wrap it with reduxForm(). It will provide the props about the form state and function to handle the submit process.
export default reduxForm({
  validate,
  form: "questionForm"
})(FilterQuestionsForm);
