import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import settingService from "./settingService";
const initialState = {
	settings: [],
	isLoading: false,
	isError: false,
	message: "",
};

//Create New  Tests
export const createNewSetting = createAsyncThunk(
	"createNewSetting",
	async (settingData, thunkAPI) => {
		try {
			console.log(settingData);
			return await settingService.createSettings(settingData);
		} catch (error) {
			const message =
				(error.message &&
					error.response.data &&
					error.response.data.message) ||
				error.message ||
				error.toString();
			return thunkAPI.rejectWithValue(message);
		}
	},
);

export const getAllSetting = createAsyncThunk(
	"getAllSetting",
	async (_, thunkAPI) => {
		try {
			return await settingService.getSettings();
		} catch (error) {
			const message =
				(error.message &&
					error.response.data &&
					error.response.data.message) ||
				error.message ||
				error.toString();
			return thunkAPI.rejectWithValue(message);
		}
	},
);

export const settingsSlice = createSlice({
	name: "settings",
	initialState,
	reducer: {
		reset: (state) => initialState,
	},
	extraReducers: (builder) => {
		builder
			.addCase(createNewSetting.pending, (state) => {
				state.isLoading = true;
			})
			.addCase(createNewSetting.fulfilled, (state, action) => {
				state.isLoading = false;
				state.isError = false;
				state.tests = action.payload;
				state.isSuccess = true;
			})
			.addCase(createNewSetting.rejected, (state, action) => {
				state.isError = true;
				state.isLoading = false;
				state.message = action.payload;
			})
			.addCase(getAllSetting.pending, (state) => {
				state.isLoading = true;
			})
			.addCase(getAllSetting.fulfilled, (state, action) => {
				state.isLoading = false;
				state.isError = false;
				state.settings = action.payload;
				state.isSuccess = true;
			})
			.addCase(getAllSetting.rejected, (state, action) => {
				state.isError = true;
				state.isLoading = false;
				state.message = action.payload;
			});
	},
});

export const { reset } = settingsSlice.actions;
export default settingsSlice.reducer;
