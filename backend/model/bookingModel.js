const mongoose = require("mongoose");

const goalSchema = mongoose.Schema(
	{
		bookingname: {
			type: String,
			required: true,
		},
		bookingphone: {
			type: Number,
			required: true,
		},
		bookingdate: {
			type: String,
			required: true,
		},
		bookingtime: {
			type: String,
			required: true,
		},
		bookingtest: {
			type: String,
			required: true,
		},
	},
	{
		timestamps: true,
	},
);

module.exports = mongoose.model("Bookings", goalSchema);
