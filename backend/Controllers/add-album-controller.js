const Albums=require("../Model/albums")
const Artists=require("../Model/artists")
const Songs=require("../Model/songs")
const handleNewAlbum=async (req,res)=>{
        let {album_data,id}=req.body
        const {album_img,album_name,genre,year}=album_data
        const newAlbum = new Albums({
            songs:[],
            album_name: album_name,
            genre:genre,
            year:year,
            album_img: album_img
          });
        
          try {
            var addedAlbum = await newAlbum.save();
            res
            .status(200)
            .json({ messsage: true, userInfo: addedAlbum });
          } catch (err) {
            res.status(400).send(err);
          } 
}

const handleNewAlbumId=async(req,res)=>{
    const {artist_id,album_id}=req.body
    let {albums}=await Artists.findById(artist_id,{albums:1,_id:0})
    albums.push(album_id)
    try{
        await Artists.updateOne({_id:artist_id},{$set:{albums:[...albums]}})
        return res.status(200).json({message:true,userInfo:album_id})
    }
    catch(err){
        return res.status(400).json({message:false})
    }
}


const handleNewSong=async (req,res)=>{
  let {name,duration}=req.body
  const newSong = new Songs({
     name,
     duration
    });
  
    try {
      var addedSong = await newSong.save();
      res
      .status(200)
      .json({ messsage: true, userInfo: addedSong });
    } catch (err) {
      res.status(400).send(err);
    }
}


const handleNewSongId=async (req,res)=>{
    const {song_id,album_id}=req.body

    let {songs}=await Albums.findById(album_id,{songs:1,_id:0})
    songs.push(song_id)
    try{
        await Albums.updateOne({_id:album_id},{$set:{songs:[...songs]}})
        return res.status(200).json({message:true,userInfo:album_id})
    }
    catch(err){
        return res.status(400).json({message:false})
    }
}
module.exports={handleNewAlbum,handleNewAlbumId,handleNewSong,handleNewSongId}