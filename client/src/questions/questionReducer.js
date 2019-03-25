import { FETCH_QUESTIONS } from "../actions/types";

export default function(state = [], action) {
  switch (action.type) {
    // update the state with user info
    case FETCH_QUESTIONS:
      return action.payload || false;
    default:
      return state;
  }
}
