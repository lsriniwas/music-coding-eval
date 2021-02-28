const express = require("express");
const fetchAllAlbums = require("../Controllers/albums-controller");
const { searchAlbums } = require("../Controllers/search-album-controller");

const router = express.Router();

router.get("/home/:sort/:genre", fetchAllAlbums);
router.get("/home/search",searchAlbums)
module.exports = router;
