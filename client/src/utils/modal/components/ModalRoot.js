import React from "react";
import { connect } from "react-redux";

import DeleteModal from "./DeleteModal";
import DBUpdateModal from "./DBUpdateModal";

const MODAL_COMPONENTS = {
  DELETE_MODAL: DeleteModal,
  DB_UPDATE_MODAL: DBUpdateModal
};

// ModalRoot reads the current modalType and modalProps from state.modal
// to which it is connected
const ModalRoot = props => {
  const { modalType, modalProps } = props.modal;
  if (!modalType) {
    return null;
  }

  const SpecificModal = MODAL_COMPONENTS[modalType];
  return <SpecificModal {...modalProps} />;
};

function mapStateToProps(state) {
  const { modal } = state;
  return {
    modal: modal
  };
}
export default connect(
  mapStateToProps,
  null
)(ModalRoot);
