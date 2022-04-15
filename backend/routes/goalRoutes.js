const express=require('express')

const router=express.Router();

const {getGoals,setGoals,updGoals,delGoals}=require('../controller/goalController')

const {protect}=require('../middleware/authmiddleware')

router.route('/').get(protect,getGoals).post(protect,setGoals)




module.exports=router