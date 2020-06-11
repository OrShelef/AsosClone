
const catchAsync=require('../utils').catchFunc;
const AppError=require('../Utils/AppError');
const API= require('../Utils/API');

exports.getOne=Model=>catchAsync(async (req,res,next)=>
{

        const doc=await Model.findById(req.params.id);

        if(!doc) return next(new AppError(404,'no document was found!'));
     
        res.status(200).json({
            status:'success',
            data:doc
        }); 
   
})


exports.getAll=Model=>catchAsync(async (req,res,next)=>
{
    console.log(req.query);
    
        const docs=new API(Model.find(req.params.department && {DepartmentId:req.params.department}),req.query)
        .filter()
        .sort()
        .paginate()
        .limitFields(); 
        const result=await docs.query;
        if(!result) return next(new AppError(404,'no documents was found!'));
     
        res.status(200).json({
            status:'success',
            data:result
        }); 
       
})

