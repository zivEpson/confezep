import _ from "lodash";
import React, { Component } from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router";
import formFields from "./formFields";
import * as actions from "../../../actions";
import DBResponsePopUp from "../../Layout/DBResponsePopUp";

class QuestionFormReview extends Component {
  reviewFields() {
    const { formValues } = this.props;
    const formReviewFields = _.map(formFields, ({ name, label }) => {
      return (
        <div className="card-body" key={name}>
          <h5 className="card-title">{label}</h5>
          <div> {formValues[name]}</div>
        </div>
      );
    });
    return formReviewFields;
  }

  render() {
    const { onCancel, submitQuestion, formValues, history } = this.props;
    return (
      <div>
        <h6>Please confirm your entries</h6>
        <div className="card">{this.reviewFields()}</div>
        <div className="text-center mt-2">
          <button className="btn btn-outline-warning mr-2" onClick={onCancel}>
            Back
          </button>
          <button
            onClick={() => submitQuestion(formValues, history)}
            className="btn btn-outline-success"
          >
            Submit Question
          </button>

          <DBResponsePopUp />
        </div>
      </div>
    );
  }
}

// map state from the reducer to this component props
function mapStateToProps(state) {
  return { formValues: state.form.questionForm.values };
}

// when commited a pop up should tell the user if the question saved successfuly
// on the popup there should be ok button that will cal the navAction to return
// to the base administrator page.

export default connect(
  mapStateToProps,
  actions
)(withRouter(QuestionFormReview));
