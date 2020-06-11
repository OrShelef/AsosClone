

const express=require('express');
const controller=require('../controllers/departmentController');
const catchFunc=require('../utils').catchFunc;
const router=express.Router();

router
.get('/:id/:SubMenu',catchFunc(controller.GetSubDepartment))
.get('/:id',controller.Get)
.get('/:id/SubMenus',catchFunc(controller.GetSubDepartments))
.get('/',controller.GetAll)


module.exports=router;