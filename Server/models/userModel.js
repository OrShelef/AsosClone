

const mongoose=require('mongoose');
const validator=require('validator');
const stringAndUnique=require('../utils').stringTypeUnique;
const Schema=mongoose.Schema;
const bcrypt=require('bcryptjs');


const boolType={type:Boolean,default:false};

const prefrences=new Schema({
    email:boolType,
    text:boolType
});
const userSchema=new Schema({
    email:{
        type:String,
        required:true,
        unique:true,
        validate:[validator.isEmail,'this is not a correct email address']

    },
    firstName:stringAndUnique('First Name',false),
    lastName:stringAndUnique('Last Name',false),
    password:{
        type:String,
        minlength:[10],
        required:true,
    },
    passwordChangedAt:Date,
    day:{type:Number,required:true,min:1,max:31,default:1},
    month:{type:Number,required:true,min:1,max:12,default:1},
    year:{type:Number,required:true,min:1900,max:2030,default:2020},
    gender:{
        type:String,
        required:true,
        enum:['Womenwear','menwear']
    },
    discounts_and_sales:boolType,
    new_stuff:boolType,
    your_exclusives:boolType,
    asos_partnerts:boolType,
    addresses:[new Schema({
        firstName:stringAndUnique('First Name',false),
        lastName:stringAndUnique('Last Name',false),
        phone:{type:String,required:true,validate:[validator.isMobilePhone,'must be correct phone nnumber']},
        country:stringAndUnique('Country',false),
        address:stringAndUnique('Address',false),
        address2:String,
        city:stringAndUnique('City',false),
        _country:String,
        postcode:stringAndUnique('PostCode',false),
        defaultDelivary:boolType,
        defualtBilling:boolType

    })],
    paymentMethods:[new Schema({
        cardNumber:{
            type:String,
            required:true,
            unique:true,
            validate:[validator.isCreditCard,'this is not a correct credit card number']
        },
        expDate:new Schema(
            {  month:{type:Number,required:true,min:1,max:12,default:1},
               year:{type:Number,required:true,min:1900,max:2030,default:2020},}),
        holder:stringAndUnique('Name Holder',false)
    })],
    contactPrefrences:new Schema({
        discount_sales:prefrences,
        new_stuff:prefrences,
        exclusives:prefrences,
        asos_partnerts:prefrences
    })
   

});

userSchema.pre('save',async function(next){

    if(!this.isModified('password'))return next();

    this.password=await bcrypt.hash(this.password,12);
});

userSchema.methods.comparePassword=async function(inputPassword,userPassword){
    return await bcrypt.compare(inputPassword,userPassword);
}

userSchema.methods.changedPasswordAfter=function(timeStamp){
    if(this.passwordChangedAt)
    {
        const parsedTimestamp=parseInt(this.passwordChangedAt.getTime()/1000,10);
    }

    return timeStamp < parsedTimestamp; 
}

const User=mongoose.model('Users',userSchema);


module.exports=User;