import { GET_DATA_FORM_BUILDER, GET_DATA_FORM_BUILDER_API } from "./types";

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

export const getListFormData = () => (dispatch) => {
  return AuthService.getListFormData().then(
    (response) => {
      dispatch({
        type: GET_DATA_FORM_BUILDER,
        payload: GET_DATA_FORM_BUILDER_API
      });
      return Promise.resolve();
    },
  );
};