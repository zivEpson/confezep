import {
  FETCH_USERS,
  REQUEST_USER,
  GET_USER,
  CLEAR_USER,
  CLEAR_USERS
} from "../actions/types";

export default function(state = [], action) {
  switch (action.type) {
    // update the state with user info
    case FETCH_USERS:
      return action.payload || [];
    case REQUEST_USER:
      return Object.assign({}, state, { isFetching: true });
    case GET_USER:
      return Object.assign({}, state, {
        isFetching: false,
        items: action.payload
      });
    case CLEAR_USER:
      return Object.assign({}, state, {
        isFetching: false,
        items: {}
      });
    case CLEAR_USERS:
      return [];
    default:
      return state;
  }
}
