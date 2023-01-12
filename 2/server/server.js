const express = require('express');
const app = express();
const mongoose = require('mongoose');
const bodyparser = require('body-parser');
const cors = require('cors');
const port = 5000;
const mongoosePath = "mongodb+srv://Eklavya:Eklavya123@linux.raihajh.mongodb.net/?retryWrites=true&w=majority";
const studentData = require("./model/data.js");
const routes = require("./routes/path.js")
app.use(bodyparser.json());
app.use(cors('*'));
app.use('/',routes);
mongoose.connect(mongoosePath,(err)=>{
    if(err){
        console.log(err);
    }else{
        console.log("connected to db");
    }
})

app.listen(port,(err)=>{
    if(err){
        console.log(err);
    }else{
        console.log(`Server is listening to ${port}`);
    }
});