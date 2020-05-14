
const utils=require('./utils');
const type="Departments";

exports.Get=async (client,id)=>
{
    return utils.GetById(client,type,{id:id}, type+ ' not found',false);
}
exports.GetAll=async (client)=>
{
    return utils.GetById(client,type,{},type+ ' not found');
}

exports.GetSubDepartment=async (client,id)=>
{
    return new Promise(async (res,rej)=>{
        const dep=await  utils.GetById(client,type,{id:id}, type+ ' not found',false);
  
    
        let menus=[];
       utils.asyncForEach(dep.data.Menus,async (sub) => 
       {

         const menu=await utils.GetById(client,'SubMenu',{menuId:`${sub._id}`}, 'SubMenu not found',false);
         menus.push(menu.data);
        
         

       }).then(data=>{
         
           res(menus);
           
       })
           
            
 
    });
}
    
 