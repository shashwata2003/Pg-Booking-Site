const mongoose=require('mongoose')

const goalSchema= new mongoose.Schema({
    
    address:{
        type:String
    },
   imgUrl:{
        type:String
    },
    type:{
        type:String
    },
    email:{
        type:String,
        sparse:true,
    },
    rent:{
        type:String
    }
})

const model=mongoose.model('goal',goalSchema)

module.exports = model;