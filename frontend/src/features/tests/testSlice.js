import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import testService from "../tests/testService";
const initialState = {
	tests: [],
	isLoading: false,
	isError: false,
	message: "",
};

export const getTests = createAsyncThunk(
	"getTests",
	async (_, thunkAPI) => {
		try {
			return await testService.getAllTests();
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

export const testsSlice = createSlice({
	name: "tests",
	initialState,
	reducer: {
		reset: (state) => initialState,
	},
	extraReducers: (builder) => {
		builder
			.addCase(getTests.pending, (state) => {
				state.isLoading = true;
			})
			.addCase(getTests.fulfilled, (state, action) => {
				state.isLoading = false;
				state.isError = false;
				state.tests = action.payload;
			})
			.addCase(getTests.rejected, (state, action) => {
				state.isError = true;
				state.isLoading = false;
				state.message = action.payload;
			});
	},
});
export const { reset } = testsSlice.actions;
export default testsSlice.reducer;
