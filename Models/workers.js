const mongoose = require('mongoose');

const workerSchema = new mongoose.Schema({
  phone : Number,
  password : String,
  empID : String,
  vehicle : String,
  name : String,
  Location : String
})
const workers = mongoose.model("workers" , workerSchema);
module.exports =  workers;
