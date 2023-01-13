const express = require('express');
const mongoose =require('mongoose');
const bodyparser=require('body-parser')
const cors =require('cors');
const app = express();
const routes = require('./routes/path.js');
app.use(bodyparser.json());
app.use(cors('*'));
app.use('/',routes);

mongoose.connect('mongodb://127.0.0.1:27017/sports',(error)=>{
    if(error){
        console.log(error);
    }else{
        console.log("Connected to db");
    }
})

app.listen(5000,(error)=>{
    if(error){
        console.log(error);
    }else{
        console.log("Server is listening to port no 5000");
    }
})
