import axios from "axios";

import { setModalData, difference } from "../utils/utils";
import {
  FETCH_QUESTIONS,
  RESET_QUESTIONS,
  REQUEST_QUESTION,
  GET_QUESTION,
  CLEAR_QUESTION,
  DB_POPUP_RESPONSE
} from "../actions/types";

/**
 * Fetch questions according to the given question params
 *
 * @param {*} values
 */
export const fetchQuestions = values => async dispatch => {
  const res = await axios.get("/api/questions", {
    params: {
      title: values["title"],
      questionType: values["questionType"]
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
export const submitQuestion = (values, initialValues) => async dispatch => {
  let res;
  // on create question initailValues are null
  if (initialValues === null) {
    res = await axios.post("/api/questions", values);
    // on update question the delta is sent to be updated
  } else {
    res = await axios.put(
      `/api/questions/${values._id}`,
      difference(values, initialValues)
    );
  }
  dispatch({
    type: DB_POPUP_RESPONSE,
    payload: setModalData(res, "Create Contact", "Contact was Created", false)
  });
};

/**
 * Delete question according to question id
 *
 * @param {Question Id} id
 */
export const deleteQuestion = id => async dispatch => {
  await axios.delete(`/api/questions/${id}`);
  dispatch({ type: RESET_QUESTIONS });
};

/**
 * Get question according to question id
 *
 * @param {Question Id} id
 */
export const getQuestion = id => async dispatch => {
  if (id !== null) {
    dispatch({ type: REQUEST_QUESTION });
    const res = await axios.get(`/api/questions/${id}`);
    dispatch({ type: GET_QUESTION, payload: res.data });
  } else {
    dispatch({ type: CLEAR_QUESTION });
  }
};

/**
 * Reset questions reducer
 */
export const resetQuestions = () => async dispatch => {
  dispatch({ type: RESET_QUESTIONS });
};
