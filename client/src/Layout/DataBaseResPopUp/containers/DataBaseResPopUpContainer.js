import React, { Component } from "react";
import { connect } from "react-redux";

import DataBaseResPopUp from "../components/DataBaseResPopUp";

class DataBaseResPopUpContainer extends Component {
  render() {
    const { show, header, body, textColor, borderColor } = this.props.DBPopUp;
    return (
      <DataBaseResPopUp
        show={show}
        header={header}
        body={body}
        textColor={textColor}
        borderColor={borderColor}
      />
    );
  }
}

function mapStateToProps(state) {
  console.log(state.DBPopUp);
  return { DBPopUp: state.DBPopUp };
}

export default connect(
  mapStateToProps,
  null
)(DataBaseResPopUpContainer);
