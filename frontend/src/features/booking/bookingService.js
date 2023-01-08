import axios from "axios";

const API_URl = "http://localhost:5000/api/booking/setbooking";

const setBooking = async (contactData) => {
    console.log(contactData);
	const response = await axios.post(API_URl, contactData);
    console.log(response.data);
	return response.data;
};

const bookingService = {
	setBooking,
};

export default bookingService;
