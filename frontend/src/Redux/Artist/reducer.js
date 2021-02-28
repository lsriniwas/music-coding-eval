import {
    REQUEST_ARTIST,
    REQUEST_ARTIST_SUCCESS,
    REQUEST_ARTIST_FAILURE,
  } from "./actionTypes";
  
  const initState = {
    isAuth: false,
    isLoading: false,
    error: false,
    success: false,
    message: "",
    user: {},
  };
  
  export const artistReducer = (state = initState, { type, payload }) => {
    switch (type) {
      case REQUEST_ARTIST:
        return {
          ...state,
          isLoading: true,
          isAuth: false,
          error: false,
          success: false,
          message: "",
          user: {},
        };
      case REQUEST_ARTIST_FAILURE:
        return {
          ...state,
          isLoading: false,
          error: true,
          isAuth: false,
          message: payload,
        };
      case REQUEST_ARTIST_SUCCESS:
        return {
          ...state,
          success: true,
          isAuth: true,
          isLoading: false,
          user: payload,
        };
     
      default:
        return state;
    }
  };
  