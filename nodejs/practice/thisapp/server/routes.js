
const express = require('express');
const router = express.Router();
const Food = require('./models/Food')

router.get('/',(req,res)=>{
    res.send("we are on home  of food!")
})


router.get('/get',async(req,res)=>{
    try{
        const foods  = await Food.find();
        res.json(foods);
    }catch(error){
        res.json({message:error})
    }
})

router.post('/post',async(req,res)=>{
    const food = new Food ({
        foodName:req.body.foodName,
        daySinceIAte:req.body.daySinceIAte
    });

    try{
        const savedFood = await food.save();
        res.json(savedFood);
    }catch(error){
        res.json({message:error})
    }
})

router.post('/post',async(req,res)=>{
    const food = new Food ({
        foodName:req.body.foodName,
        daySinceIAte:req.body.daySinceIAte
    });

    try{
        const savedFood = await food.save();
        res.json(savedFood);
    }catch(error){
        res.json({message:error})
    }
})


module.exports = router;