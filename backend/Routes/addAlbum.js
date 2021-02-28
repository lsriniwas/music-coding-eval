const express = require("express");
const {handleNewAlbum,handleNewAlbumId, handleNewSong, handleNewSongId}=require("../Controllers/add-album-controller");
const { handleSingleAlbum } = require("../Controllers/single-album-details");

const router = express.Router();

router.post("/add/album", handleNewAlbum);
router.post("/add/album/id", handleNewAlbumId);
router.post("/add/song/id", handleNewSong);
router.post("/add/song", handleNewSongId);
router.post("/album",handleSingleAlbum)
module.exports = router;