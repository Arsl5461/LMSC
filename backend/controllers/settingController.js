const asyncHandler = require("express-async-handler");
const Settings = require("../model/settingModel");

const getSettings = asyncHandler(async (req, res) => {
	const setting = await Settings.find();

	res.status(200).json(setting);
});

const setSettings = asyncHandler(async (req, res) => {
	const { open, close, maxTest } = req.body;
	if (!open || !close || !maxTest) {
		res.status(400);
		throw new Error("Please add a open or close time");
	}

	const setting = await Settings.create({
		openTime: open,
		closeTime: close,
		maxTest: maxTest,
	});
	res.json(setting);
});

module.exports = {
	setSettings,
	getSettings,
};
