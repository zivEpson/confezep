import React, { Component } from "react";
import { connect } from "react-redux";

import { getUser, submitUser } from "../userAction";
import { isEmpty } from "../../utils/utils";
import { getModelMode } from "../../utils/FormUtils/FormUtils";
import LoadingSpinner from "../../utils/LoadinSpinner/LoadingSpinner";
import { ConnectedCreateUserForm as UserForm } from "../redux-form/ReduxConnectedUser";
import UserFormReview from "../components/UserFormReview";

class UserContainer extends Component {
  state = {
    showFormReview: false
  };

  componentDidMount() {
    const { params } = this.props.match;
    if (!isEmpty(params)) {
      this.props.getUser(params.id);
    } else {
      this.props.getUser(null);
    }
  }

  renderContent() {
    const {
      initialValues,
      formValues,
      location,
      history,
      submitUser
    } = this.props;
    const mode = getModelMode(location.search);

    if (!this.state.showFormReview) {
      return (
        <UserForm
          initialValues={initialValues}
          mode={mode}
          onCancel={history.goBack}
          onSubmit={() => {
            this.setState({ showFormReview: true });
          }}
        />
      );
    } else {
      return (
        <UserFormReview
          onCancel={() => {
            this.setState({ showFormReview: false });
          }}
          submitMethod={submitUser}
          formValues={formValues}
          initialValues={initialValues}
          mode={mode}
        />
      );
    }
  }

  render() {
    return (
      <div>
        {this.props.isFetching ? <LoadingSpinner /> : this.renderContent()}
      </div>
    );
  }
}

function mapStateToProps(state) {
  const { users, form } = state;
  return {
    initialValues: users.items,
    isFetching: users.isFetching,
    // before values are filled on the form
    formValues:
      typeof form.createUserForm === "undefined"
        ? {}
        : form.createUserForm.values
  };
}

export default connect(
  mapStateToProps,
  { getUser, submitUser }
)(UserContainer);
