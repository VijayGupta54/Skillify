const mongoose = require("mongoose");
const uri = process.env.MONGO_URL;

const connectToDb = async()=>{
   try{
    await mongoose.connect(uri).then(()=>{
        console.log("connected to DB");
    });
   }catch(err){
    console.log(err);
   }
}

module.exports = connectToDb;