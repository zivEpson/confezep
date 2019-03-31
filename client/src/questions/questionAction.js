import axios from "axios";
import {
  FETCH_QUESTIONS,
  DB_POPUP_RESPONSE,
  LOAD_QUESTION,
  RESET_QUESTIONS
} from "../actions/types";

/**
 * Fetch questions according to the given question params
 *
 * @param {*} values
 */
export const fetchQuestions = values => async dispatch => {
  const res = await axios.get("/api/questions", {
    params: {
      title: values["title"]
    }
  });
  dispatch({ type: FETCH_QUESTIONS, payload: res.data });
};

/**
 * Submit question to the Data-Base
 * After response, dispatch for popup response
 *
 * @param {*} values
 */
export const submitQuestion = values => async dispatch => {
  const res = await axios.post("/api/questions", values);
  dispatch({ type: DB_POPUP_RESPONSE, payload: setModalData(res) });
};

/**
 * Delete question according to question id
 *
 * @param {Question Id} id
 */
export const deleteQuestion = id => async dispatch => {
  console.log(id);
  const res = await axios.delete(`/api/questions/${id}`);
  console.log(res);
};

/**
 * Get question according to question id
 *
 * @param {Question Id} id
 */
export const getQuestion = id => async dispatch => {
  const res = await axios.get(`/api/questions/${id}`);
  dispatch({ type: LOAD_QUESTION, payload: res.data });
};

/**
 * Reset questions reducer
 */
export const resetQuestions = () => async dispatch => {
  dispatch({ type: RESET_QUESTIONS });
};

/***************************helpers*************************** */

/**
 * Set the modal popup parameters
 *
 * @param {*} res
 */
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
