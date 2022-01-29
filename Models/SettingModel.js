const mongoose = require("mongoose");
const SettingSchema = require("../Schemas/SettingSchema");


const SettingModel = mongoose.model("privateKey", SettingSchema);



module.exports = SettingModel;