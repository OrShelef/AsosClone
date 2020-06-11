

const express=require('express');
const controller=require('../controllers/productController');
const router=express.Router();
const catchFunc=require('../utils').catchFunc;

router
.get('/:id',controller.Get)
.get('/',controller.GetAll);

module.exports=router;