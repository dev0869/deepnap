const asyncHandle = require("express-async-handler");
const CareerModel = require("../Modals/careerModel");
const ContactModel = require("../Modals/contactModel");
const QuoteModel = require("../Modals/quoteModel");
const EmployeeModel = require("../Modals/empModel");

const getAdminData = asyncHandle(async (req, res) => {
  const contacts = await ContactModel.find();
  const enquiry = await QuoteModel.find();
  const carrier = await CareerModel.find();
  const employees = await EmployeeModel.find();
  res.json({ contacts, enquiry, carrier,employees });
});

module.exports = { getAdminData };
