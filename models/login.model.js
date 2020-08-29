const mongoose =require("mongoose");

const loginSchema =mongoose.Schema({
    username:{
        type:String,
        unique:true,
        required:true
        
    },
    password:{
        type:String,
        required:true
    }
    
   
})
const login= module.exports= mongoose.model('login', loginSchema);