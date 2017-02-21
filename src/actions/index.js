import * as constants from "../constants";
import * as types from "./types";
import axios from "axios";

const signInRequest = () => ({type: types.SIGN_IN_REQUEST});
const signInSuccess = (token) => ({type: types.SIGN_IN_SUCCESS, token});
const signInFailure = () => ({type: types.SIGN_IN_FAILURE});

export const exampleAction = (text) => ({type: types.EXAMPLE_ACTION, text});
export const signIn = (email, password) => {
  return (dispatch) => {
    dispatch(signInRequest());

    return axios.post(`${constants.API_URL}/sign_in`, {email, password})
      .then((response) => {
        dispatch(signInSuccess(response.data.token));
      })
      .catch((error) => {
        dispatch(signInFailure());
      });
  };
};
