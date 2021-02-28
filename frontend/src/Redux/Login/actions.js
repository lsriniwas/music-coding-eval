import axios from "axios";
import * as actionConstants from "./actionConstants";

function loginRequest() {
  return {
    type: actionConstants.LOGIN_REQUEST,
  };
}

function loginSuccess(response) {
  return {
    type: actionConstants.LOGIN_SUCCESS,
    payload: response,
  };
}

function loginFailure(response) {
  return {
    type: actionConstants.LOGIN_FAILURE,
    payload: response,
  };
}


export const makeLoginRequest = ({ username, password}) => (dispatch) => {
  dispatch(loginRequest());

  axios
    .post(`${process.env.REACT_APP_BASE_URL}/api/login`, {
      username,
      password,
    })
    .then((res) => {
      dispatch(loginSuccess(res.data));
    })
    .catch((err) => {
      dispatch(loginFailure(err.response.data.message));
    });
};

export const fetchLoginData=payload=>dispatch=>{
  axios
  .post(`${process.env.REACT_APP_BASE_URL}/api/fetch`, {
   payload
  })
  .then((res) => {
    dispatch(loginSuccess(res.data));
  })
  .catch((err) => {
    dispatch(loginFailure(err.response.data.message));
  });
}


export const logout=()=>({
  type:actionConstants.ARTIST_LOGOUT
})