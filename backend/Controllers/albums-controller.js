const Albums=require("../Model/albums")
const Songs=require("../Model/songs")
//returns all the Albums
const handleFetchAlbums=async(req,res)=>{
    const {sort,genre}=req.params
    if(genre=="all"){
        var temp= await Albums.find({})
    }else{
        var temp= await Albums.find({genre:genre})
    }
   Songs.populate(temp,"songs")
    .then((data)=>{
        if(sort=="desc"){
            var updatedData=data.sort((a,b)=>b.year-a.year)
            return res.status(200).json(updatedData)
        }
            var updatedData=data.sort((a,b)=>a.year-b.year)
            return res.status(200).json(updatedData)

    })
    .catch((err)=>{
        console.log(err)
        return res.status(404).json({message:"Error Fetching the data"})
    })

}



  module.exports=handleFetchAlbums
