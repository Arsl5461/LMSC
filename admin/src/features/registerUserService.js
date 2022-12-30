import axios from "axios";

const API_URl = "http://localhost:5000/api/users/";

// Get All Register Users
const getAllRegisterUsers = async () => {
	const response = await axios.get(API_URl + "getAllUser");
	return response.data;
};
const registerUserService = {
	getAllRegisterUsers,
};

export default registerUserService;
