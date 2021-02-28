import axios from "axios";
import { REQUEST_ALBUM_DETAILS, REQUEST_ALBUM_DETAILS_FAILURE, REQUEST_ALBUM_DETAILS_SUCCESS } from "./actionTypes";

const requestSingleAlbum=()=>({
    type:REQUEST_ALBUM_DETAILS
})
const requestSingleAlbumSuccess=(payload)=>({
    type:REQUEST_ALBUM_DETAILS_SUCCESS,
    payload
})

const requestSingleAlbumFailure=(err)=>({
    type:REQUEST_ALBUM_DETAILS_FAILURE,
    payload:err
})

const getSingleAlbum=(payload)=>(dispatch)=>{
    dispatch(requestSingleAlbum())
    
    let config={
        method:'post',
        url:`${process.env.REACT_APP_BASE_URL}/api/album`,
        headers: { 
          'Content-Type': 'application/json'
        },
        data:{
            _id:payload
        }
    }
    console.log(config)

    axios(config).then(res=>dispatch(requestSingleAlbumSuccess(res.data))).catch(err=>dispatch(requestSingleAlbumFailure(err.response)))
}

export {getSingleAlbum}