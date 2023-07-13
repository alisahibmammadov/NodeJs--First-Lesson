const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const customerSchema = new Schema({
  name: String,
  city: String,
});
const Customer  = mongoose.model("Customer", customerSchema)
module.exports = Customer
