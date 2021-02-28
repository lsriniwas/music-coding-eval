import axios from "axios";
import {
  GET_ALBUM_REQUEST,
  GET_ALBUM_SUCCESS,
  GET_ALBUM_FAILURE,
} from "./actionTypes";
import {
  GET_SEARCH_REQUEST,
  GET_SEARCH_SUCCESS,
  GET_SEARCH_FAILURE,
} from "./actionTypes";

const getAlbumRequest = () => {
  return {
    type: GET_ALBUM_REQUEST,
  };
};

const getAlbumSuccess = (payload) => {
  return {
    type: GET_ALBUM_SUCCESS,
    payload: payload,
  };
};

const getAlbumFailure = () => {
  return {
    type: GET_ALBUM_FAILURE,
  };
};

export const makeGetAlbumRequest = (sort,genre,q) => (dispatch) => {
  dispatch(getAlbumRequest());
  console.log("called")
  axios
    .get(`${process.env.REACT_APP_BASE_URL}/api/home/${sort||"asc"}/${genre||"all"}`,{
      params: {
        q: q||1,
      }
    })
    .then((res) => dispatch(getAlbumSuccess(res.data)))
    .catch((err) => dispatch(getAlbumFailure(err)));
};


export const makeGetSearchRequest = (payload) => (dispatch) => {
  dispatch(getAlbumRequest());

  axios
    .get(`${process.env.REACT_APP_BASE_URL}/api/home/search`, {
      params: {
        q: payload,
      },
    })
    .then((res) => dispatch(getAlbumSuccess(res.data)))
    .catch((err) => dispatch(getAlbumFailure(err)));
};
