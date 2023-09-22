const User = require("../Modals/userModal");
const Employee = require("../Modals/empModel");

const addEmployee = async (req, res, next) => {
  try {
    const employeeData = req.body;
    const { name, email, mobile } = req.body;
    const newEmployee = new Employee(employeeData);
    await newEmployee.save();
    const user = await User.findOne({ email: req.body.email });
    if (!user) {
      req.body = { name, email, mobile, password: "#Deepnap123" ,role:"employee"};
      next();
    } else {
      res
        .status(201)
        .send({ message: "Employee is Added Successfully", newEmployee });
    }
  } catch (err) {
    if (err.code === 11000) {
      if (err.message.includes("mobile")) {
        res.status(400).json({ error: "Mobile number already exists" });
      } else if (err.message.includes("email")) {
        res.status(400).json({ error: "Email already exists" });
      } else if (err.message.includes("employeeId")) {
        res.status(400).json({ error: "Employee ID already exists" });
      } else {
        res.status(400).json({ error: "Duplicate data found" });
      }
    } else {
      console.error("Error adding employee:", err);
      res.status(500).json({ error: "Failed to add employee" });
    }
  }
};

const updateEmployee = async (req, res) => {
  try {
    const { employeeId } = req.params;
    const updatedEmployeeData = req.body;
    const updatedEmployee = await Employee.findOneAndUpdate(
      { employeeId },
      updatedEmployeeData,
      { new: true }
    );
    if (!updatedEmployee) {
      return res.status(404).json({ error: "Employee not found" });
    }
    res
      .status(200)
      .send({ message: "Employee is Updated Sucessfull", updatedEmployee });
  } catch (error) {
    console.error("Error updating employee:", error);
    res.status(500).json({ error: "Failed to update employee" });
  }
};
const deleteEmployee = async (req, res) => {
  try {
    const employeeId = req.params.id;
    const deletedEmployee = await Employee.findByIdAndRemove(employeeId);
    if (!deletedEmployee) {
      return res
        .status(404)
        .json({ success: false, message: "Employee not found" });
    }
    return res
      .status(200)
      .json({ success: true, message: "Employee deleted successfully" });
  } catch (error) {
    console.error("Error deleting employee:", error);
    return res
      .status(500)
      .json({ success: false, error: "Failed to delete employee" });
  }
};

module.exports = { addEmployee, updateEmployee, deleteEmployee };
