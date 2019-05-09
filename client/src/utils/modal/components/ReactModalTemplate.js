import React from "react";
import Modal from "react-modal";

import { customStyles } from "../constants/modalConstants";

Modal.setAppElement("#root");

const ReactModalTemplate = ({
  modalHeader,
  modalBody,
  positiveName,
  positiveFunc,
  negativeName,
  negativeFunc,
  isTwoButtons
}) => {
  const displayTwoButtons = () => {
    if (isTwoButtons) {
      return (
        <button className="btn btn-light" onClick={() => negativeFunc()}>
          {negativeName}
        </button>
      );
    } else {
      return null;
    }
  };

  return (
    <Modal style={customStyles} isOpen={true} contentLabel="Example Modal">
      <div>
        <div className="modal-header justify-content-center">
          <h5 className="modal-title text-capitalize">{modalHeader}</h5>
        </div>
        <div className="modal-body">
          <p>{modalBody}</p>
        </div>
        <div className="modal-footer justify-content-center">
          <button className="btn btn-light" onClick={() => positiveFunc()}>
            {positiveName}
          </button>
          {displayTwoButtons()}
        </div>
      </div>
    </Modal>
  );
};

export default ReactModalTemplate;
