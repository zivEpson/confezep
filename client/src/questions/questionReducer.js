import {
  FETCH_QUESTIONS,
  RESET_QUESTIONS,
  REQUEST_QUESTION,
  GET_QUESTION,
  CLEAR_QUESTION
} from "../actions/types";

export default function(state = [], action) {
  switch (action.type) {
    case FETCH_QUESTIONS:
      return action.payload;
    case REQUEST_QUESTION:
      return Object.assign({}, state, { isFetching: true });
    case GET_QUESTION:
      return Object.assign({}, state, {
        isFetching: false,
        items: action.payload
      });
    case CLEAR_QUESTION:
      return Object.assign({}, state, {
        isFetching: false,
        items: {}
      });
    case RESET_QUESTIONS:
      return [];
    default:
      return state;
  }
}
