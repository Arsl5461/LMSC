const express = require("express");
const router = express.Router();
const {
	getTests,
	setTests,
	updateGoals,
	deleteTests,
	getAllGoals,
	getUsers,
	getAllTests,
	getTestDetails,
} = require("../controllers/testController");

const { protect } = require("../middleware/authMiddleware");
router.route("/create").post(setTests);
router.route("/gettest").get(getTests);
router.route("/getAllTest").get(getAllTests);
router.route("/getTestDetail/:id").get(getTestDetails);
router.route("/deleteTest/:id").delete(deleteTests);
module.exports = router;
