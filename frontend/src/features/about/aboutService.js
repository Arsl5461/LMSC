import axios from "axios";

const API_URL = `http://localhost:8000/api/setting/getsetting`;

const getAllServices = async () => {
	const response = await axios.get(API_URL);
	return response.data;
};

const aboutService = {
	getAllServices,
};

export default aboutService;
