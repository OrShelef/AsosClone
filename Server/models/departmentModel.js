
const mongoose=require('mongoose');
const stringAndUnique=require('../utils').stringTypeUnique;
const Schema=mongoose.Schema;

const departmentSchema=new Schema({
    id:stringAndUnique('Id'),
    Name:stringAndUnique('Name'),
    Menus:[new Schema({
        id:stringAndUnique('Id'),
        Name:stringAndUnique('Name'),  
    })]
});

const Department=mongoose.model('Departments',departmentSchema);

module.exports=Department;