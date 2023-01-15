const mongoose = require("mongoose");

const userTestSchema = mongoose.Schema(
	{
		user: {
			type: mongoose.Schema.Types.ObjectId,
			required: true,
			ref: "User",
		},
		testname: {
			type: String,
			required: true,
		},

		text: {
			type: String,
			required: [true, "Title is required"],
		},
		body: {
			type: String,
			required: true,
		},
	},
	{
		timestamps: true,
	},
);

module.exports = mongoose.model("UserTest", userTestSchema);
