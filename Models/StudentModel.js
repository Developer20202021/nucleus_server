const mongoose = require("mongoose");
const StudentSchema = require("../Schemas/StudentSchema");





const StudentModel = mongoose.model("Student", StudentSchema);



module.exports = StudentModel;