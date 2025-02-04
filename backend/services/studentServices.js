const studentModel = require("../models/studentModel");
const bcrypt = require("bcrypt");


const createUser = async({firstName, lastName, email, password})=>{
  
    try{

      if(!firstName || !email || !password){
        return {message : "Please Provide all Information !"};
      }

      const hashedPassword = await bcrypt.hash(password, 10);

      const newStudent = await studentModel.create({
        firstName:firstName,
        lastName:lastName,
        email:email,
        password:hashedPassword,
      });

      newStudent.password = undefined;

      return newStudent;

    }catch(err){
        return {message: "Server Error ! User not Created "};
    }
}

const checkLoginDetails = async({email, password}) => {
    try{

        if(!email || !password){
            return {message : "Either email or password is missing !"}
        }

        const existingStudent = await studentModel.findOne({email:email}).select("+password");

        if(!existingStudent){
            return {message : "Email or password is incorrect"};
        }

        const matchPassword = bcrypt.compare(password, existingStudent.password);

        if(!matchPassword){
            return {message : "Email or password is incorrect"};
        }

        existingStudent.password = undefined;

        return existingStudent;

    }catch(err){
    //    return {message : "Internal Server Error ! User not found "};
      console.log(err);
    }
}

module.exports = {createUser, checkLoginDetails};