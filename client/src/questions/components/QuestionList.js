import React from "react";
import { BootstrapTable, TableHeaderColumn } from "react-bootstrap-table";

import "../../../node_modules/react-bootstrap-table/dist/react-bootstrap-table-all.min.css";

import {
  CREATE_QUESTION,
  UPDATE_QUESTION,
  DELETE_QUESTION,
  VIEW_QUESTION
} from "../constants/QuestionActionTypes";

export const QuestionList = ({
  questions,
  setChosenQuestion,
  questionAction
}) => {
  const QuestionListButtonGroup = () => {
    return (
      <div className="btn-group btn-group-sm">
        <button
          className="btn btn-light"
          type="button"
          onClick={() => questionAction(VIEW_QUESTION)}
        >
          <i className="fas fa-eye" />
        </button>
        <button
          className="btn btn-light"
          type="button"
          onClick={() => questionAction(CREATE_QUESTION)}
        >
          <i className="fas fa-plus" />
        </button>
        <button
          className="btn btn-light"
          type="button"
          onClick={() => questionAction(UPDATE_QUESTION)}
        >
          <i className="far fa-edit" />
        </button>
        <button
          className="btn btn-light"
          type="button"
          onClick={() => questionAction(DELETE_QUESTION)}
        >
          <i className="far fa-trash-alt" />
        </button>
      </div>
    );
  };

  //set the question id as state, used when a question action is called
  const onRowSelect = (row, isSelected, e) => {
    setChosenQuestion(row._id);
  };

  const selectRowProp = {
    mode: "radio",
    bgColor: "pink",
    hideSelectColumn: true,
    clickToSelect: true,
    onSelect: onRowSelect
  };

  const options = {
    noDataText: "Search for Questions",
    btnGroup: QuestionListButtonGroup,
    deleteRow: true
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
        <TableHeaderColumn dataField="dateCreated" dataFormat={dateFormatter}>
          Date Created
        </TableHeaderColumn>
        <TableHeaderColumn dataField="questionType">
          Question Type
        </TableHeaderColumn>
        <TableHeaderColumn dataField="_user" dataFormat={userFormatter}>
          Created By
        </TableHeaderColumn>
      </BootstrapTable>
    </div>
  );
};

/**
 * format the date for the question list table
 * @param {cell} cell
 */
function dateFormatter(cell) {
  const date = new Date(cell);
  return (
    date.getDate() + "-" + (date.getMonth() + 1) + "-" + date.getFullYear()
  );
}

/**
 * format the user name for the question list table
 * @param {cell} cell
 */
function userFormatter(cell) {
  if (cell === null) {
    return null;
  } else {
    return cell["name"];
  }
}

export default QuestionList;
