const asyncHandler = require("express-async-handler");
const Contacts = require("../model/contactModel");

const getContact = asyncHandler(async (req, res) => {
	const contact = await Contacts.find();

	res.status(200).json(contact);
});

const setContacts = asyncHandler(async (req, res) => {
	const { name, email,message } = req.body;
	if (!name || !email) {
		res.status(400);
		throw new Error("Please add a name or email");
	}
    const contact = await Contacts.create({
		username: name,
		useremail: email,
		usermessage: message,

	});
	res.json(contact);

});


module.exports = {
	setContacts,
	getContact,
};
