const mongoose = require("mongoose");

const userContact = mongoose.Schema(
	{
		username: {
			type: String,
		},
		useremail: {
			type: String,
		},
		usermessage: {
			type: String,
		},
	},
	{
		timestamps: true,
	},
);

module.exports = mongoose.model("Contacts", userContact);
