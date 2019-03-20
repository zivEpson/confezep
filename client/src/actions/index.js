import axios from "axios";
import {
  FETCH_USER,
  FETCH_QUESTIONS,
  NAV_ACTION,
  MODAL_RESPONSE
} from "./types";

// user
export const fetchUser = () => async dispatch => {
  const res = await axios.get("/api/current_user");
  dispatch({ type: FETCH_USER, payload: res.data });
};

// payment
export const handleToken = token => async dispatch => {
  //send the data to the server
  const res = await axios.post("/api/stripe", token);
  //update the auth reducer with the new state
  dispatch({ type: FETCH_USER, payload: res.data });
};

// questions
export const submitQuestion = (values, history) => async dispatch => {
  const res = await axios.post("/api/questions", values);
  // history.push("/admin-dashboard");
  console.log(res.status);
  dispatch({ type: MODAL_RESPONSE, payload: setModalData(res) });
};

export const fetchQuestions = values => async dispatch => {
  const res = await axios.get("/api/questions", {
    params: {
      title: values["title"]
    }
  });
  dispatch({ type: FETCH_QUESTIONS, payload: res.data });
};

// nav action
export const actionChange = action => async dispatch => {
  dispatch({ type: NAV_ACTION, payload: action });
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
