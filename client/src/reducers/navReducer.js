import { NAV_ACTION } from "../actions/types";

export default function(state = null, action) {
  switch (action.type) {
    // update the state with user info
    case NAV_ACTION:
      return action.payload || false;
    default:
      return state;
  }
}
