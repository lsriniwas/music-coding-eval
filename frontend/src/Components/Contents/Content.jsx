import React from 'react'
import { useState } from 'react'
import { useHistory } from 'react-router'
import { useDispatch, useSelector } from 'react-redux'
import { makeGetAlbumRequest } from '../../Redux/Album/action'
import "./Content.css"
import { Album } from '../SingleAlbum/Album'
import { Grid } from '@material-ui/core'
import Pagination from '@material-ui/lab/Pagination';


import { makeStyles } from '@material-ui/core/styles';
import axios from 'axios'

const useStyles = makeStyles((theme) => ({
    container: {
        flexGrow: 1,
        display: 'grid',
        gridTemplateColumns: 'repeat(12, 1fr)',
        gridGap: theme.spacing(3),
    },

}));
export const Content = () => {
    const [sort,setSort]=useState('asc')
    const [genre,setGenre]=useState("")
    const [page,setPage]=useState(1);
    const [totalPage,setTotalPage]=useState(1);
    const [next,setNext]=useState(false)
    const [prev,setPrev]=useState(false)
    const { albums, isLoading, error, message } = useSelector(state => state.albums)
    const { isAuth,user } = useSelector(state => state.login)
    const dispatch = useDispatch()
    const history=useHistory()
    const classes = useStyles();
    React.useEffect(() => {
        dispatch(makeGetAlbumRequest())
    }, [dispatch])

    const handleProfile=()=>{
        if(isAuth){
            var { data } = user
            var { _id,albums, name } = data
        }
        history.push(`/profile/${_id}`)
    }
    const handleSortAndFilter=()=>{
        dispatch(makeGetAlbumRequest(sort,genre))
    }

    const fetchData = () => {
        dispatch(makeGetAlbumRequest(sort,genre,page))
        }
      
      React.useEffect(() => {
        fetchData();
      }, [page]);

   const handleSingleAlbum=(id)=>{
    history.push(`/album?q=${id}`)
   }

    return (
        <div className="content-wrapper">
            <div className="content-filter">
                 <div>
                    {
                        isAuth
                         && 
                        <div className="my-profile" onClick={()=>handleProfile()}>My Profile</div>
                    }
                 </div>
                <div className="select-radio-filter">
                <div className="select-sort">
                        <select name="" id="" value={genre} onChange={(e)=>setGenre(e.target.value)}>
                            <option value="">All</option>
                            <option value="Pop">Pop</option>
                            <option value="Hip-hop and Rap">Hip-hop and Rap</option>
                            <option value="Country">Country</option>
                            <option value="K-Pop">K-Pop</option>
                        </select>
                    </div>
                    <div className="input-radio">
                        <div>
                            <label htmlFor="">asc</label>
                            <input type="radio" value="asc" name="sort" onChange={(e)=>setSort("asc")} id="" />
                        </div>
                        <div>
                            <label htmlFor="">desc</label>
                            <input type="radio" value="desc" name="sort" id="" onChange={()=>setSort("desc")} />
                        </div>
                    </div>
                    <div>
                        <button onClick={handleSortAndFilter}>Apply</button>
                    </div>
                </div>
               
            </div>

            {
                isLoading ?
                    <div>Loading...</div>
                    :
                    error ?
                        <div>{message}</div>
                        :
                        <div className={classes.root}>
                            <Grid container>
                                {
                                    albums?.map(album =>
                                        <Grid item key={album._id} xs={12} sm={6} md={3} lg={3} xl={3} onClick={()=>handleSingleAlbum(album._id)} >
                                            <Album album={album} />
                                        </Grid>
                                    )
                                }
                                {
                                    albums.length===0 && <div>No Album Available</div>
                                }
                            </Grid>
                        </div>
            }

            <div>
        {/* <Pagination  size="large" hidePrevButton={page===1&&true} hideNextButton={page===totalPage && true}	 count={totalPage} value={page}  variant="outlined" color="secondary" onChange={(e,p)=>setPage(p)} /> */}

            </div>
        </div>
    )
}
