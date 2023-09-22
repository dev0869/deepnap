const mongoose = require("mongoose");

const careerSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    trim: true, 
  },
  email: {
    type: String,
    required: true,
    trim: true,
    lowercase: true, 
  },
  phone: {
    type: String,
    trim: true,
  },
  designation: {
    type: String,
    trim: true,
  },
  date: {
    type: Date,
    default: Date.now,
  },
  resume:{
    type:String,
    required:[true,"please provide your cv"]
  },
});

const careerModel = mongoose.model("Career", careerSchema);
module.exports = careerModel;
