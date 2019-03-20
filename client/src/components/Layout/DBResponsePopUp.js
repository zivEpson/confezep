import React, { Component } from "react";
import Modal from "react-bootstrap/Modal";
import { connect } from "react-redux";

import * as actions from "../../actions";
import { ADMIN_HOME } from "../Layout/actionTypes";

class DBResponsePopUp extends Component {
  render() {
    const {
      show,
      header,
      body,
      textColor,
      borderColor
    } = this.props.modalAction;
    return (
      <>
        <Modal centered="true" show={show}>
          <div className={borderColor}>
            <Modal.Header>
              <Modal.Title>{header}</Modal.Title>
            </Modal.Header>
            <Modal.Body>
              <p className={textColor}>{body}</p>
            </Modal.Body>
            <Modal.Footer>
              <button
                type="button"
                className="btn btn-outline-secondary mx-auto"
                onClick={() => this.props.actionChange(ADMIN_HOME)}
              >
                Return
              </button>
            </Modal.Footer>
          </div>
        </Modal>
      </>
    );
  }
}

function mapStateToProps(state) {
  //state from the reducer
  console.log(state.modalAction);
  return { modalAction: state.modalAction };
}

export default connect(
  mapStateToProps,
  actions
)(DBResponsePopUp);
