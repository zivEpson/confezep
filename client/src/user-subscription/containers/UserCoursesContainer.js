import React, { Component } from "react";
import { connect } from "react-redux";

import UserCoursesPanel from "../components/UserCoursesPanel";
import { createCourseSubscription } from "../userSubscriptionsAction";

/**
 * @file Entry point for adding user subscriptions
 * @module UserCoursesContainer
 */
class UserCoursesContainer extends Component {
  render() {
    return (
      <div>
        <UserCoursesPanel
          createCourseSubscription={this.props.createCourseSubscription}
        />
      </div>
    );
  }
}

//connect to redux store
export default connect(
  null,
  { createCourseSubscription }
)(UserCoursesContainer);
