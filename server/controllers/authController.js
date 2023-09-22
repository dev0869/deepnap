const userModal = require("../Modals/userModal");
const jwt = require("jsonwebtoken");
const { hashPassword, comparePassword } = require("../helpers/Authhelper");
const fast2sms = require("fast-two-sms");
const twilio = require("twilio");
const sendToken = require("../utils/usertoken");
// const { response } = require("express");

//registerController-------------------
const registerController = async (req, res) => {
  try {
    const { name, email, password, phone, city } = req.body;
    // Validation
    if (!name || !email || !password || !phone ) {
      return res.status(400).send({
        success: false,
        message: "All fields are required to fill",
      });
    }

    if (phone.length !== 10) {
      return res.status(400).send({
        success: false,
        message: "Phone number must be exactly 10 digits",
      });
    }

    // Check if the user with the same email already exists
    const existingUser = await userModal.findOne({ email });
    if (existingUser) {
      return res.status(400).send({
        success: false,
        message: "Email already registered, please login",
      });
    }

    // Register user
    const hashedPassword = await hashPassword(password);

    // Save user to the database
    const newUser = await new userModal({
      name,
      email,
      password: hashedPassword,
      city,
      phone,
      role:req.body?.role
    }).save();

    // const token= newUser.getJwtToken();

    // console.log(token)
    // res.status(200).send({
    //   success: true,
    //   message: "User registered successfully",
    //   user: newUser,
    //   token
    // });
    sendToken(newUser,200,res)
  } catch (error) {
    console.error("Error in registerController:", error);
    res.status(500).send({
      success: false,
      message: "Error in user registration",
      error: error.message,
    });
  }
};

//--------loginController------------------
const loginController = async (req, res) => {
  // console.log(req.body);
  const { email, password } = req.body;
  try {

    if (!email || !password) {
      console.log("Email and password are required");
      return res.status(400).send({
        success: false,
        message:
          "Email and password are required, please enter the required fields",
      });
    }

    const user = await userModal.findOne({ email });

    if (!user) {
      console.log("Invalid email");
      return res.status(400).send({
        success: false,
        message: "Invalid email",
      });
    }

    const match = await comparePassword(password, user.password);
    if (!match) {
      console.log("Invalid password");
      return res.status(400).send({
        success: false,
        message: "Invalid password",
      });
    }

    // Generate a token for the authenticated user
    // const token = jwt.sign({ _id: user._id }, process.env.secretKey, {
    //   expiresIn: "7d",
    // });

    // const token= user.getJwtToken();
    // res.status(200).send({
    //   success: true,
    //   message: "User logged in successfully",
    //   user: {
    //     name: user.name,
    //     email: user.email,
    //     phone: user.phone,
    //     city: user.city,
    //   },
    //   token,
    // });

    sendToken(user,200,res)
  } catch (error) {
    console.error("Error in loginController:", error);
    return res.status(500).send({
      success: false,
      message: "There is some error in loginController",
      error: error.message,
    });
  }
};

//sendSms
// const client = require("twilio")(accountSid, authToken);

// const sendSms = async (req, res) => {
//   const { phone } = req.body;
//   const otp= Math.floor(100000+ Math.random()*2)
//   const ttl= 2*60*100;
//   let expires= Date.now();
//   expires +=ttl;
//   const data= `${phone}.${otp}.${expires}`;

//   const otp = 123;

//   const client = await new twilio(accountSid, authToken);
//   client.messages
//     .create({
//       body: "Hello from a message",
//       to: process.env.phone_no, // Text your number
//       from: "+12345678901", // From a valid Twilio number

//       body: `Your otp is ${otp}`,
//       from: "+16672707748",
//       to: "+917065003066", 
//     })
//     .then((message) => {
//       console.log(message.sid);
//       res.status(200).send({
//         message: "otp send successfully",
//         phone,
//         otp,
//       });
//     })
//     .catch((error) => console.log(error));
// };

// const sendSms = async (req, res) => {
//   const { phone } = req.body; // Assuming the recipient's phone number is passed in the request body
//   if (!phone) {
//     return res.status(400).json({ success: false, message: "Recipient phone number is missing" });
//   }

//   const options = {
//     authorization:"zuTner56U3Q0HOoDlMKhCuknmhsehtD5xmcrKqSZ9oo1XRxy6YuVoiKOeTTq", // Replace this with your Fast2SMS API Key
//     message: "hello, this is a test message from shekhar",
//     numbers: [phone] // Using the phone number from the request body
//   };

//   try {
//     const response = await fast2sms.sendMessage(options);
//     console.log("Fast2SMS Response:", response);

//     if (!response) {
//       return res.status(500).json({ success: false, messages: "Failed to send SMS no response", response });
//     } else {
//       return res.status(200).json({ success: true, messages: "SMS sent successfully", response });
//     }
//   } catch (error) {
//     console.log("Error:", error);
//     return res.status(500).json({ success: false, messages: "Failed to send SMS" });
//   }
// };

module.exports = { registerController, loginController };
