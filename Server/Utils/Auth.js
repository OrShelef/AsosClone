
const jwt=require('jsonwebtoken');
const catchAsync=require('../Utils').catchFunc;
const AppError=require('./AppError');
const {promisify} =require('util');
const User=require('../models/userModel');

exports.getToken=(id)=>{
    return jwt.sign({id:id},process.env.JWT_SECRET,{expiresIn:process.env.JWT_EXPIRES})
}


exports.protectedRoute=catchAsync(async (req,res,next)=>{

    let token;

    if(req.headers.auth && req.headers.auth.startsWith("Bearer")){
        token=req.headers.auth.split(' ')[1];
    }

    if(!token) return next(new AppError(401,'token is not sent'));

    const decoded=await promisify(jwt.verify)(token,process.env.JWT_SECRET);

    const user=await User.findById(decoded.id);

    if(!user) return next(new AppError(401,'this user not exist anymore'));

    if(user.changedPasswordAfter(decoded.iat))return next(401,'User changed his password please log in again.')

    req.user=user;

    next();
});
