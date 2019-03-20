import { MODAL_RESPONSE } from "../actions/types";

const defaultState = {
  show: false,
  header: "not relevant, modal is hidden",
  body: "not relevant, modal is hidden",
  textColor: "text-warning",
  borderColor: "border border-warning"
};

export default function(state = defaultState, action) {
  switch (action.type) {
    // update the state with user info
    case MODAL_RESPONSE:
      return action.payload;
    default:
      return state;
  }
}
