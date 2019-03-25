import axios from "axios";
import { FETCH_QUESTIONS, DB_POPUP_RESPONSE } from "../actions/types";

export const fetchQuestions = values => async dispatch => {
  const res = await axios.get("/api/questions", {
    params: {
      title: values["title"]
    }
  });
  dispatch({ type: FETCH_QUESTIONS, payload: res.data });
};

export const submitQuestion = values => async dispatch => {
  const res = await axios.post("/api/questions", values);
  dispatch({ type: DB_POPUP_RESPONSE, payload: setModalData(res) });
};

// helpers
function setModalData(res) {
  const modalObject = {
    show: true,
    header: "Create Contact",
    body: "Contact was created successfuly",
    textColor: "text-success",
    borderColor: "border border-success"
  };
  return modalObject;
}
