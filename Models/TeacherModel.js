const mongoose = require("mongoose");
const TeacherSchema = require("../Schemas/TeacherSchema");



const TeacherModel = mongoose.model("Teacher", TeacherSchema);



module.exports = TeacherModel;