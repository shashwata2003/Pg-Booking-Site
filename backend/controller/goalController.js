const asyncHandler=require('express-async-handler')
const Goal=require('../models/goalModel')
const User=require('../models/userModel')

const getGoals = asyncHandler(async (req,res)=>{

const goals= await Goal.find()
res.status(200).json(goals)})

const setGoals = asyncHandler(async (req,res)=>{

    
   const goal= await Goal.create({
         
         address: req.body.address,
         imgUrl:req.body.imgUrl,
         type: req.body.type,
         email: req.body.email,
         rent:req.body.rent
     })
     res.status(200).json(goal)})

  

module.exports={
    getGoals,
    setGoals}