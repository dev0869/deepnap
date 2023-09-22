const careerModel = require("../Modals/careerModel");

const CareerDetail = async (req, res) => {
  try {
    const {name, email, phone, designation, resume} = req.body;

    if (!name || !email || !phone || !designation || !resume) {
      return res.status(400).json({
        success: false,
        message: "All fields are mandatory to fill.",
      });
    }
    
    const nameRegex = /^[a-zA-Z ]+$/;
    const phoneRegex = /^[0-9]{10}$/;

    if (!phoneRegex.test(phone)) {
      return res.status(400).json({
        success: false,
        message: "Phone number must be exactly 10 digits and contain only numbers",
      });
    }
    if (!nameRegex.test(name)) {
      return res.status(400).json({
        success: false,
        message: "Name cannot contain numbers or special characters",
      });
    }
    
    const careerDetail = await careerModel.create({
      name,
      email,
      phone,
      designation,
      resume,
    });

    console.log(careerDetail);

    if (!careerDetail) {
      return res.status(400).json({
        success: false,
        message: "Can't upload career details.",
      });
    }

    return res.status(200).json({
      success: true,
      message: "Career details successfully uploaded.",
      result: careerDetail,
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: "An error occurred while processing your request.",
      error: error.message,
    });
  }
};

const GetCareerDetail = async (req, res) => {
  try {
    const getCareer = await careerModel.find();
    if (getCareer.length > 0) {
      res.send(getCareer);
    } else {
      res.send("No user found");
    }
  } catch (error) {
    res.send(error.message);
  }
};

const DeleteCareer = async (req, res) => {
  try {
    const data = req.params.id; 
    console.log(data);     
    let deletecareer = await careerModel.deleteOne({ _id: data });
    if (!deletecareer) {
      res.status(400).send({
        success: false,
        message: "User can't be deleted",
      });
    } else {
      res.status(200).send({
        success: true,
        message: "User deleted successfully",
      });
    }
  } catch (error) {
    res.status(400).send(error.message);
  }
};



module.exports = { CareerDetail, GetCareerDetail,DeleteCareer };
