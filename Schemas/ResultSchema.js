const mongoose = require("mongoose");

const ResultSchema = new mongoose.Schema({

        studentName:{
            type:String,
            required:true
        },
        studentID:{
            type:String,
            required:true
        },
        className:{
            type:String,
            required:true
        },
        email:{
            type:String,
            required:true 
        },

        phoneNumber:{
            type:Number,
            required:true 

        },
      
      
        className:{
            type:String,
            required:true 

        },

        subject:{
            type:String,
            required:true
        },
        marks:{
            type:Number,
            required:true
        },
        examDate:{
            type:String,
            required:true 

        },
       



})

module.exports = ResultSchema;