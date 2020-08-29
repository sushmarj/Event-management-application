const express= require('express');
const router =express.Router();
const validate=require('../models/accountreg.model');
const Accountreg= require('../models/accountreg.model.js');

router.get('/', (req, res)=>{
    Accountreg.find((err, result)=>{
        if(err)
        res.status(404).send(err)
        else
        res.status(200).send(result);
    })
})
router.get('/:id', (req, res)=>{
    Accountreg.findById({_id:req.params.id},(err, result)=>{
        if(err)
        res.status(404).send(err)
        else
        res.status(200).send(result);
    })
})
router.delete('/:id',(req,res)=>{
    Accountreg.findByIdAndDelete({_id:req.params.id},(err,result)=>{
    if(err) console.log(err);
    else res.status(200).send(result);
    console.log("Account registration has been deleted")
   })
})
router.post('/',async(req,res)=>{
    const { error} = validate(req.body)
    if(error) 
       return res.status(400).send(error.details[0].message);
        let newTask=new Accountreg({
        username:req.body.username,
        password:req.body.password,
        email:req.body.email,
        gender:req.body.gender,
        mobileno:req.body.mobileno
     
        });
        newTask.save((err,result)=>{
            if(err) console.log(err);
            else res.status(200).send(result);
        })
  })
router.put('/:id', (req, res)=>{
    Accountreg.findByIdAndUpdate({_id:req.params.id}, {$Set:{
        username:req.body.username,
        password:req.body.password,
        email:req.body.email,
        gender:req.body.gender,
        mobileno:req.body.mobileno

    }}, 
    (err, result)=>{
        if(err)
        res.status(404).send(err)
        else
        res.status(200).send(result);
    })
})
module.exports=router
