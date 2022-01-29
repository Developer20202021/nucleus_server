const mongoose = require("mongoose");

const SettingSchema = new mongoose.Schema({

        privateKey:{
            type:String,
            required:true
        },
       key:{
            type:String,
            required:true,
            default:'0'
        }
      



})

module.exports = SettingSchema;