
const json =require('jsonfile');

exports.getFileName=(name)=>{
    switch (name) {
        case 'ActiveWear':return'./Activewear.json';
        case 'Clothing':return'./Clothing.json';
        case 'Sale':return'./Sale.json';
        case 'Outlet':return'./Outlet.json';
        case 'Accessories':return'./Accessories.json';
        case 'Brands':return'./Brands.json';
        case 'FaceBody':return'./Face_Body.json';
        case 'NewIn':return'./New_In.json';
        case 'Shoes':return'./Shoes.json';
   
        
        default:
            return'./Sale.json';
    }
}

exports.getAll=()=>
{
    return new Promise((res,rej)=>
    {
        var products=[];
        json.readFile('./Activewear.json',(err,activewear)=>{

            if(err) rej(err);

            else{
                products=products.concat(activewear.products);
                console.log(products.length);
                
                json.readFile('./Clothing.json',(err,clothing)=>
                {
                    if(err) rej(err);
                    else
                    products=products.concat(clothing.products);
                   console.log(products.length);

                    json.readFile('./Sale.json',(err,sale)=>
                    {
                    if(err) rej(err);
                    else
                    products=products.concat(sale.products);
                console.log(products.length);

                    res(products);
                     })
                })

            }
        })
    });
}


exports.check=()=>{
  return new Promise((res,rej)=>{
    json.readFile('./Clothing.json',(err,data)=>{
     
        res(data)
    })
  }) 
}