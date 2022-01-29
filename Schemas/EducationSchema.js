const mongoose = require("mongoose");

const EducationSchema = new mongoose.Schema({

        institutionName:{
            type:String,
            required:true
        },
       
        degree:{
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
      
        gpa:{
            type:String,
            required:true 

        },
        board:{
            type:String,
            required:true 

        },

        session:{
            type:String,
            required:true
        }



})

module.exports = EducationSchema;