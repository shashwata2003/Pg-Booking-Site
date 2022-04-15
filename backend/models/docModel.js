const mongoose=require('mongoose')

const docSchema= new mongoose.Schema({
    
    name:{
        type:String
    },
   email:{
        type:String
    },
    aadharUrl:{
        type:String
    },
    contact:{
        type:String,
        sparse:true,
    }
})

const model=mongoose.model('doc',docSchema)

module.exports = model;