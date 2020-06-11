

const mongoose=require('mongoose');
const express = require('express')
const app = express()
var bodyParser=require("body-parser");
const cors=require('cors')
const AppError=require('./Utils/AppError');
const port =process.env.PORT || 3333;


const productRouter=require('./routes/productRoute');
const departmentRouter=require('./routes/departmentRoutes');
const userRouter=require('./routes/userRoute');
const devenv=require('dotenv');
const errorController=require('./controllers/errorController');
devenv.config({path:'./config.env'});
const DB=process.env.DATABASE.replace('<PASSWORD>',process.env.DATABASE_PASSWORD);

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(cors());
app.use('/api/v1/Products/:department',productRouter);
app.use('/api/v1/Department',departmentRouter);
app.use('/api/v1/User',userRouter);
app.all('*',(req,res,next)=>
{
    next(new AppError(404,`${req.originalUrl} is not found`));
})
app.use(errorController);


mongoose.connect(DB,
    {
        useNewUrlParser:true,
        useCreateIndex:true,
        useFindAndModify:false
    }).then(res=>{
        console.log("connected");
    });

app.get('/',async (req, res) => res.send("Hello"));
app.listen(port, () => {});