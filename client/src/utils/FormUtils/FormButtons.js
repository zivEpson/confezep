//@ flow
import React from "react";

/**
 * @file Generic component for create form buttons
 * @module FormButtons
 */

type Props = {
  //on cancel form function
  onCancel: Function,
  //negative name - for example: cancel
  negativeName: string,
  //positive name - for example: Next, Submit
  positiveName: string
};

const FormButtons = (props: Props) => {
  const { onCancel, negativeName, positiveName } = props;

  return (
    <div className="text-center">
      <button
        onClick={onCancel}
        className="btn btn-outline-warning text-center mr-2"
        type="button"
      >
        {negativeName}
      </button>
      <button className="btn btn-outline-success text-center " type="submit">
        {positiveName}
      </button>
    </div>
  );
};

export default FormButtons;
