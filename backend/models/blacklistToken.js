const mongoose = require("mongoose");

const blacklistTokenSchema = new mongoose.Schema({

    blacklistToken:{
        type:String,
        required:true,
    },
    createdAt:{
        type:Date,
        default:Date.now,
        expires:"5h",
    }
   
    
});

const BlacklistToken = mongoose.model("BlacklistToken", blacklistTokenSchema);

module.exports = BlacklistToken;