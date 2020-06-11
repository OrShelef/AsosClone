

const User=require('../models/userModel');

const AppError=require('../Utils/AppError');
const Auth=require('../Utils/Auth');

exports.signUp = async (req,res,next) => {

        const result=await User.create(req.body);
      
        const token= Auth.getToken(result._id);
            res.status(200).json({
                status:'success',
                token,
                data:result
            });
        }
    

exports.signIn = async (req,res,next)  => {

       const result=await User.findOne({email:req.body.email});
       const token= Auth.getToken(result._id);
       const passwordCheck=result.comparePassword(req.body.password,result.password);

       if(!result || !passwordCheck) return next(new AppError(401,"password or user is not correct"));
       
       res.status(200).json({
        status:'success',
        token,
        data:result
    }); 

}

exports.updateDetails = async (req,res) => 
{
       const result=await User.findByIdAndUpdate({_id:req.body._id},req.body,
        {
            new:true,
            runValidators:true
        });
       
        
        res.status(200).json({
            status:'success',
            data:result
        });
}

