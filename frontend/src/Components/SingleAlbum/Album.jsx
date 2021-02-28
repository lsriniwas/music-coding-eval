import {  Paper } from '@material-ui/core'
import React from 'react'
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';


const useStyles = makeStyles((theme) => ({
    root: {
        display:'flex',
        maxWidth:'290px',
        marginBottom: theme.spacing(1),
        marginTop: theme.spacing(1),
        justifyContent:'space-between'
    },
  
    details: {
        display: 'flex',
        flexDirection: 'column',
        width:'30%'
    },
    content: {
        flex: '1 0 auto',
    },
    cover: {
        width:'65%'

    }
}));
export const Album = ({ album }) => {
    const classes = useStyles();
    return (
            <Card className={classes.root}>
                <div className={classes.details}>
                    <CardContent className={classes.content}>
                        <Typography component="h5" variant="h5">
                            {album.album_name}
                        </Typography>
                        <Typography variant="subtitle1" color="textSecondary">
                            {album.artist_name}
                        </Typography>
                        <Typography variant="subtitle1" color="textSecondary">
                            {album.genre}
                        </Typography>
                        <Typography variant="h6">
                            {album.year}
                        </Typography>
                    </CardContent>
                </div>
                <CardMedia
                    className={classes.cover}
                    image={album.album_img}
                    title="Live from space album cover"
                />
            </Card>
    )
}
