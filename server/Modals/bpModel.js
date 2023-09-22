const mongoose = require("mongoose");

const bpSchema = new mongoose.Schema({
  businessProgamId: {
    type: String,
    required: true,
    unique: true,
  },
  name: {
    type: String,
    required: true,
  },
  mobile: {
    type: Number,
    required: true,
    unique: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  dateOfJoining: {
    type: Date,
    required: true,
  },
  gender: {
    type: String,
    required: true,
  },
  isWorking: {
    type: Boolean,
    required: true,
  },
  photo: {
    type: String, // Store the URL or file path of the employee's photo
  },
});

const BP = mongoose.model("BP", bpSchema);

module.exports = BP;
