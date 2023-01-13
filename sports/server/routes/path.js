const express = require('express');
const Player = require('../model/Player.js')
const routes = express.Router();

routes.get('/',(req,res)=>{
    res.send("Hello");
})

routes.get('/get',async (req,res)=>{
    try {
        const dataArr = await Player.find();
        res.json(dataArr);
    } catch (error) {
        res.json({message:error});  
    }
})

routes.post('/post',async(req,res)=>{
    const data = new Player ({
        Name:req.body.Name,
        City:req.body.City,
        Age:req.body.Age,
        Matched_played:req.body.Matched_played,
        Sport:req.body.Sport,
        Dob:req.body.Dob
    })

    try {
        const savedData = await data.save();
        res.json(savedData);
    } catch (error) {
        res.json({message:error});
    }
})


module.exports = routes;