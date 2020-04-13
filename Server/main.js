

const express = require('express')
const app = express()
var bodyParser=require("body-parser");
const cors=require('cors')
const port = 3333
const MongoClient = require('mongodb').MongoClient;
const uri = "mongodb+srv://admin:admin@cluster0-daweo.mongodb.net/test?retryWrites=true&w=majority";


app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(cors());


const client = new MongoClient(uri, { useNewUrlParser: true,useUnifiedTopology: true});
client.connect(err =>
     {
  
  console.log("connected");
  

});


app.get('/', (req, res) => res.send('Hello World!'));

app.post('/api/v1/signUp',(req,res)=>
{
    const body=req.body;
    if(!body) return res.json({status:'nok'});

  
    const collection = client.db("MyApp").collection("Users");
    const query={email:body.email};
    collection.findOne(query,(err,result)=>{
      if (err) throw err;

      if(result)
        return res.json({status:'nok',reason:'User already exists'})

     return collection.insertOne(body)
        .then(resolve=>res.json({status:'ok'}));
    })
    
   
});





app.listen(port, () => {});