import {
  FETCH_QUESTIONS,
  LOAD_QUESTION,
  RESET_QUESTIONS
} from "../actions/types";

export default function(state = [], action) {
  switch (action.type) {
    case FETCH_QUESTIONS:
      return action.payload;
    case LOAD_QUESTION:
      return action.payload || null;
    case RESET_QUESTIONS:
      return null;
    default:
      return state;
  }
}
