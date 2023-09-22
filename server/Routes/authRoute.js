const express= require("express");
const {registerController,loginController}= require("../controllers/authController");

//route object

const router= express.Router();

// routing :-
//register route
router.post("/register",registerController);

//login route
router.post("/login",loginController);


module.exports=router;
