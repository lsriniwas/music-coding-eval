const Artists = require("../Model/artists");
const Albums = require("../Model/albums");
const Songs=require("../Model/songs")

const handleLogin = async (req, res) => {
  try {
    let { username, password } = req.body;
    const user = await Artists.findOne({username:username,password:password},{username:0,password:0});
    if (!user) {
      res.status(400).json({
        error: true,
        message:
          "Sorry, we can't find an account with this combination. Please try again",
      });
      return;
    }
    else{
       let temp= await Albums.populate(user,"albums")
       temp=Songs.populate(temp,{path:"albums.songs"})
        .then((data)=>{
            return res.status(200).json({data:data,login:true})
        })
        .catch((err)=>{
            return res.status(404).json({message:"Error Fetching the data"})
        })
    }

  } catch (err) {
    res.status(400).json({
      error: true,
      success: false,
      message: "Something went wrong",
    });
  }
};


const handleArtist = async (req, res) => {
  try {
    let { id} = req.body;
    const user = await Artists.findById(id,{username:0,password:0});
       let temp= await Albums.populate(user,"albums")
       temp=Songs.populate(temp,{path:"albums.songs"})
        .then((data)=>{
            return res.status(200).json({data:data,login:true})
        })
        .catch((err)=>{
           
            return res.status(404).json({message:"Error Fetching the data"})
        })

  } catch (err) {
    res.status(400).json({
      error: true,
      success: false,
      message: "Something went wrong",
    });
  }
};

module.exports = {handleLogin,handleArtist};
