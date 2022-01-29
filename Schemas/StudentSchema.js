const mongoose = require("mongoose");


const StudentSchema = new mongoose.Schema({

    profileImage:{
        type:String
    },
    firstName:{
        type:String,
        required:true
    },

    lastName:{
        type:String,
        required:true
    },
    dateOfBirth:{
        type:Date
    },
    fatherName:{
        type:String,
        required:true
    },
    motherName:{
        type:String,
        required:true
    },
    institutionName:{
        type:String,
        required:true
        
    },
    fatherOccupation:{
        type:String,
    },
   
    email:{
        type:String,
        required:true
    },
    phoneNumber:{
        type:Number,
        required:true
    },
    rollNumber:{
        type:Number,
        required:true
    },
    className:{
        type:Number,
        required:true
    },
    gender:{
        type:String,
        required:true
    },
    bloodGroup:{
        type:String,
    },
    parentPhoneNumber:{
        type:Number
    },
    presentAddress:{
        type:String,

    },
    permanentAddress:{
        type:String,
    },
    studentID:{
        type:String,
        default:" "
    },
  
    role:{
        type:String,
        default:"student"
    },
    notice:{
        type:Number,
        default:0
    },
    date:{
        type:String,
        
    },
    lastUpdated:{
        type:String,
        default:''
    },
    religion:{
        type:String,
        
    },
    paymentStatus:{
        type:String,
        default:"Due"
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


module.exports = StudentSchema;