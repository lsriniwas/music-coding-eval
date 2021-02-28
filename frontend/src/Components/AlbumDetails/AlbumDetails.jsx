import React from 'react'
import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useHistory, useLocation } from 'react-router'
import AccessTimeIcon from '@material-ui/icons/AccessTime';
import { getSingleAlbum } from '../../Redux/ShowAlbumDetails/action'
import "./AlbumDetails.css"
export const AlbumDetails = () => {
    const { search } = useLocation()
    const dispatch = useDispatch()
    const { album } = useSelector(state => state.singleAlbum)
    useEffect(() => {
        const id = search.split("=")[1]
        dispatch(getSingleAlbum(id))
    }, [])
    console.log(album)
    return (
        <div className="root">
            <div className="album-wrapper">
                <div>
                    <img src={album.album_img} width="100%" height="200px" alt="" />
                </div>
                <div className="single-album-details">
                    <div>
                        <h3>{`Album: ${album.album_name}`}</h3>
                    </div>
                    <div>
                        <h3>{`Year of Release: ${album.year}`}</h3>
                    </div>
                    <div>
                        <h3>{`Genre: ${album.genre}`}</h3>
                    </div>
                </div>
                <div>
                    <table style={{ width: '500px' }} aria-label="simple table">
                        <thead>
                            <tr>
                                <th>#</th>
                                <th align="right">TITLE</th>
                                <th align="right">
                                    <AccessTimeIcon fontSize="small" style={{ color: '#fff' }} />
                                </th>
                            </tr>
                        </thead>
                        <tbody>
                            {album.songs?.map((song, i) => (
                                <tr key={song._id}>
                                    <td component="th" scope="row">
                                        {i + 1}
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


/*
album_img: "https://i.imgur.com/0co7yF5.jpg"
album_name: "Hello"
genre: "Pop"
songs: Array(2)
0:
duration: "3:00"
name: "Hello"
_id: "603a12aedb1bf815a1f983d8"
__proto__: Object
1:
duration: "3:01"
name: "Hello1"
_id: "603a12aedb1bf815a1f983d9"
__proto__: Object
length: 2
__proto__: Array(0)
year: 2020
_id: "603a12b7e85595cfc33bd42e"
*/