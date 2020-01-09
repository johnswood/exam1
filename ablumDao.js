
const mongoose=require('mongoose')

let AlbumSchema={
    album_id:Number,
    album_name:String,
    public_time:String,
    week : Number,
    price: Number,
    cover: String,
    singers: [
        {"singer_id":Number,"singer_name":String}
    ]
}

mongoose.model("album",AlbumSchema)
let albumModel=mongoose.model("album")
function addAlbum(album,callback) {
    //for(album of albums){
        //console.log(album);
        let b=  albumModel.create(album,function (err,newalbum) {
            if(!err) callback(newalbum);

        });
    //}

}



module.exports={addAlbum}
