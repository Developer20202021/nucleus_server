const mongoose = require("mongoose");


const TeacherSchema = new mongoose.Schema({

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
    subject:{
        type:String,
        
    },
    session:{
        type:String,
        
    },
    institutionName:{
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
   
   
    gender:{
        type:String,
        required:true
    },
    bloodGroup:{
        type:String,
    },
 
    presentAddress:{
        type:String,

    },
    permanentAddress:{
        type:String,
    },
    idNumber:{
        type:String,
        default:" "
    },
  
    role:{
        type:String,
        default:"teacher"
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
        
    }
    
   


})


module.exports = TeacherSchema;