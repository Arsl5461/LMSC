const asyncHandler = require("express-async-handler");
const User = require("../model/userModel");
const UserTest = require("../model/goalsModel");
const setUserTests = asyncHandler(async (req, res) => {
	const { testname, text, body } = req.body;
	if (!testname || !text || !body) {
		res.status(400);
		throw new Error("Please add a text or body");
	}
	const user = await User.find();
	user.forEach((user) => {
		if (user.id === req.user.id) {
			userName = user.name;
		}
	});

	const test = await UserTest.create({
		testname,
		text,
		body,
		user: req.user.id,
		name: userName,
	});
	res.json(test);
});

const getUserTests = asyncHandler(async (req, res) => {
	const test = await UserTest.find();

	res.status(200).json(test);
});
module.exports = {
	setUserTests,
    getUserTests
};
