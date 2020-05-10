const response=require('./Response');
var ObjectId = require('mongodb').ObjectID;

exports.signUp = async (client,user) => {

    return await new Promise((resolve,reject)=> {
        const db = client.db("Asos");

        db.collection('Users').find({email:user.email})
        .toArray(async (err,result)=> {
            if(err)
             reject(err);

         if(result.length==0)
         {
            const response = await this.InsertUser(client,user);
            resolve({status:response.result.ok==1?response.Ok():response.Not_Ok('didnt inserted to db')});
         }
         else
         resolve(response.Not_Ok('email is already exists'));
        })   
    })
 
}

exports.InsertUser= async (client,user)=>
{
    const db = client.db("Asos");
    return await db.collection('Users').insertOne(user)
}

exports.signIn = async (client,user) => {
    const users = client.db('Asos').collection('Users');

    return new Promise((resolve,reject)=> {
       users.find({email:user.email,password:user.password})
       .toArray(async (error,result)=> {
           if(error)
            reject(error);
        if(result.length>0) {
            resolve(response.Ok('',result[0]))
        } 
        else 
            resolve(response.Not_Ok('User not found'))
       })
    })
}

exports.updateDetails = async (client,user) => {
    const users = client.db('Asos').collection('Users');
    
    return new Promise(async (resolve,reject)=> {
        const id=user._id;
        console.log(id);
        
       const check=(await  users.find
       (
        {
            _id:{$ne:ObjectId(user._id)}
            ,email:user.email
        }
        ).toArray()).length==0;
    
      
       
       if(check)
        {
           delete user._id;
           const a=await users.updateOne({_id:ObjectId(id)},{$set:user});
          if(a.result.ok==1)
           {
               resolve(response.Ok('',{...user,_id:id}));
           }
           else
           {
               resolve(response.Not_Ok('update not working'));
           }

        }
    })
}

