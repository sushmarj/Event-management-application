const express= require('express');
const router =express.Router();
const validate=require('../models/eventregistration.model');
const EventReg= require('../models/eventregistration.model.js');

router.get('/', (req, res)=>{
    EventReg.find((err, result)=>{
        if(err)
        res.status(404).send(err)
        else
        res.status(200).send(result);
    })
})
router.get('/:id', (req, res)=>{
    EventReg.findById({_id:req.params.id},(err, result)=>{
        if(err)
        res.status(404).send(err)
        else
        res.status(200).send(result);
    })
})
router.delete('/:id',(req,res)=>{
    EventReg.findByIdAndDelete({_id:req.params.id},(err,result)=>{
    if(err) console.log(err);
    else res.status(200).send(result);
    console.log("Event registration has been deleted")
   })
})
router.post('/',async(req,res)=>{
    const { error} = validate(req.body)
    if(error) 
       return res.status(400).send(error.details[0].message);
        let newTask=new EventReg({
        fullname:req.body.fullname,
        email:req.body.email,
        mobileno:req.body.mobileno,
        headcountadult:req.body.headcountadult,
        headcountchild:req.body.headcountchild,
        headcountbaby:req.body.headcountbaby,
        id:req.body.id,
        veg:req.body.veg,
        nonveg:req.body.nonveg,
        drinks:req.body.drinks
        });
        newTask.save((err,result)=>{
            if(err) console.log(err);
            else res.status(200).send(result);
        })
  })
router.put('/:id', (req, res)=>{
    EventReg.findByIdAndUpdate({_id:req.params.id}, {$set:{
        fullname:req.body.fullname,
        email:req.body.email,
        mobileno:req.body.mobileno,
        headcountadult:req.body.headcountadult,
        headcountchild:req.body.headcountchild,
        headcountbaby:req.body.headcountbaby,
        id:req.body.id,
        veg:req.body.veg,
        nonveg:req.body.nonveg,
        drinks:req.body.drinks

    }}, 
    (err, result)=>{
        if(err)
        res.status(404).send(err)
        else
        res.status(200).send(result);
    })
})
module.exports=router
