// @flow
import React, { useEffect } from "react";

/**
 * @file Display the question filter panel
 * @module FilterQuestionsForm
 */

type Props = {
  //auth object
  auth: Object,
  getCourseSubscription: Function
};

const UserSubscriptionsPanel = (props: Props) => {
  //componentDidMount only
  useEffect(() => {
    props.getCourseSubscription();
  }, []);

  return (
    <div>
      <h1>your courses</h1>
    </div>
  );
};

export default UserSubscriptionsPanel;
