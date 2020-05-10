

const json= require('jsonfile');
const utils=require('./utils');


exports.GetAllProducts=async ()=>{
   
    
    return await  utils.getAll();
}

exports.GetAll=(dep,{offset=0,limit=72})=>{
    
    
    return new Promise((res,rej)=>{
        json.readFile(utils.getFileName(dep),(err,data)=>{
           
            if(err) rej(err);

            else{
              
              
                
                res({products:data.products.slice(offset*72,offset*72+72),total:data.products.length});
            }
        })
    });
}
exports.Get=(id,dep)=>{
  
    return new Promise((res,rej)=>{
        json.readFile(utils.getFileName(dep),(err,data)=>{

            if(err) rej(err);

            else{
           
              
                res(data.products.filter(product=>product.id==id));
            }
        })
    });
}

exports.GetByBrand=(brand,dep)=>{
    return new Promise((res,rej)=>{
        json.readFile(utils.getFileName(dep),(err,data)=>{

            if(err) rej(err);

            else{
           
              
                res(data.products.filter(product=>product.brandName.toLowerCase().includes(brand.toLowerCase())));
            }
        })
    });
}

exports.GetFilters = (dep) =>{
    return new Promise((res,rej)=>{
        json.readFile(utils.getFileName(dep),(error,data)=>{
            if(error)
                rej(error);
            else {
                res(data.facets);
            }
        })
    })
}