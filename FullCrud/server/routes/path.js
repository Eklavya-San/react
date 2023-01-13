const express = require('express');
const router = express.Router();
const BoysData = require('../model/TheBoys.js');
router.get('/',(req,res)=>{
    res.send("Welcome to nightlab");
})


router.get('/get',async(req,res)=>{
    try {
        const savedData = await BoysData.find();
        res.json(savedData);
    } catch (error) {
        res.json({message:error})
    }
})


router.post ('/post',async(req,res)=>{
    const data = new BoysData({
        name:req.body.name,
        email:req.body.email,
        password:req.body.password
    })
    try {
        const savedData = await data.save();
        res.json(savedData);
    } catch (error) {
        res.json({message:error})
    }
})

router.delete('/:id',async(req,res)=>{
    try {
        const deletedPost = await BoysData.remove({_id:req.params.id});
        res.json(deletedPost);
    } catch (error) {
        res.json({message:error})
        console.log(error);
    }
})

router.patch('/:id',async(req,res)=>{
    try {
        const updatedPost = await BoysData.updateOne({_id:req.params.id},{name:req.body.name,email:req.body.email,password:req.body.password})

        res.json(updatedPost);
    } catch (error) {
        res.json({message:error});
    }
})

router.patch('/:id',(req,res)=>{

})
module.exports = router;