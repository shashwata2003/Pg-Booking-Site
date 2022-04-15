const asyncHandler=require('express-async-handler')

const Doc=require('../models/docModel')



const setDocs = asyncHandler(async (req,res)=>{

    
   const docs= await Doc.create({
         
         name: req.body.name,
         email:req.body.email,
         aadharUrl: req.body.aadharUrl,
         contact: req.body.contact,
         
     })
     res.status(200).json(docs)})

  

module.exports={
    setDocs}