import React, { Component } from "react";
import { connect } from "react-redux";

import DataBaseResPopUp from "./DataBaseResPopUp";

class DataBaseResPopUpContainer extends Component {
  render() {
    const {
      show,
      header,
      body,
      textColor,
      borderColor,
      hasCancel
    } = this.props.DBPopUp;
    return (
      <DataBaseResPopUp
        show={show}
        header={header}
        body={body}
        textColor={textColor}
        borderColor={borderColor}
        hasCancel={hasCancel}
        onReturn={this.props.onReturn}
      />
    );
  }
}

function mapStateToProps(state) {
  return { DBPopUp: state.DBPopUp };
}

export default connect(
  mapStateToProps,
  null
)(DataBaseResPopUpContainer);
