const mongoose = require("mongoose");

const instructorSchema = new mongoose.Schema({

    firstName:{
        type:String,
        required:true,
    },
    lastName:{
        type:String,
    },
    email:{
        type:String,
        required:true,
        unique:true,
    },
    password:{
        type:String,
        required:true,
        select:false,
    },
    bio:{
        type:String,
    },
    courses:[
        {
            type:mongoose.Schema.Types.ObjectId,
            ref:"Course",
        }
    ]
});

const Instructor = mongoose.model("Instructor", instructorSchema);

module.exports = Instructor;