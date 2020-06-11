
exports.asyncForEach=async (array, callback)=> {
    for (let index = 0; index < array.length; index++) {
      await callback(array[index], index, array);
    }
  }

  exports.stringTypeUnique=(name,unique=true)=>{
  
    return {type:String,required:[true,name+' is required'],unique:unique};
} 


exports.catchFunc=(func)=>
{
  return (req,res,next)=>{
    func(req,res,next).catch(next);
  }
}