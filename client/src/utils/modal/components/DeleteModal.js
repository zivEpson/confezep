import React from "react";
import { connect } from "react-redux";

import ReactModalTemplate from "./ReactModalTemplate";
import { hideModal } from "../modalActions";

const DeleteModal = ({ hideModal, modelId, deleteFunc, hideRowFunc }) => {
  const onDelete = () => {
    deleteFunc(modelId);
    hideRowFunc(modelId);
    hideModal();
  };

  return (
    <ReactModalTemplate
      modalHeader={`Delete question`}
      modalBody={`Are you sure you want to delete question? `}
      positiveName={"Yes"}
      positiveFunc={onDelete}
      negativeName={"No"}
      negativeFunc={hideModal}
      isTwoButtons={true}
    />
  );
};

export default connect(
  null,
  { hideModal }
)(DeleteModal);
