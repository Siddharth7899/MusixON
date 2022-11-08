const mongoose = require("mongoose");

const musicSchema = new mongoose.Schema({
    song_name:{
        type: String
    },
    song_src:{
        type: String
    },
    song_img_src:{
        type:String
    },
    singer_name:{
        type:String
    }
},{
    timestamps:true
}) 

const userSchema = new mongoose.Schema({
    name: {
        type: String,
        trim:true,
        required: [true,"Name is required"],
        max:64
    },
    email:{
        type:String,
        required:[true,"Email is required"],
        unique: true,
    },
    password:{
        type:String,
        required:[true,"password is required"],
    },
    recentlyPlayedSong:{
        type: [musicSchema],
    }
});

module.exports = mongoose.model("Guest",userSchema);