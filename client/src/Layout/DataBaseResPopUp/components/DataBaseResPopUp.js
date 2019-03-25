import React from "react";
import Modal from "react-bootstrap/Modal";

export const DataBaseResPopUp = ({
  show,
  header,
  body,
  textColor,
  borderColor
}) => {
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
            <button type="button" className="btn btn-outline-secondary mx-auto">
              Return
            </button>
          </Modal.Footer>
        </div>
      </Modal>
    </>
  );
};

export default DataBaseResPopUp;
