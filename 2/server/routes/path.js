const express = require('express');
const routes = express.Router();
const studentData = require("../model/data.js");

routes.get('/',(req,res)=>{
    res.send("Welcome to student data server side");
})

routes.get('/get',async(req,res)=>{
    try {
        const allData = await studentData.find();
        res.json(allData);
    } catch (error) {
        res.json({message:error});
    }

})

routes.post('/post',async(req,res)=>{
    const savedData = new studentData ({
        name:req.body.name,
        email:req.body.email,
        password:req.body.password
    })
    try {
        const data = await savedData.save();
        res.json(data);
    } catch (error) {
        res.json({message:error});
        
    }
})

routes.patch('/:patchId',async(req,res)=>{
    try {
        const updateOne = await studentData.updateOne(
            {_id: req.params.patchId},
            {name:req.body.name ,email:req.body.email,password:req.body.password }
        )
        res.json(updateOne);
    } catch (error) {
        res.json({message:error});
        
    }
})
routes.delete('/:deleteId',async(req,res)=>{
    try {
        const deleted = await studentData.remove(
            {_id: req.params.deleteId}
        )
        res.json(deleted);
    } catch (error) {
        res.json({message:error});
    }
})


module.exports = routes;