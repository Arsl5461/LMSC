import axios from "axios";

const API_URl = "http://localhost:5000/api/booking/";

// Get All Contact
const getAllBookings = async () => {
	const response = await axios.get(API_URl + "getbooking");
	return response.data;
};
const deleteBooking = async (id) => {
	const response = await axios.delete(API_URl + `deletebooking/${id}`);
	return response.data;
};
const bookingsService = {
	getAllBookings,
	deleteBooking,
};

export default bookingsService;
