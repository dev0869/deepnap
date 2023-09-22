const mongoose = require("mongoose");
const validator = require("validator");
const phoneRegex = /^[0-9]{10}$/;

const quoteSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, "Please enter a your name"],
    trim: true,
  },
  email: {
    type: String,
    required: [true, "Please enter your email"],
    trim: true,
    lowercase: true,
    validate(value) {
      if (!validator.isEmail(value)) {
        throw new Error("Invalid Email");
      }
    },
  },
  phone: {
    type: String,
    trim: true,
    required: [true, "Please enter your phone number"],
    validate: {
      validator: function (number) {
        return phoneRegex.test(number);
      },
      message: "Please enter a valid 10-digit phone number",
    },
  },
  city: {
    type: String,
    trim: true,
    required: [true, "Please enter your city"],
  },
  date: {
    type: Date,
    default: Date.now,
  },
  requirement: {
    type: String,
    required:[true, "Please enter your requirement"],
  },
  remark:{
    type:String,
    
  }
});

const quoteModel = mongoose.model("Quote", quoteSchema);

module.exports = quoteModel;
