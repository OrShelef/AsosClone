
const response=require('./Response');

exports.GetById=(client,type,filter,err,multi=true)=>
{
    const collection = client.db('Asos').collection(type);

    return new Promise((resolve,reject)=> {
        collection.find(filter)
       .toArray(async (error,result)=> {
           if(error)
            reject(error);
        if(result.length>0) {
            resolve(response.Ok('',multi?result:result[0]))
        } 
        else 
            resolve(response.Not_Ok(err))
       })
    })
}


exports.asyncForEach=async (array, callback)=> {
    for (let index = 0; index < array.length; index++) {
      await callback(array[index], index, array);
    }
  }

