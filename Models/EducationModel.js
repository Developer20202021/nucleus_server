const mongoose = require("mongoose");
const EducationSchema = require("../Schemas/EducationSchema");


const EducationModel = mongoose.model("education",EducationSchema);



module.exports = EducationModel;