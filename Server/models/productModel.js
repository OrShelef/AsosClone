const mongoose=require('mongoose');
const stringTypeUnique=require('../utils').stringTypeUnique;

const productSchema=new mongoose.Schema(
    {
        Name:stringTypeUnique('Name'),
        Id:stringTypeUnique('Id'),
        ProductCode:{type:String,unique:true},
        Image:{
            type:String,
            default:"https://upload.wikimedia.org/wikipedia/commons/thumb/a/ac/No_image_available.svg/240px-No_image_available.svg.png"
        },
        Prices:new mongoose.Schema({
            Current:new mongoose.Schema({
                Text:{type:String,required:true},
                Value:{type:Number,required:true}
            }),
            Previous:new mongoose.Schema({
                Text:{type:String},
                Value:{type:Number}
            }),
            Discount:{type:String}
        }),
        Department:stringTypeUnique('Department',false),
        DepartmentID:stringTypeUnique('Department Id',false),
        Color:String,
        Currency:{type:String,default:'ILS'},
        Media:new mongoose.Schema({
            Images:[String],
            Video:String
        }),
        Description:new mongoose.Schema({
            Header:String,
            items:[String]
        }),
        SizeAndFit:new mongoose.Schema({
            Header:String,
            Data:String
        }),
        Brand:{type:String,default:'None'},
        BrandDescription:{type:String,default:'None'},
        ProductsYouMayKnow:[new mongoose.Schema({
            Image:String,
            _id:String
        })],
        ProductType:{type:String,default:'None'}

    }
)

const Product=mongoose.model('Products',productSchema);

module.exports=Product;
