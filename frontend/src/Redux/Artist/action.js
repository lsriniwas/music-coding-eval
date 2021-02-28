import axios from "axios"

export const fetchArtist=(payload)=>dispatch=>{
    axios
    .get(`${process.env.REACT_APP_BASE_URL}/api/fetch`,{
        payload
    })
    .then(res=>console.log(res.data))
    .catch(err=>console.log(err))
}