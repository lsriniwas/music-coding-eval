const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const songSchema = new Schema(
  {
    name:{
        type:String
    },
    duration:{
         type:String
    }
    },
    {
      versionKey: false,
    }
);

module.exports = mongoose.model("Song", songSchema);
