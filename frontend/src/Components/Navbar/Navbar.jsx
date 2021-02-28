import { Fade, Modal } from '@material-ui/core'
import React from 'react'
import { useState } from 'react'
import "./Navbar.css"
import { makeStyles } from '@material-ui/core/styles';
import { logout, makeLoginRequest } from '../../Redux/Login/actions';
import { useDispatch, useSelector } from 'react-redux'
import { Redirect, useHistory, useLocation, useParams } from 'react-router-dom';
import { DebounceInput } from "react-debounce-input";
import { useEffect } from 'react';
import { makeGetAlbumRequest, makeGetSearchRequest } from '../../Redux/Album/action';

const useStyles = makeStyles((theme) => ({
    modal: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
    },
    paper: {
        width: '500px',
        background: "#fff",
        border: '2px solid #000',
        boxShadow: theme.shadows[5],
    },
    username:{
        '& input':{
            width:'92%',
            padding:'10px 15px',
            outline:'none'
        }
    },
    password:{
        '& input':{
            width:'92%',
            padding:'10px 15px',
            outline:'none'
        }
    },
    button :{
        display:'flex',
        flexDirection:'row-reverse',
        '& button':{
        margin:'5px',
        padding:'10px',
        width:'100px',
        outline:'none',
        border:'none',
        }
        
    }
}));

export const Navbar = () => {
    const [searchBox, setSearchBox] = useState(false);
    const [open, setOpen] = useState(false);
    const [username,setUsername]=useState("");
    const [password,setPassword]=useState("");
    const {isAuth}=useSelector(state=>state.login);
    const dispatch = useDispatch();
    const classes = useStyles();
    const location=useLocation();
    const history=useHistory();
    const [checkProfile,setCheckProfile]=useState(false);
    const [search, setSearch] = useState("");
    useEffect(()=>{
        const pathname=location.pathname
        if(pathname==="/"){
            setCheckProfile(false)
        }
        else{
            setCheckProfile(true)
        }
    },[location])


    const handleOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    const handleLogin=()=>{
        if(username===""||password===""){
            alert("fill details")
        }else{
            dispatch(makeLoginRequest({username,password}))
            setUsername("")
            setPassword("")
        }
    }
    const handleLogout=()=>{
        dispatch(logout())
    }
    React.useEffect(()=>{
        if(isAuth){
            handleClose()
        }
    },[isAuth])
    const Debouncer = (e) => {
        if (e.length > 0) {
          dispatch(makeGetSearchRequest(e));
        } else {
            dispatch(makeGetAlbumRequest())
        }
        setSearch(e);
      };
    return (
        <div className="navbar">
            <div className="navbar-left">
                <div className="navbar-left-img">
                <img onClick={()=>history.push("/")} src="https://i.imgur.com/trLrzQt.png" alt="img"/>
                </div>
            </div>
            <div className="navbar-right">
                {!checkProfile&& <div className="input-search">
                <DebounceInput
              className="searchInput"
              minLength={0}
              value={search}
              placeholder="search albums"
              onBlur={() => setSearchBox(false)}
              debounceTimeout={1000}
              onChange={(e) => {
                Debouncer(e.target.value);
              }}/>
                </div>}
                <div>
                    {
                        !isAuth?
                        <button onClick={() => handleOpen()}>Login</button>
                             :
                        <button onClick={() => handleLogout()}>Logout</button>
                    }
                </div>
            </div>
            <Modal
                className={classes.modal}
                open={open}
                onClose={handleClose}
            >   
                <Fade in={open}>
                    <div className={classes.paper}>
                       <div className={classes.username}>
                           <div>
                           <label htmlFor="">username</label>
                           </div>
                           <div>
                            <input type="text" required name="" value={username} onChange={(e)=>setUsername(e.target.value)} id=""/>
                           </div>
                       </div>
                       <div  className={classes.password}>
                           <div>
                           <label htmlFor="">password</label>
                           </div>
                           <div>
                            <input type="password" name="" required value={password} onChange={(e)=>setPassword(e.target.value)} id=""/>
                           </div>
                       </div>
                       <div className={classes.button}>
                           <button onClick={()=>handleLogin()}>Login</button>
                       </div>
                    </div>
                </Fade>
            </Modal>
        </div>
    )
}
