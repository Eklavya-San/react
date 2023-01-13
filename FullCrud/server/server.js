const express = require('express');
const mongoose = require ('mongoose')
const bodyparser = require('body-parser');
const app = express();
const port = 5000;
const routes = require('./routes/path.js')
const cors = require('cors')
app.use(bodyparser.json())
app.use(cors('*'));
app.use("/",routes);
mongoose.set('strictQuery', false);
mongoose.connect(`mongodb://127.0.0.1:27017/nightlab`,(error)=>{
    if(error){
        console.log({message:error});
    }else{
        console.log("Connected to Database Congrats!!");
    }
})
app.listen(port,(err)=>{
    if(err){
        console.log(err);
    }else{
        console.log(`Server is listening to ${port}`);
    }
})


