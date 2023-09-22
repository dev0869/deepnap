const express=require("express");
const { CareerDetail, GetCareerDetail, DeleteCareer} = require("../controllers/careerController");


const router=express.Router();

router.post("/fillcareer",CareerDetail);
router.get("/getcareerdetail",GetCareerDetail);
router.delete("/deletecarrier/:id",DeleteCareer);

module.exports=router;