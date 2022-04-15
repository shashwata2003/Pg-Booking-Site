const express=require('express')

const router=express.Router();

const {setDocs}=require('../controller/docController')

const {protect}=require('../middleware/authmiddleware')


router.route('/').post(protect,setDocs)



module.exports=router