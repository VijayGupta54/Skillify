const mongoose = require("mongoose");

const enrollementSchema = new mongoose.Schema({

    userid:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"User",
        required:true,
    },
    courses:[
        {
            courseid:{
                type:mongoose.Schema.Types.ObjectId,
                ref:"Course",
                required:true,
            },
            progress:{
               type:Number,
               default:0,
               min:0,
               max:100,
               required:true,
            },
            completedLessons:[
                {
                   type:mongoose.Schema.Types.ObjectId,
                   ref:"Lesson",
                   required:true,
                }
            ]
        }
    ],    
});

const Enrollement = mongoose.model("Enrollement", enrollementSchema);

module.exports = Enrollement;