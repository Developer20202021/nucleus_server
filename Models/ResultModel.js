const mongoose = require("mongoose");
const ResultSchema = require("../Schemas/ResultSchema");



const ResultModel =  mongoose.model("Result", ResultSchema);



module.exports = ResultModel;

