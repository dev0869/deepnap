const mongoose = require("mongoose");

const contactSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, "please enter your name"],
    trim: true,
  },
  email: {
    type: String,
    required: [true, "please enter your email"],
    trim: true,
    lowercase: true,
  },
  phone: {
    type: String,
    trim: true,
    required: [true, "please enter your phone"],
  },
  city: {
    type: String,
    trim: true,
    required: [true, "please enter your city"],
  },
  date: {
    type: Date,
    default: Date.now,
  },

});

const contactModel = mongoose.model("Contact", contactSchema);

module.exports = contactModel;
