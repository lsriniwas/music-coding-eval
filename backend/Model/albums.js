const mongoose = require("mongoose");	
const Schema = mongoose.Schema;	

const albumSchema = new Schema(	
  {	
    album_name: {	
        type:String,	
        required:true	
    },	
    genre:{	
        type:String,	
        required: true,	
    },	
    year:{	
        type:Number,	
        required:true	
    },	
    album_img:{	
        type:String	
    },	
    songs: [{ type: Schema.Types.ObjectId, ref: "Song" }],	
    },	
    {	
      versionKey: false,	
    }	
);	

module.exports = mongoose.model("Album", albumSchema);