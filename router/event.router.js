const express= require('express');
const router =express.Router();
const validate=require('../models/event.model');
const event= require('../models/event.model.js');

router.get('/', (req, res)=>{
    event.find((err, result)=>{
        if(err)
        res.status(404).send(err)
        else
        res.status(200).send(result);
    })
})
router.get('/:id', (req, res)=>{
    event.findById({_id:req.params.id},(err, result)=>{
        if(err)
        res.status(404).send(err)
        else
        res.status(200).send(result);
    })
})
router.delete('/:id',(req,res)=>{
    event.findByIdAndDelete({_id:req.params.id},(err,result)=>{
    if(err) console.log(err);
    else res.status(200).send(result);
    console.log("Event has been deleted")
   })
})
router.post('/',async(req,res)=>{
    const { error} = validate(req.body)
    if(error) 
       return res.status(400).send(error.details[0].message);
        let newTask=new event({
        eventname:req.body.eventname,
        start:req.body.start,
        end:req.body.end,
        startt:req.body.startt,
        endt:req.body.endt,
        image:req.body.image,
        location:req.body.location,
        adultprice:req.body.adultprice,
        childprice:req.body.childprice,
        vegprice:req.body.vegprice,
        nonvegprice:req.body.nonvegprice,
        drinksprice:req.body.drinksprice, 
        startbook:req.body.startbook,
        endbook:req.body.endbook,
        startbookt:req.body.startbookt,
        endbookt:req.body.endbookt,
        description:req.body.description
        });
        newTask.save((err,result)=>{
            if(err) console.log(err);
            else res.status(200).send(result);
        })
  })
router.put('/:_id', (req, res)=>{
    event.findByIdAndUpdate({_id:req.params._id}, {$set:{
        eventname:req.body.eventname,
        start:req.body.start,
        
        end:req.body.end,
        startt:req.body.startt,
        endt:req.body.endt,
        image:req.body.image,
        location:req.body.location,
        adultprice:req.body.adultprice,
        childprice:req.body.childprice,
        vegprice:req.body.vegprice,
        nonvegprice:req.body.nonvegprice,
        drinksprice:req.body.drinksprice, 
        startbook:req.body.startbook,
        
        endbook:req.body.endbook,
        startbookt:req.body.startbookt,
        endbookt:req.body.endbookt,
        description:req.body.description

    }}, 
    (err, result)=>{
        if(err)
        res.status(404).send(err)
        else
        res.status(200).send(result);
    })
})
module.exports=router
