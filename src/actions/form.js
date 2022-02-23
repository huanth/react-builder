import { GET_DATA_FORM_BUILDER } from "./types";

import AuthService from "../services/auth.service";


export const getData = (data) => (dispatch) => {
  return AuthService.saveFormBuilder(data).then(
    (response) => {
      dispatch({
        type: GET_DATA_FORM_BUILDER,
        payload: data
      });
      return Promise.resolve();
    },
  );
};