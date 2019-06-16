// @flow
import React, { useState } from "react";
import BootstrapTable from "react-bootstrap-table-next";

import { columns, selectRow } from "../constants/QuestionTableConstants";
import TableButtons from "../../utils/TableUtils/TableButtons";

type Props = {
  //questionAction - delete question by id
  deleteFunc: Function,
  //questions fetched from db.
  questions: Object
};

const QuestionsTableList = (props: Props) => {
  const { questions, deleteFunc } = props;
  // hooks - let you use state without writing a class.
  const [recordId, setRecordId] = useState(null);
  const [deletedRecordId, hideRow] = useState(null);

  const onSelect = (row: Object) => {
    setRecordId(row._id);
  };
  selectRow.onSelect = onSelect;

  return (
    <div>
      <TableButtons
        moduleName={"question"}
        recordId={recordId}
        deleteFunc={deleteFunc}
        hideRow={hideRow}
      />
      <BootstrapTable
        keyField="_id"
        data={questions}
        columns={columns}
        selectRow={selectRow}
        hiddenRows={[deletedRecordId]}
      />
    </div>
  );
};

export default QuestionsTableList;
