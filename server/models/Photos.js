const mongoose = require("mongoose")

const PhotosSchema = new mongoose.Schema({

    title:{
        type: String,
    },

    imageUrl:{
        type: String,
        required: true
    }
},
{
    timestamps: true
})

module.exports = mongoose.model("Photos",PhotosSchema)