import React, { useState } from "react";
import BootstrapTable from "react-bootstrap-table-next";

import { columns, selectRow } from "../constants/UserTableConstants";
import TableButtons from "../../utils/TableUtils/TableButtons";

const UsersTableList = ({ users, deleteFunc }) => {
  // hooks - set record id
  const [recordId, setRecordId] = useState(null);
  const onSelect = row => {
    setRecordId(row._id);
  };
  selectRow.onSelect = onSelect;

  return (
    <div>
      <TableButtons
        moduleName={"user"}
        recordId={recordId}
        deleteFunc={deleteFunc}
      />
      <BootstrapTable
        keyField="_id"
        data={users}
        columns={columns}
        selectRow={selectRow}
      />
    </div>
  );
};

export default UsersTableList;