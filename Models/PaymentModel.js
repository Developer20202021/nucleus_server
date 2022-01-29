const mongoose = require("mongoose");
const PaymentSchema = require("../Schemas/PaymentSchema");


const PaymentModel = mongoose.model("payment",PaymentSchema);



module.exports = PaymentModel;