import { dateFormatter } from "../../utils/TableUtils/DataFormater";

export const columns = [
  {
    dataField: "name",
    text: "User Name"
  },
  {
    dataField: "email",
    text: "User Email"
  },
  {
    dataField: "dateCreated",
    text: "Created At",
    formatter: dateFormatter
  }
];

export const selectRow = {
  mode: "radio",
  clickToSelect: true,
  hideSelectColumn: true,
  bgColor: "#ffb4d9",
  onSelect: null
};
