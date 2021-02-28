import {
  GET_ALBUM_SUCCESS,
  GET_ALBUM_FAILURE,
  GET_ALBUM_REQUEST,
} from "./actionTypes";

const initState = {
  albums: [],
  isLoading: false,
  error: false,
  message: "",
};

export const albumReducer = (state = initState, { type, payload }) => {
  switch (type) {
    case GET_ALBUM_REQUEST:
      return {
        ...state,
        isLoading: true,
      };
    case GET_ALBUM_SUCCESS:
      return {
        ...state,
        isLoading: false,
        albums: payload,
      };
    case GET_ALBUM_FAILURE:
      return {
        ...state,
        isLoading: false,
        error: true,
        message: "Oops !Try again later",
      };

    default:
      return state;
  }
};
