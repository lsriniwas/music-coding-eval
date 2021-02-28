import { InputLabel, MenuItem, Select, TextField } from '@material-ui/core'
import React from 'react'
import { useEffect } from 'react';
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getNewAlbum, handleSong } from '../../Redux/NewAlbum/action';
import "./AddAlbum.css"

let album_cover = [
    "https://i.imgur.com/MBUjaSr.jpg",
    "https://i.imgur.com/PMp5VBn.jpg",
    "https://i.imgur.com/LE7kUAv.jpg",
    "https://i.imgur.com/tHcNVpw.jpg",
    "https://i.imgur.com/hfzH1qd.jpg",
    "https://i.imgur.com/N8noDiN.png"
]

function getRandomInt(max) {
    return Math.floor(Math.random() * Math.floor(max));
}

export const AddAlbum = ({_id,onClose}) => {
    const [albumName, setAlbumName] = useState("")
    const [genre, setGenre] = useState("")
    const [year, setYear] = useState("")
    const [img, setImg] = useState("")
    const [name,setName]=useState("")
    const [duration,setDuration]=useState("")
    const dispatch=useDispatch()
    const [disable,setDisable]=useState(false)
    const {message,albumId}=useSelector(state=>state.newAlbum)
    useEffect(() => {
        let temp = album_cover[getRandomInt(6)]
        setImg(temp)
    }, [])
    const handleCose=()=>{
        onClose()
        setDisable(false)
        setAlbumName("")
        setGenre("")
        setYear("")
        setImg("")
        setName("")
        setDuration("")
    }
    const handleAddAlbum = () => {
        if (albumName === "" || genre === "" || year === "") {
            alert("Fill all details")
        }
        else {
            let payload = {
                album_data:{
                    songs: [],
                    album_name: albumName,
                    genre: genre,
                    year: year,
                    album_img: img,
                },
                id:_id
            }
            dispatch(getNewAlbum(payload))
            setDisable(true)
        }
    }
    const handleChange = (event) => {
        setGenre(event.target.value);
    };

    const handleSongData=()=>{
        let payload={
            name,
            duration
        }
        console.log(payload,albumId)
        dispatch(handleSong(payload,albumId))
        setName("")
        setDuration("")
    }
    return (
        <div className="new-music-wrapper">
            <div className="close" onClick={()=>handleCose()} style={{color:'red'}}>
                +
            </div>
            <div className="header">
                <h1>New Music</h1>
            </div>
            <div>
                <div className="new-album-details">
                    <TextField required value={albumName} onChange={e => setAlbumName(e.target.value)} label="Album Name" variant="outlined" />
                    <TextField required value={year} onChange={e => setYear(e.target.value)} label="Year" variant="outlined" />
                    <div>
                    <InputLabel>Genre</InputLabel>
                        <Select
                        value={genre}
                        onChange={handleChange}
                        label="Genre"
                        style={{width:'100px'}}
                        >
                        <MenuItem value="">
                            <em>None</em>
                        </MenuItem>
                        <MenuItem value="Pop">Pop</MenuItem>
                        <MenuItem value="Hip-hop and Rap">Hip-hop and Rap</MenuItem>
                        <MenuItem value="Country">Country</MenuItem>
                        <MenuItem value="K-Pop">K-Pop</MenuItem>
                        </Select>
                                
                        </div>
                </div>
                <div style={{ marginLeft: '15px' }}>
                    <img src={img} width="100px" height="100px" alt="" />
                </div>
            </div>
            <div className="new-album-add-btn">
                <button onClick={handleAddAlbum}>Add Album</button>
            </div>
           {
               <div>
                   <div><h2>ADD SONGS</h2></div>
                    <div className="add-song" id="add-song">
                          <TextField required value={name} onChange={e => setName(e.target.value)} label="Song Name" variant="outlined" />
                          <TextField required value={duration} onChange={e => setDuration(e.target.value)} label="Duration mins:secs" variant="outlined" />                          
                    </div>
                    <div>
                        <button onClick={handleSongData}>Add Song</button>
                    </div>
               </div>
           }
        </div>
    )
}

