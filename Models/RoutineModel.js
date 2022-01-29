const mongoose = require("mongoose");
const RoutineSchema = require("../Schemas/RoutineSchema");




const RoutineModel = mongoose.model("Routine", RoutineSchema);



module.exports = RoutineModel;