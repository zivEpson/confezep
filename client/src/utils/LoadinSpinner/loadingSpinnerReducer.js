import { LOADING_SPINNER } from "../../actions/types";

export default function(state = true, action) {
  switch (action.type) {
    case LOADING_SPINNER:
      return action.payload;
    default:
      return state;
  }
}
