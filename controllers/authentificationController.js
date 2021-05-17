const User= require('./../models/userModel')
const {promisify}=require('util')
const jwt =require('jsonwebtoken');
const catchAsync = require('../utils/catchAsync');
const AppError = require('../utils/appError');

exports.protect=async(req,res,next)=>{
    let token;
    //1 get token and check if it exist
    if(req.headers.authorization && req.headers.authorization.startsWith('baerer'))
   { token=req.headers.authorization.split(" ")[1]}
   if(!token)
   return next(new AppError("you are not loged in",401))
   //console.log(token)
    //2 verify the token 
    
   const decoded= await promisify( jwt.verify)(token,process.env.JWT_SECRET)
   
   
   //return next(new AppError("your token has expired",401))}
       //3 check if user still exist
       const fresh=await User.find(decoded.id)
       if(!fresh)
       {return next(AppError("your token is no longer active",401))}
    //4 check if user change password after token issued

    if(fresh.changedPasswordAfter(decoded.iat))
    {return next(new AppError("you recently changed password , log in again",401))}
req.user=fresh;
    next()
}
const signToken=(id)=>{
    return jwt.sign({id },process.env.JWT_SECRET,{expiresIn: process.env.JWT_EXPIRES_IN})
}

exports.signup=async(req,res)=>{
    try{
          
    const newUser =await User.create({
name:req.body.name,
email:req.body.email,
password:req.body.password,
passwordconfirm:req.body.passwordconfirm  })

 const token=  signToken(newUser._id)
    res.status(201).json({
        status:'succes',
        token,
        data:{
            user:newUser
        }
    })
    console.log('ok from here')
}
catch(err){console.log(err)
res.send(err)}
};
exports.login=async(req,res,next)=>{
    try{
        //console.log(req.headers)
           const {email,password}=req.body;
    //1 check email and password exist
    if(!email || !password)
  {  res.status(203).send('please provide an email and password')
 return next()}

    //2 check if user exist and password exist
    const user = await User.findOne({email}).select('+password');
     
    if(!user ||!(await user.correctPassword(password,user.password))){
        res.status(203).json({'status':'invalide',
                               'message':'adresse ou mot de passe incorrect'
    })
        return next()
    }
    //3 if every thing okey send jwt token to client
    const token =signToken(user._id);
      res.status(200).json({
        status:'succes',
        token,
        role:user.role

    })
}catch(err){console.log(err)}


}