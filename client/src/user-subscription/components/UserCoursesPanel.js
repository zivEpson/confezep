// @flow
import React, { useState } from "react";

import CoursePanelContainer from "../../courses/containers/CoursePanelContainer";

type Props = {
  //create a new user course subscription
  createCourseSubscription: Function
};

/**
 * @file Entry point for displaying user subscriptions
 * @module UserCoursesPanel
 */
const UserCoursesPanel = (props: Props) => {
  const [record, setRecord] = useState({});

  const addCourse = () => {
    // console.log("add course");
    props.createCourseSubscription(record);
  };
  const removeCourse = () => {
    console.log("remove course");
  };

  return (
    <div>
      <CoursePanelContainer
        handlerFunction={setRecord}
        isCalledFromUserSubscription={true}
        userSubscriptionAddCourseFunc={addCourse}
        userSubscriptionRemoveCourseFunc={removeCourse}
      />
    </div>
  );
};

export default UserCoursesPanel;
