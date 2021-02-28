const Albums=require("../Model/albums")
const Songs=require("../Model/songs")
const handleSingleAlbum=async(req,res)=>{
    const {_id}=req.body
   let temp=await Albums.findById(_id)
   await Songs.populate(temp,'songs').then(data=>{
       return res.status(200).json(data)
   })
   .catch(err=>{
       return res.status(400).json(err)
   })
}

module.exports={handleSingleAlbum}

