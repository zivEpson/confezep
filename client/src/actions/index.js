import axios from "axios";
import { FETCH_USER, FETCH_QUESTIONS, NAV_ACTION } from "./types";

export const fetchUser = () => async dispatch => {
  const res = await axios.get("/api/current_user");
  dispatch({ type: FETCH_USER, payload: res.data });
};

export const handleToken = token => async dispatch => {
  //send the data to the server
  const res = await axios.post("/api/stripe", token);
  //update the auth reducer with the new state
  dispatch({ type: FETCH_USER, payload: res.data });
};

export const submitQuestion = (values, history) => async dispatch => {
  const res = await axios.post("/api/questions", values);
  // history.push("/admin-dashboard");
  console.log(res.status);
  dispatch({ type: FETCH_USER, payload: res.data });
};

export const fetchQuestions = () => async dispatch => {
  const res = await axios.get("/api/questions");
  dispatch({ type: FETCH_QUESTIONS, payload: res.data });
};

export const actionChange = action => async dispatch => {
  dispatch({ type: NAV_ACTION, payload: action });
};
