
const utils=require('./utils');
var ObjectId = require('mongodb').ObjectID;
const type="Products";
exports.GetAllProducts=async ()=>
{
   
}

exports.GetAll=(client,depId,{offset=0,limit=72})=>
{ 
    return utils.GetById(client,type,{DepartmentID:depId},'Products not found');
}
exports.Get=(client,id)=>
{
    return utils.GetById(client,type,{Id:id},'Product not found',false);
}

exports.GetByBrand=(brand,dep)=>
{
   return {};
}

exports.GetFilters = (client,id) =>
{ 
    return utils.GetById(client,'SubMenu',{menuId:id},'Submenu not found',false);
}