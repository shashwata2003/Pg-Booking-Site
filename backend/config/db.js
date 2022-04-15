const mongoose = require('mongoose');

const connectDB= ()=>{
    try{
        const conn= mongoose.connect(process.env.MONGO_URI)
        console.log("Connected Database")
    }
    catch(error){
     console.log(error);
     
    }
}

module.exports = connectDB