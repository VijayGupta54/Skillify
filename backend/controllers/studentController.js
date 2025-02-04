const studentServices = require("../services/studentServices");
const jwt = require("jsonwebtoken");
const blacklistModel = require("../models/blacklistToken");


const registerStudent = async(req, res)=>{
    
    try{
        const {firstName, lastName, email, password} = req.value;
   
        if(!firstName || !email || !password){
           return res.status(401).json({message:"Please provide all information"});
        }

        const result = await studentServices.createUser({
            firstName:firstName,
            lastName:lastName,
            email:email,
            password:password,
        });

        if(result.message){
            return res.status(401).json(result.message);
        }

        return res.status(201).json(result);
        

      }catch(err){
       return res.status(401).json({message: "Internal Server Error !"});
      }
}

const loginStudent = async(req, res) => {
    try{
        const {email, password} = req.value;

        if(!email || !password){
            return res.status(401).json({message: "Either email or password is missing !"});
        }

        const result = await studentServices.checkLoginDetails({
            email:email,
            password:password,
        });

        if(result.message){
            return res.status(401).json(result.message);
        }

        const id = result.id;

        const token = jwt.sign({id}, process.env.JWT_SECRET, {expiresIn: "1h"});
        
        res.cookie("token", token, {httpOnly:true, maxAge : 60 * 60 * 1000});
        
        return res.status(201).json(result);

    }catch(err){
        // return res.status(401).json({message: "Internal Server Error ! Student doesn't login !"});
        console.log(err);
    }
}

const logout = async(req, res) => {
    try{

      const token = req.cookies.token;
    
      if(!token){
        return res.status(401).json({message: "token not found"});
      }

      res.clearCookie("token");

     await blacklistModel.create({blacklistToken:token});

     return res.status(201).json({message:"Logout Successfully"})

    }catch(err){
        console.log(err);
        return res.status(401).json({message:"Internal Server Error"});
    }
}


module.exports ={registerStudent, loginStudent, logout};