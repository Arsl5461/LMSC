import axios from "axios";

const API_URL = "http://localhost:8000/api/test";

const getAllTests = async () => {
	const response = await axios.get(API_URL + "/getTest");

	return response.data;
};
const viewAllTests = async () => {
	const response = await axios.get(API_URL + "/getAllTest");
	return response.data;
};
const getTest = async (id) => {
	const response = await axios.get(API_URL + `/getTestDetail/${id}`);
	return response.data;
};

const testService = {
	getAllTests,
	viewAllTests,
	getTest,
};

export default testService;
