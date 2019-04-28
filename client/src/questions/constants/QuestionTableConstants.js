import { dateFormatter } from "../../utils/TableUtils/DataFormater";

export const columns = [
  {
    dataField: "title",
    text: "Title"
  },
  {
    dataField: "questionType",
    text: "Type"
  },
  {
    dataField: "dateCreated",
    text: "Created At",
    formatter: dateFormatter
  }
];

export const selectRow = {
  mode: "checkbox",
  clickToSelect: true,
  hideSelectColumn: true,
  bgColor: "#ffb4d9",
  onSelect: null
};
