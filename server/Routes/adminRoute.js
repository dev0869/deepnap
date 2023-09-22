const express = require("express");
const { getAdminData } = require("../controllers/adminCtrl");
const { authMiddleware } = require("../middlewares/authMiddleware");
const router = express.Router();

router.get("/", authMiddleware, getAdminData);

module.exports = router;
