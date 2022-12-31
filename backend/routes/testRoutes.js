const express = require("express");
const router = express.Router();
const {
	getTests,
	setTests,
	updateGoals,
	deleteGoals,
	getAllGoals,
	getUsers,
} = require("../controllers/testController");

const { protect } = require("../middleware/authMiddleware");
router.route("/create").post(setTests);
router.route("/gettest").get(getTests);
module.exports = router;
