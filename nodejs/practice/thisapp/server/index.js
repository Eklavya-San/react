const express = require ("express")
const app = express()
const mongoose = require("mongoose");
const FoodModel  =require("./models/Food");
const cors = require("cors");
const body = require("body-parser")

app.use(body.json())
app.use(cors());
app.use(express.json());


mongoose.connect('mongodb://127.0.0.1:27017/mis',{
    useNewUrlParser:true,
})

app.post("/insert", async (res,req) => {

    const foodname =req.body.foodname;
    console.log(foodname);

    const day =   req.body.daySinceIAte;
    console.log(day);

    const food = new FoodModel ({foodName:foodname,daySinceIAte:day});

    // FoodModel.save();//

    console.log(foodname);
    try{
        await food.save();
        console.log("saved data sucessfully");
        
    }catch(err){
        console.log(err)
    }
})

app.get("/", async (res,req) => {
    const foodname ="sham";
    const day = 2;
    const food = new FoodModel ({foodName:foodname,daySinceIAte:day});
    console.log(foodname);
    try{
        await food.save();
        console.log("saved data sucessfully");
        
    }catch(err){
        console.log(err)
    }
})
app.listen(3000,()=>{
    console.log("Server is running on port 3000");
}) 