import axios from "axios";

const API_URl = "http://localhost:8000/api/setting/";

// Create Tests
const createSettings = async (settingData) => {
	const response = await axios.post(API_URl + "setsetting", settingData);
	return response.data;
};
// Get Tests
const getSettings = async () => {
	const response = await axios.get(API_URl + "getsetting");
	return response.data;
};
const createSetting = {
	createSettings,
	getSettings,
};

export default createSetting;
