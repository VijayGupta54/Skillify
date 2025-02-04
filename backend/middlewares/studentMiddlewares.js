const Joi = require("joi");

const registerSchema = Joi.object({

    firstName: Joi.string().min(3).max(15).required(),
    lastName: Joi.string().min(0).max(15),
    email : Joi.string().email({ minDomainSegments: 2 }).required(),
    password: Joi.string().min(6).max(20).pattern(new RegExp('^[a-zA-Z0-9]{3,30}$')).required(),
});

const loginSchema = Joi.object({
    email : Joi.string().email({minDomainSegments : 2}).required(),
    password : Joi.string().min(6).max(20).pattern(new RegExp('^[a-zA-Z0-9]{3,30}$')).required(),
});


const validteRegistration = (req, res, next)=>{

    try{
        const userDetails = req.body;
        const result = registerSchema.validate(userDetails);
        if(result.error){
            return res.status(201).json(result.error.message);
        }else{
            req.value = result.value;
            next();
        }
    }catch(err){
        console.log(err);
    }
}

const validateLogin = (req, res, next) => {
    try{
      
        const loginDetails = req.body;
        const result = loginSchema.validate(loginDetails);

        if(result.error){
            return res.status(401).json(result.error.message);
        }

        req.value = result.value;

        next();

    }catch(err){
       return res.status(401).json({message: "Login Validation Failed ! Some error occured in login validation"});
    }
}


module.exports = {validteRegistration, validateLogin};