const mongoose = require("mongoose");

const reviewModel = new mongoose.model({

    userid:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"User",
        required:true,
    },
    comment:{
        type:String,
        required:true,
    },
    rating:{
        type:Number,
        required:true,
        min:1,
    }

});

const Review = mongoose.model("Review", reviewModel);

module.exports = Review;