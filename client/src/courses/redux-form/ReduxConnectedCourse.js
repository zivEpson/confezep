//@flow
import React from "react";
import { reduxForm } from "redux-form";

import CourseForm from "../components/CourseForm";
import FilterCoursesForm from "../components/FilterCoursesForm";
/**
 * @file location for initilaizing redux-form components
 * @module ReduxConnectedCourse.
 * @export ConnectedCreateCourseForm
 * @link https://redux-form.com/8.2.2/
 */

const CreateCourseForm = props => <CourseForm {...props} />;
const FilterCourseForm = props => <FilterCoursesForm {...props} />;

export const ConnectedCreateCourseForm = reduxForm({
  form: "createCourseForm",
  destroyOnUnmount: false,
  enableReinitialize: true
})(CreateCourseForm);

export const ConnectedFilterCourseForm = reduxForm({
  form: "filterCourseForm"
})(FilterCourseForm);
