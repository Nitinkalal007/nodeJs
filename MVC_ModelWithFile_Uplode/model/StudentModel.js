// import mongoose from "mongoose";
// const studentschema=new mongoose.Schema({

// })


const { Schema, model } = require('mongoose');
const common={type:String,require:true,trim:true}
const studentschema = new Schema({
    std_name:{
        type:String,
        require:true,
        trim:true
    },
    // std_name:common,
    std_email:{
        ...common,
        unique:true
    },
    std_grid:{
        ...common,
        type:Number
    },
    std_profile:String,
        
    },
    {
   timestamps:true
    
})
const student = model('student', studentschema)
module.exports = student;