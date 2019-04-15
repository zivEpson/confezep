import { FETCH_USER } from "../actions/types";

export default function(state = [], action) {
  switch (action.type) {
    // update the state with user info
    case FETCH_USER:
      return action.payload || [];
    default:
      return state;
  }
}
