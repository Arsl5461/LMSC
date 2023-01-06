import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import aboutService from "../about/aboutService";
const initialState = {
	timings: [],
	isLoading: false,
	isError: false,
	message: "",
};

export const getTimings = createAsyncThunk(
	"getTimings",
	async (_, thunkAPI) => {
		try {
			return await aboutService.getAllServices();
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

export const aboutSlice = createSlice({
	name: "timings",
	initialState,
	reducer: {
		reset: (state) => initialState,
	},
	extraReducers: (builder) => {
		builder
			.addCase(getTimings.pending, (state) => {
				state.isLoading = true;
			})
			.addCase(getTimings.fulfilled, (state, action) => {
				state.isLoading = false;
				state.isError = false;
				state.timings = action.payload;
			})
			.addCase(getTimings.rejected, (state, action) => {
				state.isError = true;
				state.isLoading = false;
				state.message = action.payload;
			});
	},
});
export const { reset } = aboutSlice.actions;
export default aboutSlice.reducer;
