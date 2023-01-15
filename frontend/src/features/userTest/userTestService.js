import axios from "axios";

const API_URL = "http://localhost:8000/api/usertest/getTest";

const getAllTests = async (token) => {
	const config = {
		headers: {
			Authorization: `Bearer ${token}`,
		},
	};
	const response = await axios.get(API_URL, config);

	return response.data;
};
// const setTests = async (testData) => {
// 	const response = await axios.post(API_URL + "/settest", testData);
// 	return response.data;
// };
// const viewAllTests = async () => {
// 	const response = await axios.get(API_URL + "/getAllTest");
// 	return response.data;
// };
// const getTest = async (id) => {
// 	const response = await axios.get(API_URL + `/getTestDetail/${id}`);
// 	return response.data;
// };

const testService = {
	getAllTests,
	// setTests,
};

export default testService;
