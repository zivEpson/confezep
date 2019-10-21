//@flow
import React, { Component } from "react";
import { connect } from "react-redux";

import { ConnectedFilterCourseForm as CoursesFilterForm } from "../redux-form/ReduxConnectedCourse";
import CoursesTableList from "../components/CoursesTableList";
import { fetchCourses, deleteCourse } from "../courseAction";

/**
 * @file Entry point for displaying filter questions panel and table.
 * @module CoursePanelContainer
 */

type Props = {
  //courseAction - Fetch courses from DB according to the given courses params
  fetchCourses: Function,
  //courseAction - Delete course according to course id
  deleteCourse: Function,
  // returend data from the DB
  courses: [Object],
  handlerFunction: Function,
  isCalledFromUserSubscription: Boolean,
  userSubscriptionAddCourseFunc: Function,
  userSubscriptionRemoveCourseFunc: Function
};

class CoursePanelContainer extends Component<Props> {
  render() {
    const {
      fetchCourses,
      deleteCourse,
      courses,
      handlerFunction,
      isCalledFromUserSubscription,
      userSubscriptionAddCourseFunc,
      userSubscriptionRemoveCourseFunc
    } = this.props;
    return (
      <div>
        {/*search panel*/}
        <CoursesFilterForm
          onSubmit={fetchCourses}
          isCalledFromUserSubscription={isCalledFromUserSubscription}
          userSubscriptionAddCourseFunc={userSubscriptionAddCourseFunc}
          userSubscriptionRemoveCourseFunc={userSubscriptionRemoveCourseFunc}
        />
        <hr className="my-5" />
        {/*table panel*/}
        <CoursesTableList
          handlerFunction={handlerFunction}
          deleteFunc={deleteCourse}
          courses={courses}
        />
      </div>
    );
  }
}

/**
 * Add question and courses list share the same reducer,
 * when returned from add question, the reducer state is {}
 * courses list expect [].
 */
function setCoursesList(courses) {
  if (Array.isArray(courses)) {
    return courses;
  } else {
    return [];
  }
}

//update values from reducer to props
function mapStateToProps(state) {
  return { courses: setCoursesList(state.courses.items) };
}

//connect to redux store
export default connect(
  mapStateToProps,
  { deleteCourse, fetchCourses }
)(CoursePanelContainer);
