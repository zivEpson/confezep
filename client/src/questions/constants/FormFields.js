export default [
  {
    key: 1,
    name: "title",
    label: "Title",
    type: "text",
    placeHolder: "Enter Question Title",
    displayOnFilter: true,
    displayOnQuestionBody: true,
    isArrayField: false
  },
  {
    key: 2,
    name: "questionType",
    label: "Question Type",
    type: "select",
    placeHolder: "Question Type",
    displayOnFilter: true,
    displayOnQuestionBody: false,
    isArrayField: false
  },
  {
    key: 3,
    name: "body",
    label: "Body of the Question",
    type: "textarea",
    placeHolder: "Enter Question Body",
    displayOnFilter: false,
    displayOnQuestionBody: true,
    isArrayField: false
  },
  {
    key: 4,
    name: "hints",
    label: "Add Hints:",
    type: "text",
    placeHolder: "Enter Hint",
    displayOnFilter: false,
    displayOnQuestionBody: true,
    isArrayField: true
  },
  {
    key: 5,
    name: "bodyCode",
    label: "Add Code:",
    type: "textarea",
    placeHolder: "Enter Code",
    displayOnFilter: false,
    displayOnQuestionBody: true,
    isArrayField: true
  },
  {
    key: 6,
    name: "answer",
    label: "Answer",
    type: "textarea",
    placeHolder: "Enter Question Answer",
    displayOnQuestionBody: true,
    isArrayField: false
  }
];
