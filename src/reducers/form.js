import { GET_DATA_FORM_BUILDER, GET_DATA_FORM_BUILDER_API } from "../actions/types";

const initialState = {};

export default function (state = initialState, action) {
  const { type, payload } = action;

  // console.log("type", type);

  switch (type) {
    case GET_DATA_FORM_BUILDER:
      return { 
        ...state, 
        data: payload.data 
      };
    case GET_DATA_FORM_BUILDER_API:
      return {
        ...state,
        data: payload.data
      };
    default:
      return state;
  }
}
