import React from "react";
import { BootstrapTable, TableHeaderColumn } from "react-bootstrap-table";

import "../../../node_modules/react-bootstrap-table/dist/react-bootstrap-table-all.min.css";

import { CREATE_QUESTION } from "../constants/QuestionActionTypes";

export const QuestionList = ({
  questions,
  setChosenQuestion,
  questionAction
}) => {
  const QuestionListButtonGroup = () => {
    return (
      <div className="btn-group btn-group-sm">
        <button className="btn btn-light" type="button">
          <i className="fas fa-eye" />
        </button>
        <button className="btn btn-light" type="button" onClick={customConfirm}>
          <i className="fas fa-plus" />
        </button>
        <button className="btn btn-light" type="button">
          <i className="far fa-edit" />
        </button>
        <button className="btn btn-light" type="button">
          <i className="far fa-trash-alt" />
        </button>
      </div>
    );
  };

  const onRowSelect = (row, isSelected, e) => {
    setChosenQuestion(row._id);
  };

  function customConfirm(val) {
    questionAction(CREATE_QUESTION);
  }

  const selectRowProp = {
    mode: "radio",
    bgColor: "pink",
    hideSelectColumn: true,
    clickToSelect: true,
    onSelect: onRowSelect
  };

  const options = {
    noDataText: "Search for Questions",
    handleConfirmDeleteRow: customConfirm,
    btnGroup: QuestionListButtonGroup
  };

  return (
    <div>
      <BootstrapTable
        data={questions}
        version="4"
        options={options}
        selectRow={selectRowProp}
      >
        <TableHeaderColumn hidden={true} isKey dataField="_id">
          _id
        </TableHeaderColumn>
        <TableHeaderColumn dataField="title">Title</TableHeaderColumn>
        <TableHeaderColumn dataField="dateCreated">
          dateCreated
        </TableHeaderColumn>
      </BootstrapTable>
    </div>
  );
};

export default QuestionList;
