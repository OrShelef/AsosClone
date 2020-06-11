

const moongose=require('mongoose');
const Schema=moongose.Schema;
const stringAndUnique=require('../utils').stringTypeUnique;



const subDepartmentSchema=new Schema({
    menuId:stringAndUnique('menuId'),
    Header:stringAndUnique('Header',false),
    Description:String,
    Filters:[new Schema({
        name:String,
        isSingleSelection:Boolean,
        isPrice:{type:Boolean,default:false},
        items:[new Schema({
            name:String,
            count:String,
            selected:Boolean
        })]
    })],
    pills:[String]
});




const SubMenu=moongose.model('SubMenu',subDepartmentSchema);

module.exports=SubMenu;
