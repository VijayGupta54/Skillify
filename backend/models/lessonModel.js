const mongoose = require("mongoose");

const lessonSchema = new mongoose.Schema({
    
    courseid:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"Course",
        required:true,
    },
    title:{
        type:String,
        required:true,
    },
    description:{
        type:String,
    },
    order:{
        type:Number,
    },
    content:{
      type:String,
      required:true,
    },
    completedBy:[
        {
            type:mongoose.Schema.Types.ObjectId,
            ref:"User",
        }
    ],
    duration:{
        type:Number,
    }
});

const Lesson = mongoose.model("Lesson", lessonSchema);

module.exports = Lesson;