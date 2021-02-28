import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Redirect, useHistory, useLocation } from 'react-router'
import AccessTimeIcon from '@material-ui/icons/AccessTime';
import "./Profile.css"
import { Fade, makeStyles, Modal, TableContainer, TableHead } from '@material-ui/core';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import { AddAlbum } from './AddAlbum';
import { fetchLoginData } from '../../Redux/Login/actions';
import { useEffect } from 'react';
import { fetchArtist } from '../../Redux/Artist/action';




const useStyles = makeStyles((theme) => ({
    modal: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
    },
    paper: {
        width: '400px',
        background: "#fff",
        border: '2px solid #000',
        boxShadow: theme.shadows[5],
        padding: theme.spacing(2, 4, 3),
    },
}));

export const Profile = () => {
    const [open,setOpen]=useState(false)
    const { user, isAuth } = useSelector(state => state.login)
    const dispatch=useDispatch()
    console.log(user)
    const classes=useStyles();
    const location = useLocation();


    useEffect(()=>{
        fetchArtistInfo()
    },[])

    const fetchArtistInfo=()=>{
        const id=location.pathname.split("/")[2]
        dispatch(fetchArtist(id))
    }
    
    if (isAuth) {
        var { data } = user
        var { _id,albums, name } = data
      
    }
    const handleOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };
    return isAuth ? (
        <div className="profile-wrapper">
           
            <div className="about">
                <div>
                    <h1>{name}</h1>
                </div>
                <div>
                   <button onClick={handleOpen}>ADD ALBUM</button>
                </div>
            </div>
            <div className="collections">
                 {
                    albums?.map(album =>
                        <div className="albums-wrapper" key={album._id}>
                            <div className="album-left">
                                <div className="album-cover" style={{ backgroundImage: `url(${album.album_img})`, backgroundPosition: '50% 50%', backgroundRepeat: 'no-repeat' }}>
                                    <div className="album-details">
                                        <div>
                                            <h1>{album.album_name}</h1>
                                        </div>
                                        <div className="album-details-bottom" >
                                            <h5>{album.genre}</h5>
                                            <h5>{album.year}</h5>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="album-right-songs">
                                <div  className="song">
                                    <table style={{width:'500px'}} aria-label="simple table">
                                            <thead>
                                                <tr>
                                                <th>#</th>
                                                <th align="right">TITLE</th>
                                                <th align="right">
                                                    <AccessTimeIcon fontSize="small" style={{color:'#fff'}} />
                                                </th>
                                                </tr>
                                            </thead>
                                        <tbody>
                                            {album.songs?.map((song, i) => (
                                                <tr key={song._id}>
                                                    <td component="th" scope="row">
                                                        {i+1}
                                                    </td>
                                                    <td align="right">{song.name}</td>
                                                    <td align="right">{song.duration}</td>
                                                </tr>
                                            ))}
                                        </tbody>
                                    </table>
                                    </div>
                            </div>
                        </div>
                    )
                }
            </div>
                
            <Modal
                className={classes.modal}
                open={open}
               
            >   
                <Fade in={open}>
                    <div classes={classes.paper}>
                        <AddAlbum _id={_id}  onClose={handleClose}  />
                    </div>
                </Fade>
         </Modal>
       
        </div>
    ) : (
        <Redirect to="/" />
    )
}
