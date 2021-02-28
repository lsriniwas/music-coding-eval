import axios from "axios";
import { NEW_ALBUM_FAILURE, NEW_ALBUM_REQUEST, NEW_ALBUM_SUCCESS } from "./actionTypes";

const requestNewAlbum=()=>({
    type:NEW_ALBUM_REQUEST
})

const requestNewAlbumSuccess=(payload)=>({
    type:NEW_ALBUM_SUCCESS,
    payload
})

const requestNewAlbumFailure=(err)=>({
    type:NEW_ALBUM_FAILURE,
    payload:err
})

const getNewAlbum=(payload)=>dispatch=>{
    dispatch(requestNewAlbum())

    var config = {
        method: 'post',
        url: `${process.env.REACT_APP_BASE_URL}/api/add/album`,
        headers: { 
          'Content-Type': 'application/json'
        },
        data : payload
      };
      
     axios(config)
     .then(res=>{
        //  const album_id=res.userInfo._id
        return res
        
    })
    .then(res=>{
        let album_id=res.data.userInfo._id
        let artist_id=payload.id
        dispatch(requestNewAlbumSuccess(res.data))
        dispatch(handleAlbumId(album_id,artist_id))
    })
     .catch(err=>{
         
         console.log(err.response)
     })

}

export const handleAlbumId=(album_id,artist_id)=>(dispatch)=>{
    let payload={
        album_id,artist_id
    }
    var config = {
        method: 'post',
        url: `${process.env.REACT_APP_BASE_URL}/api/add/album/id`,
        headers: { 
          'Content-Type': 'application/json'
        },
        data : payload
      };
      
     axios(config)
     .then(res=>{
        dispatch(requestNewAlbumSuccess(res.data))
    })
     .catch(err=>{
         dispatch(requestNewAlbumFailure(err))
     })
}

export {getNewAlbum}

const handleSong=(payload,albumId)=>dispatch=>{
    console.log(payload)
    var config = {
        method: 'post',
        url: `${process.env.REACT_APP_BASE_URL}/api/add/song/id`,
        headers: { 
          'Content-Type': 'application/json'
        },
        data : payload
      };
      
     axios(config)
     .then(res=>{
         return res
    })
    .then(res=>
       {    
           let temp=res.data.userInfo._id
           console.log(temp,albumId)
            dispatch(handleSongId(temp,albumId))
        }
        )
     .catch(err=>{
         dispatch(requestNewAlbumFailure(err))
     })
}
export {handleSong}


const handleSongId=(song_id,album_id)=>dispatch=>{
    let payload={album_id,song_id}
    var config = {
        method: 'post',
        url: `${process.env.REACT_APP_BASE_URL}/api/add/song`,
        headers: { 
          'Content-Type': 'application/json'
        },
        data : payload
      };
      console.log(config)
     axios(config)
     .then(res=>{
        dispatch(requestNewAlbumSuccess(res))
    })
     .catch(err=>{
         dispatch(requestNewAlbumFailure(err))
     })
}