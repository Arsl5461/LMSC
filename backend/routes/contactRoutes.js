const express = require("express");
const router = express.Router();
const {
	setContacts,
	getContact,
	
} = require("../controllers/contactController");


router.route("/setcontact").post(setContacts);
router.route("/getcontact").get(getContact);
module.exports = router;
