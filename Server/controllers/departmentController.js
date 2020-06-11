

const Department=require('../models/departmentModel');
const SubMenu=require('../models/subDepartmentModel');
const factory=require('../controllers/factoryHandler');

exports.Get=factory.getOne(Department);
exports.GetAll=factory.getAll(Department);

exports.GetSubDepartments=async(req,res)=>
{
     const depMenus=await Department.findOne({id:req.params.id},{Menus:1});
     const ids=depMenus.Menus.map(menu=>menu.id);
     const result=await SubMenu.find({
       menuId:{$in:ids}
     })
      res.status(200).json({
        status:'success',
        data:result
      })
}
  

exports.GetSubDepartment=async(req,res)=>
{
     const result=await SubMenu.findOne({
       menuId:{$in:req.params.SubMenu}
     })
      res.status(200).json({
        status:'success',
        data:result
      })
 
}
  