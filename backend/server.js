const express = require("express");
const cors = require("cors");

const homeRoute = require("./Routes/home");
const loginRoute = require("./Routes/login");
const addAlbum=require("./Routes/addAlbum")
const connectDB = require("./Config/db");

const dotenv = require("dotenv");

const app = express();
const port = 8000;
dotenv.config();

connectDB();

app.use(express.json());
app.use(cors());

app.use("/api", homeRoute);
app.use("/api", loginRoute);
app.use("/api", addAlbum);

app.listen(port, () => {
  console.log("Listeing at port", port);
});
