const express = require("express");
const router = express.Router();
const {
	setBookings,
	getBookings,
	deleteBookings,
} = require("../controllers/bookingController");
const { protect, verifyEmaill } = require("../middleware/authMiddleware");

router.route("/setbooking").post(protect, setBookings);
router.route("/getbooking").get(getBookings);
router.route("/deletebooking/:id").delete(deleteBookings);
module.exports = router;
