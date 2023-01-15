const express = require("express");
const router = express.Router();
const { setUserTests,getUserTests } = require("../controllers/userTestController");
const {protect}=require("../middleware/authMiddleware")
router.route("/settest").post(protect,setUserTests);
router.route("/getTest").get(protect,getUserTests);
module.exports = router;
