

const express = require('express')
const utils=require('./utils')
const app = express()
var bodyParser=require("body-parser");
const Db= require('./DB')
const cors=require('cors')
const port = 3333
const MongoClient = require('mongodb').MongoClient;
const uri = "mongodb://admin:admin@cluster0-shard-00-00-avmgf.mongodb.net:27017,cluster0-shard-00-01-avmgf.mongodb.net:27017,cluster0-shard-00-02-avmgf.mongodb.net:27017/test?ssl=true&replicaSet=Cluster0-shard-0&authSource=admin&retryWrites=true&w=majority";
const api_url='https://simplescraper.io/api/6c6Sziukbi4h7AgW7Gd7?apikey=Ui0mBkg76NeBDR9NUG04cz5X5SuVms5H&limit=20'
const productsService=require('./ProductsService');

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(cors());


const client = new MongoClient(uri, { useNewUrlParser: true,useUnifiedTopology: true});
client.connect(err =>
     {
  console.log("connected");
  

});




app.get('/',async (req, res) => res.send(await utils.check()));

app.post('/api/v1/signUp',async (req,res)=>
{
  const user  = req.body;
  res.send(await Db.users.signUp(client,user));
  
});

app.post('/api/v1/signIn',async (req,res)=> {
    const user = req.body;
    res.send(await Db.users.signIn(client,user));
})

app.post('/api/v1/updateDetails',async(req,res)=> {
    const user = req.body;
    
    
    res.send(await Db.users.updateDetails(client,user));
});



app.get('/api/v1/Products/:department',async (req,res)=>
{
     
      
res.send(await productsService.GetAll(req.params.department,req.query));

});

app.get('/api/v1/Products',async (req,res)=>
{

    res.send(await productsService.GetAllProducts());
});


app.get('/api/v1/Products/:department/:id',async (req,res)=>
{
    res.send(await productsService.Get(req.params.id,req.params.department));
});

app.get('/api/v1/Products/:department/GetByBrand/:brand',async (req,res)=>
{
    res.send(await productsService.GetByBrand(req.params.brand,req.params.department));
});

app.get('/api/v1/Filters/:department',async (req,res)=>
{
    res.send(await productsService.GetFilters(req.params.department));
});



app.listen(port, () => {});