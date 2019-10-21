//@flow
import _ from "lodash";
import React from "react";
import { Field } from "redux-form";

import FormFields from "../constants/FormFields";
import FormFieldByType from "../../utils/FormUtils/FormFieldByType";

/**
 * @file Display the question filter panel
 * @module FilterQuestionsForm
 */

type Props = {
  //redux-form - handles the form's submission.
  handleSubmit: Function,
  //questionAction - fetchCourses by search criteria
  onSubmit: Function,
  //indicate whether this component was called from user subscription
  isCalledFromUserSubscription: boolean,
  //method to add new course to user subscription
  userSubscriptionAddCourseFunc: Function,
  //method to remove course from user subscription
  userSubscriptionRemoveCourseFunc: Function
};

const FilterCoursesForm = (props: Props) => {
  const {
    handleSubmit,
    onSubmit,
    isCalledFromUserSubscription,
    userSubscriptionAddCourseFunc,
    userSubscriptionRemoveCourseFunc
  } = props;

  const renderUserSubscriptionButtons = () => {
    return (
      <div>
        <button
          onClick={() => userSubscriptionAddCourseFunc()}
          className="btn btn-light"
          type="button"
        >
          Add
        </button>
        <button
          onClick={() => userSubscriptionRemoveCourseFunc()}
          className="btn btn-light"
          type="button"
        >
          Remove
        </button>
      </div>
    );
  };

  const renderFields = () => {
    return _.map(
      FormFields,
      ({ key, name, displayOnFilter, label, type, selectOptions }) => {
        if (displayOnFilter === true) {
          return (
            <div key={key} className="col-3 mt-4">
              <Field
                component={FormFieldByType}
                type={type}
                name={name}
                label={label}
                isFilterPanel={true}
                selectOptions={selectOptions}
              />
            </div>
          );
        }
      }
    );
  };

  return (
    <div>
      <form onSubmit={handleSubmit(value => onSubmit(value))}>
        <div className="form-row">{renderFields()}</div>
        <div className="ml-1 row">
          <button className="btn btn-light" type="submit">
            Filter
          </button>
          {isCalledFromUserSubscription
            ? renderUserSubscriptionButtons()
            : null}
        </div>
      </form>
    </div>
  );
};

export default FilterCoursesForm;
