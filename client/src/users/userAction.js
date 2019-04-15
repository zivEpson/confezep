import axios from "axios";

import { FETCH_USER } from "../actions/types";

export const fetchUsers = values => async dispatch => {
  const res = await axios.get("/api/users", {
    params: {
      name: values["name"]
    }
  });
  console.log(res.data);
  dispatch({ type: FETCH_USER, payload: res.data });
};
