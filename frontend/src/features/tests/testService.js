import axios from "axios";

const API_URL = "http://localhost:5000/api/test/getTest";

const getAllTests = async () => {
	const response = await axios.get(API_URL);
	return response.data;
};

const testService = {
	getAllTests,
};

export default testService;
