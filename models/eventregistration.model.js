const mongoose =require("mongoose");

const eventregistrationSchema =mongoose.Schema({
    fullname:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true
    },
    mobileno:{
        type:Number,
        required:true
    },
    headcountadult:{
        type:Number,
        required:true
    },
    headcountchild:{
        type:Number
        
    },
    headcountbaby:{
        type:Number
        
    },
    id:{
        type:String
       
    },
    veg:{
        type:Number
    },
    nonveg:{
        type:Number
    },
    drinks:{ 
        type:Number
    }
})
const EventReg= module.exports= mongoose.model('EventReg', eventregistrationSchema);