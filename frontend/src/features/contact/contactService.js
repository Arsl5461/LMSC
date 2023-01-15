import axios from "axios";

const API_URl = "http://localhost:8000/api/contact/setcontact";

const contact = async (contactData) => {
	const response = await axios.post(API_URl, contactData);
	return response.data;
};

const contactService = {
	contact,
};

export default contactService;
