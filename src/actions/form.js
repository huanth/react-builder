import { GET_DATA_FORM_BUILDER } from "./types";

export const getData = (data) => ({
  type: GET_DATA_FORM_BUILDER,
  payload: data,
});
