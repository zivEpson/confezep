import React, { useState } from "react";
import BootstrapTable from "react-bootstrap-table-next";

import { columns, selectRow } from "../constants/QuestionTableConstants";
import TableButtons from "../../utils/TableUtils/TableButtons";

const QuestionsTableList = ({ questions, deleteFunc }) => {
  // hooks
  const [recordId, setRecordId] = useState(null);
  const [deletedRecordId, hideRow] = useState(null);

  const onSelect = row => {
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
