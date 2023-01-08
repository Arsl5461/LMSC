import axios from "axios";

const API_URl = "http://localhost:5000/api/test/";

// Create Tests
const createTests = async (labData) => {
	const response = await axios.post(API_URl + "create", labData);
	return response.data;
};
// Get Tests
const getTests = async () => {
	const response = await axios.get(API_URl + "gettest");
	return response.data;
};
// Delete Tests
const deleteTests = async (id) => {
	const response = await axios.delete(API_URl + `deletetest/${id}`);
	return response.data;
};
const createTest = {
	createTests,
	getTests,
	deleteTests,
};

export default createTest;
