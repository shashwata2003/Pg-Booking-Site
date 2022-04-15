const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');
const asyncHandler= require('express-async-handler');
const User= require('../models/userModel')
// post /api/users
const registerUser=async(req,res)=>{
    const name = req.body.name
    const email = req.body.email
    const password=req.body.password
   /* if(!name || !email || !password){
        res.status(400)
        throw new Error('Wrong Password')
    } */

    //check if user exists

    const userExists =  await User.findOne({email})

    if(userExists){
        res.status(404)
        res.send('The User Already Exists')
       
    }
    
    
   


    //user
    else{
    // Hash Passwords
        const salt= await bcrypt.genSalt(10)
        const hashedPassword = await bcrypt.hash(password,salt)

    const user= await User.create({
        name,
        email,
        password:hashedPassword
    })

    if(user){
        res.status(201).json({
            _id: user.id,
            name:user.name,
            email:user.email,
            token:generateToken(user._id),

        })
    }
    else{
        res.status(400)
        res.send('Invalid User Data')
    }
    }
    
}


// post /api/users/login
const loginUser=async(req,res)=>{
const {email,password} = req.body
const user= await User.findOne({email: email})

if(user && (await bcrypt.compare(password,user.password))){
    console.log("authenticated")
    res.status(201).json({
        _id: user.id,
        name:user.name,
        email:user.email,
        message:"authenticated",
        token:generateToken(user._id)
        
    })}
    else{
     res.status(404)
     res.send('User not authenticated')
    }

   
}


// GET /api/users/me and private 
const getMe =asyncHandler(async(req,res)=>{
  
   res.status(200).json(req.user)
})


//Generate JWT Token

const generateToken=(id)=>{
    return jwt.sign({id},process.env.JWT_SECRET,{
        expiresIn:'30d',
    })
}

module.exports = {
    registerUser,
    loginUser,
    getMe
}