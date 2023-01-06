const express = require("express");
const router = express.Router();
const {
	getSettings,
	setSettings,
	
} = require("../controllers/settingController");

router.route("/setsetting").post(setSettings);
router.route("/getsetting").get(getSettings);
module.exports = router;
