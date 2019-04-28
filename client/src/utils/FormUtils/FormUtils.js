import queryString from "query-string";

export const getModelMode = query => {
  const mode = queryString.parse(query);
  return mode["mode"];
};
