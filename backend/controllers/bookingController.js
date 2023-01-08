const asyncHandler = require("express-async-handler");
const Bookings = require("../model/bookingModel");
const User = require("../model/userModel");
const getBookings = asyncHandler(async (req, res) => {
	const contact = await Bookings.find();

	res.status(200).json(contact);
});

const setBookings = asyncHandler(async (req, res) => {
	const { name, phone, date, time, testName } = req.body;
	if (!name || !phone || !date || !time || !testName) {
		res.status(400);
		throw new Error("Please add All fields");
	}
	const booking = await Bookings.create({
		bookingname: name,
		bookingphone: phone,
		bookingdate: date,
		bookingtime: time,
		bookingtest: testName,
	});
	res.json(booking);
});
const deleteBookings = asyncHandler(async (req, res) => {
	const booking = await Bookings.findById(req.params.id);

	if (!booking) {
		res.status(400);
		throw new Error("Booking Not Found");
	}
	await booking.remove();
	res.json({ id: req.params.id });
	// //Check for user
	// if (!req.user) {
	// 	res.status(401);
	// 	throw new error("User not Found");
	// }

	//Make sure the logged in user
	// if (goal.user.toString() !== req.user.id) {
	// 	res.status(401);
	// 	throw new error("User not Found");
	// }
});

module.exports = {
	setBookings,
	getBookings,
	deleteBookings,
};
