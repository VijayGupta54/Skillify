const mongoose = require("mongoose");

const courseSchema = new mongoose.Schema({

    title:{
        type:String,
        required:true
    },

    description:{
        type:String,
        required:true
    },

    price:{
        type:Number,
        required:true,
        min:0
    },

    category:{
        type:String,
        required:true,
    },

    img:{
        type:String,
    },

    instructor:{
        type:mongoose.Schema.Types.ObjectId,
        ref: "User",
        required:true,
    },

    students:[
        {
            type:mongoose.Schema.Types.ObjectId,
            ref:"User",
            required:true,
        }
    ],
    
    lessons :[
        {
            type:mongoose.Schema.Types.ObjectId,
            ref:"lesson",
            required:true,
        }
    ],
    
    validUpTo:{
        type:Number,
        required:true,
    }

});

const Course = mongoose.model("Course", courseSchema);

module.exports = Course;