import React from "react";
import { connect } from "react-redux";

import ReactModalTemplate from "./ReactModalTemplate";
import { hideModal } from "../modalActions";

/**
 *
 * @todo - need to add onReturn
 */
const DBUpdateModal = ({ hideModal, modelName, onReturn }) => {
  const onModalReturn = () => {
    onReturn();
    hideModal();
  };
  return (
    <ReactModalTemplate
      modalHeader={`Create ${modelName}`}
      modalBody={`${modelName} was created`}
      positiveName={"Return"}
      positiveFunc={onModalReturn}
      negativeName={null}
      negativeFunc={null}
      isTwoButtons={false}
    />
  );
};

export default connect(
  null,
  { hideModal }
)(DBUpdateModal);
