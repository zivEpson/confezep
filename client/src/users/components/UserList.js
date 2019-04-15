import React from "react";
import BootstrapTable from "react-bootstrap-table-next";

import { columns, selectRow } from "../constants/UserTableConstants";

const UserList = ({ users }) => {
  return (
    <div>
      <BootstrapTable
        keyField="_id"
        data={users}
        columns={columns}
        selectRow={selectRow}
      />
    </div>
  );
};

export default UserList;
