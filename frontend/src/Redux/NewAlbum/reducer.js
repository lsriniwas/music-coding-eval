import { NEW_ALBUM_FAILURE, NEW_ALBUM_REQUEST, NEW_ALBUM_SUCCESS } from "./actionTypes"

const initialState = {
    addAlbum:false,
    albumId:"",
 isLoading:false,
 error:false,
 message:"",
}

const  newAlbumReducer= (state = initialState, { type, payload }) => {
   
    switch (type) {

    case NEW_ALBUM_REQUEST:
        return { ...state, 
            isLoading:true
        }
    case NEW_ALBUM_SUCCESS:{
        return{
            ...state,
            albumId:payload.userInfo,
            addAlbum:true,
            message:payload.message,
            isLoading:false
        }
    }
    case NEW_ALBUM_FAILURE:{
        return{
            ...state,
            error:true,
            message:payload.message,
            isLoading:false
        }
    }
    default:
        return state
    }
}

export {newAlbumReducer}