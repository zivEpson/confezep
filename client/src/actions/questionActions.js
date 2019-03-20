import axios from "axios";
import {
  FETCH_USER,
  FETCH_QUESTIONS,
  NAV_ACTION,
  MODAL_RESPONSE
} from "./types";

export const fetchQuestions = values => async dispatch => {
  const res = await axios.get("/api/questions", {
    params: {
      title: values["title"]
    }
  });
  dispatch({ type: FETCH_QUESTIONS, payload: res.data });
};
