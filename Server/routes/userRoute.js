

const express=require('express');
const controller=require('../controllers/userController');
const catchFunc=require('../utils').catchFunc;

const router=express.Router();

router
.post('/signIn',catchFunc(controller.signIn))
.post('/signUp',catchFunc(controller.signUp))
.put('/',catchFunc(controller.updateDetails))


module.exports=router;