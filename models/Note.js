const mongoose = require("mongoose")


const noteSchema= new mongoose.Schema({
    name:{ type: String,required: true},
    title:{ type: String,required: true},
    discription:{type:String,required: true},
}, {timestamps: true })

module.exports= mongoose.model("Note",noteSchema)
