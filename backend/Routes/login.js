const express = require("express");
const {handleLogin,handleArtist} = require("../Controllers/artist-login-controller");

const router = express.Router();

router.post("/login", handleLogin);
router.post("/fetch", handleArtist);

module.exports = router;
