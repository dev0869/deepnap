const contactModel = require("../Modals/contactModel");

const ContactEntry = async (req, res) => {
  try {
    const { name, email, phone, city } = req.body;

    if (!name || !email || !phone || !city) {
      return res.status(400).send({
        success: false,
        message: "Please fill all terms are required",
      });
    }
    const nameRegex = /^[a-zA-Z ]+$/;
    const phoneRegex = /^[0-9]{10}$/;

    if (!phoneRegex.test(phone)) {
      return res.status(400).json({
        success: false,
        message:
          "Phone number must be exactly 10 digits and contain only numbers",
      });
    }

    if (!nameRegex.test(name)) {
      return res.status(400).json({
        success: false,
        message: "Name cannot contain numbers or special characters",
      });
    }

    const contact = new contactModel({ name, email, phone, city });
    const result = await contact.save();

    res.status(200).send({
      success: true,
      message: "contact form is submitted",
      result,
    });
  } catch (error) {
    res.status(500).json({ error: error.message }); // Send a 500 status for server errors
  }
};

const ContactDetails = async (req, res) => {
  try {
    const list = await contactModel.find();

    if (list.length > 0) {
      res.status(200).send({
        success: true,
        message: "all contact list",
        list,
      });
    } else {
      res.status(404).json({ message: "No user found" });
    }
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const SearchContact = async (req, res) => {
  let result = await contactModel.find({
    $or: [
      { name: { $regex: req.params.key } },
      { email: { $regex: req.params.key } },
      { phone: { $regex: req.params.key } },
      { city: { $regex: req.params.key } },
    ],
  });
console.log(result)
  if (result.length===0) {
    res.status(400).send({
      success: false,
      message: "No deatils found",
    });
  }else{
    res.status(200).send({
      success: true,
      result,
    });
  }
  
};

const deleteContact = async (req, res) => {
  try {
    const id = req.params.id;
    const deletedUser = await contactModel.deleteOne({ _id: id });

    if (!deletedUser) {
      return res.status(400).json({
        success: false,
        message: "User couldn't be deleted",
      });
    }

    res.status(200).json({
      success: true,
      message: "User deleted successfully",
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "An error occurred while deleting the user",
      error: error.message,
    });
  }
};

module.exports = { ContactEntry, ContactDetails, SearchContact, deleteContact };
