const Albums=require("../Model/albums")
const Songs=require("../Model/songs")

   const searchAlbums = async (req, res) => {
       const {q}=req.query
       if(q.length>0){
        let temp = await Albums.find( { album_name: { $regex:new RegExp(q),'$options' : 'i'} } );
        Songs.populate(temp, "songs")
        .then((data)=>{
                return res.status(200).json([...data])
        })           
        .catch((err) =>{return res.status(400).json("Error:" + err)});
    }
    else{
        return res.status(200).json([])
    }

  };
  
  module.exports = {searchAlbums };
  