const express = require("express");
const router = express.Router();
const {
	setBookings,
	getBookings,
	deleteBookings,
} = require("../controllers/bookingController");

router.route("/setbooking").post(setBookings);
router.route("/getbooking").get(getBookings);
router.route("/deletebooking/:id").delete(deleteBookings);
module.exports = router;
