
const utils=require('./utils');
const type="Departments";

exports.Get=async (client,id)=>
{
    return utils.GetById(client,type,{id:id}, type+ ' not found');
}
exports.GetAll=async (client)=>
{
    return utils.GetById(client,type,{},type+ ' not found');
}