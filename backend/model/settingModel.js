const mongoose = require("mongoose");

const newSetting = mongoose.Schema(
	{
		openTime: {
			type: String,
			require: true,
		},
		closeTime: {
			type: String,
			require: true,
		},
        maxTest: {
			type: String,
			require: true,
		},
		createdAt: {
			type: Date,
		},
	},
	{
		timestamps: true,
	},
);

module.exports = mongoose.model("Setting", newSetting);
