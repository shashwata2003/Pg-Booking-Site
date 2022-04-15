const jwt= require('jsonwebtoken')
const asyncHandler= require('express-async-handler')
const User= require('../models/userModel')

const protect= asyncHandler(async(req,res,next)=>{
    let token
    if(req.headers.authorization && req.headers.authorization.startsWith('Bearer')){
         try{
         //Get token from headers 
         token=req.headers.authorization.split(' ')[1];

         //verify token
         const decoded = jwt.verify(token,process.env.JWT_SECRET)
         
         //Get user from the tokens
         req.user= await User.findById(decoded.id).select('-password');

         next()


         }
         catch(err){
         console.log(err)
         res.send(401)
         
         }
    }

    if(!token){
        res.status(401)
       res.send("token not found")
    }
})

module.exports = {protect}