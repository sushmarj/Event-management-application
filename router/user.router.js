const express= require('express');
const router =express.Router();
const validate=require('../models/user.model');
const User= require('../models/user.model.js');
const _=require('lodash');
const bcrypt=require('bcrypt');
const config=require('config');
const json=require('json');
const jwt=require('jsonwebtoken');
const auth=require('../middleware/auth.middleware');
const log=require('../middleware/log.middleware')
router.get('/', (req, res)=>{
    User.find((err, result)=>{
        if(err)                                                                                                                                                                                                                                                                                        
        res.status(404).send(err)
        else
        res.status(200).send(result);
    })
      
})
router.get('/:id', (req, res)=>{
    User.findById({_id:req.params.id},(err, result)=>{
        if(err)
        res.status(404).send(err)
        else
        res.status(200).send(result);
    })
})                         
router.delete('/:id',(req, res)=>{
    User.findByIdAndDelete({_id:req.params.id},(err,result)=>{
    if(err) console.log(err);
    else res.status(200).send(result);
    console.log("log has been deleted")
   }) 
})
router.get('/me',auth,async(req,res)=>{
    const user=await User.findById({_id:req.user._id}).select("-password");
    res.send(user)
})
router.post('/', async(req,res)=>{
    //check for validation error
     const {error}=validate(req.body)
     if(error)
    return res.status(400).send(error.details[0].message);
    //check for existence
    let user=await User.findOne({username:req.body.username});
    if(user)
    return res.status(400).send("User already registered");
    //create new User
    let newUser=new User(_.pick(req.body,['username','password']))
    const salt=await bcrypt.genSalt(10);
    newUser.password=await bcrypt.hash(newUser.password,salt)
    await newUser.save();
    const token=jwt.sign({_id:newUser._id, username:newUser.username},config.get('jwtPrivateKey'))
    res.header('x-auth-token', token)
    .status(200).send(JSON.parse(_.pick(newUser,['_id','username'])))
})

// router.post('/', async(req,res)=>{
//     const{error}=validate(req.body)
//     if(error)
//     return res.status(404).send(error.details[0].message);
//     let user=await login.findOne({email:req.body.email});
//     if(user)
//     return res.status(400).send("User already exists");
//     let newlogin= new login(_.pick(req.body,['username','email', 'password']))

//     const salt=await bcrypt.gensalt(10);
//     newlogin.password=await bcrypt.hash(newlogin.password, salt);
//     await newlogin.save();
//     const token=jwt.sign({_id:newlogin._id,email:newlogin.email}, config.get('jwtprivatekey'));
//     res.header('x-auth-token', token).status(200).send(_.pick(newlogin, ['name','email']))
// })
router.put('/:id', (req, res)=>{
    User.findByIdAndUpdate({_id:req.params.id}, {$set:{
        username:req.body.username,
        password:req.body.password

    }}, 
    (err, result)=>{
        if(err)
        res.status(404).send(err)
        else
        res.status(200).send(result);
    })
})
module.exports=router
