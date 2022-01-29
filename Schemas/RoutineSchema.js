const mongoose = require("mongoose");

const RoutineSchema = new mongoose.Schema({

        teacherName:{
            type:String,
            required:true
        },
        teacherSubject:{
            type:String,
            required:true
        },
        routineType:{
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
      
        day:{
            type:String,
            required:true 

        },
        className:{
            type:String,
            required:true 

        },

        topics:{
            type:String,
            required:true
        },
        timeFrom:{
            type:String,
            required:true 

        },
        timeTo:{
            type:String,
            required:true 

        },



})

module.exports = RoutineSchema;