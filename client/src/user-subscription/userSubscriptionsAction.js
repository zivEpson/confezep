//@flow
import axios from "axios";

/**
 * Create new user course subscription
 */
export const createCourseSubscription = (values: Object) => async (
  dispatch: Function
) => {
  const res = await axios.post("/api/user_subscriptions/courses", values);
  console.log(res);
};

/**
 * Fetch user course subscription
 */
export const getCourseSubscription = () => async (dispatch: Function) => {
  const res = await axios.get("/api/user_subscriptions/courses");
  console.log(res);
};
