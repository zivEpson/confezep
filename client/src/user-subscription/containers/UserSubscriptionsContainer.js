// @flow
import React, { Component } from "react";
import { connect } from "react-redux";

import UserSubscriptionsPanel from "../components/UserSubscriptionsPanel";
import { getCourseSubscription } from "../userSubscriptionsAction";

type Props = {
  auth: Object,
  getCourseSubscription: Function
};

/**
 * @file Entry point for displaying user subscriptions
 * @module UserCoursesContainer
 */
class UserSubscriptionsContainer extends Component<Props> {
  render() {
    return (
      <div className="mt-5">
        <UserSubscriptionsPanel
          auth={this.props.auth}
          getCourseSubscription={this.props.getCourseSubscription}
        />
      </div>
    );
  }
}

// set the auth state on the props.
function mapStateToProps({ auth }) {
  return { auth };
}

// update the state with the new auth
export default connect(
  mapStateToProps,
  { getCourseSubscription }
)(UserSubscriptionsContainer);
