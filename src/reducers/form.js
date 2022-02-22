import { GET_DATA_FORM_BUILDER } from "../actions/types";

const initialState = {};

export default function (state = initialState, action) {
  const { type, payload } = action;

  switch (type) {
    case GET_DATA_FORM_BUILDER:
      return { ...state, data: payload.data };
    default:
      return state;
  }
}
