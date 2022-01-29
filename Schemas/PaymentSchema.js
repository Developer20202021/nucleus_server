const mongoose = require("mongoose");

const PaymentSchema = new mongoose.Schema({

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
        amount:{
            type:Number,
            required:true 

        },
        receiverName:{
            type:String,
            required:true 

        },
        receiverEmail:{
            type:String,
            required:true 

        },

        receiverNID:{
            type:String
           

        },
        receiverPhoneNumber:{
            type:Number,
            required:true 

        },
        paymentStatus:{
            type:String,
            default:"Paid"
            

        },



})

module.exports = PaymentSchema;