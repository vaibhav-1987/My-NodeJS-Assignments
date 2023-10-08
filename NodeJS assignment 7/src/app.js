const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const marioModel = require('./models/marioChar');

// app.use(express.urlencoded({ extended: true }));
// app.use(express.json());
// app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.get("/mario",async(req,res)=>{
    try{
        const marios = await marioModel.find()
        res.status(200).json({
            status:"Success",marios
        })
    }
    catch(err){
        res.json({
            status:"Failed",
            err
        })
    }
})  

app.get("/mario/:id",async(req,res)=>{
    try{
        const id = req.params.id
        const mario = await marioModel.findById(id)
        res.status(200).json({
            status:"Success",mario
        })
    }
    catch(err){
        res.json({
            status:"Failed",
            err
        })
    }
})  

app.post("/mario",async(req,res)=>{
    try{
        const {name,weight}=req.body
        // const mario= await new marioModel({
        //     name,weight
        // }).save()
        const mario = await marioModel.create({
            name,weight
        })

        res.status(200).json({
            status:"Success"
            ,mario
        })
    }
    catch(err){
        res.json({
            status:"Failed",
            err
        })
    }
})  

app.patch("/mario/:id",async(req,res)=>{
    try{
        const id = req.params.id
        const {name,weight}=req.body
        const mario = await marioModel.findByIdAndUpdate(id,{
            name,weight})
        
        res.status(200).json({
            status:"Success",mario
        })
    }
    catch(err){
        res.json({
            status:"Failed",
            err
        })
    }
})  

app.delete("/mario/:id",async(req,res)=>{
    try{
        const id = req.params.id
        const mario = await marioModel.findByIdAndDelete(id)
        res.status(200).json({
            status:"Success",mario
        })
    }
    catch(err){
        res.json({
            status:"Failed",
            err
        })
    }
})  

module.exports = app;




