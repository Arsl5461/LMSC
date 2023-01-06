const mongoose = require("mongoose");

const newTest = mongoose.Schema(
	{
		testname: {
			type: String,
			require: true,
		},
		testprice: {
			type: String,
			require: true,
		},
		description: {
			type: String,
		},
		createdAt: {
			type: Date,
		},
	},
	{
		timestamps: true,
	},
);

module.exports = mongoose.model("LabTest", newTest);
