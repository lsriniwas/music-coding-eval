import { REQUEST_ALBUM_DETAILS, REQUEST_ALBUM_DETAILS_FAILURE, REQUEST_ALBUM_DETAILS_SUCCESS } from "./actionTypes"

const initialState = {
    album:"",
    isLoading:false,
    error:false,
}

const singleAlbumReducer= (state = initialState, { type, payload }) => {
    switch (type) {
    case REQUEST_ALBUM_DETAILS:{
        return{
            ...state,
            isLoading:true
        }
    }
    case REQUEST_ALBUM_DETAILS_SUCCESS:{
        return{
            ...state,
            album:payload,
            isLoading:false
        }
    }
    case REQUEST_ALBUM_DETAILS_FAILURE:{
        return{
            ...state,
            error:payload,
            isLoading:false
        }
    }
    default:
        return state
    }
}

export {singleAlbumReducer}