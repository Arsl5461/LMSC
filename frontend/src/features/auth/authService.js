import axios from "axios";

const API_URl = "http://localhost:8000/api/users/";

//REGISTER USER

const register = async (userData) => {
	console.log(userData);
	const response = await axios.post(API_URl, userData);
	return response.data;
};
//LOGIN USER

const login = async (userData) => {
	const response = await axios.post(API_URl + "login", userData);
	if (response.data) {
		localStorage.setItem("user", JSON.stringify(response.data));
	}
	return response.data;
};

//Logout
const logout = () => {
	localStorage.removeItem("user");
};

const authService = {
	register,
	logout,
	login,
};

export default authService;
