import axios from "axios";

const API_URl = "http://localhost:5000/api/contact/getcontact";

// Get All Contact
const getAllContact = async () => {
	const response = await axios.get(API_URl);
	return response.data;
};
const contactService = {
	getAllContact,
};

export default contactService;
