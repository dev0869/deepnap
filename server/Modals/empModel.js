const mongoose = require('mongoose');

const employeeSchema = new mongoose.Schema({
  employeeId: {
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
  photoUrl: {
    type: String, // Store the URL or file path of the employee's photo
  },
});

const Employee = mongoose.model('Employee', employeeSchema);

module.exports = Employee;
