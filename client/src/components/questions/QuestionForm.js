import _ from "lodash";
import React, { Component } from "react";
import { reduxForm, Field } from "redux-form";
import { Link } from "react-router-dom";
import questionField from "./questionField";
import formFields from "./formFields";

class QuestionForm extends Component {
  renderFields() {
    return _.map(formFields, ({ key, label, name, placeHolder }) => {
      return (
        <Field
          key={key}
          component={questionField}
          type="text"
          name={name}
          placeHolder={placeHolder}
          label={label}
        />
      );
    });
  }

  render() {
    return (
      <div>
        <h1 className="display-4 mb-5 text-center">Question form</h1>
        <form onSubmit={this.props.handleSubmit(this.props.onQuestionSubmit)}>
          {this.renderFields()}
          <div className="text-center">
            <Link
              to="/admin-dashboard"
              className="btn btn-outline-secondary mr-3"
            >
              Cancel
            </Link>
            <button
              className="btn btn-outline-success text-center"
              type="submit"
            >
              Next
            </button>
          </div>
        </form>
      </div>
    );
  }
}

function validate(values) {
  const errors = {};

  _.each(formFields, ({ name }) => {
    if (!values[name]) {
      errors[name] = "You must provide a value";
    }
  });

  return errors;
}

export default reduxForm({
  validate,
  form: "questionForm",
  destroyOnUnmount: false
})(QuestionForm);
