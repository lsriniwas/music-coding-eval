import {
  LOGIN_FAILURE,
  ARTIST_LOGOUT,
  LOGIN_REQUEST,
  LOGIN_SUCCESS,
} from "./actionConstants";

const initState = {
  isAuth: false,
  isLoading: false,
  error: false,
  success: false,
  message: "",
  user: {},
};

export const loginReducer = (state = initState, { type, payload }) => {
  switch (type) {
    case LOGIN_REQUEST:
      return {
        ...state,
        isLoading: true,
        isAuth: false,
        error: false,
        success: false,
        message: "",
        user: {},
      };
    case LOGIN_FAILURE:
      return {
        ...state,
        isLoading: false,
        error: true,
        isAuth: false,
        message: payload,
      };
    case LOGIN_SUCCESS:
      return {
        ...state,
        success: true,
        isAuth: true,
        isLoading: false,
        user: payload,
      };
    case ARTIST_LOGOUT: {
      return {
        ...state,
        isAuth: false,
        isLoading: false,
        error: false,
        success: false,
        message: "Successfully Signed Out",
        user: {},
      };
    }
    default:
      return state;
  }
};
