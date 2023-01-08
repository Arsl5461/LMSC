import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import testService from "./testService";
const initialState = {
	tests: [],
	isLoading: false,
	isError: false,
	message: "",
};
//Create New  Tests
export const createNewTest = createAsyncThunk(
	"createNewTest",
	async (labData, thunkAPI) => {
		try {
			return await testService.createTests(labData);
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
export const getAllTest = createAsyncThunk(
	"getAllTest",
	async (_, thunkAPI) => {
		try {
			return await testService.getTests();
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
export const deleteTests = createAsyncThunk(
	"deleteTests",
	async (id, thunkAPI) => {
		try {
			console.log(id, "Slice");
			return await testService.deleteTests(id);
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
			.addCase(createNewTest.pending, (state) => {
				state.isLoading = true;
			})
			.addCase(createNewTest.fulfilled, (state, action) => {
				state.isLoading = false;
				state.isError = false;
				state.tests.push(action.payload);
				state.isSuccess = true;
			})
			.addCase(createNewTest.rejected, (state, action) => {
				state.isError = true;
				state.isLoading = false;
				state.message = action.payload;
			})
			.addCase(getAllTest.pending, (state) => {
				state.isLoading = true;
			})
			.addCase(getAllTest.fulfilled, (state, action) => {
				state.isLoading = false;
				state.isError = false;
				state.tests = action.payload;
				state.isSuccess = true;
			})
			.addCase(getAllTest.rejected, (state, action) => {
				state.isError = true;
				state.isLoading = false;
				state.message = action.payload;
			})
			.addCase(deleteTests.pending, (state) => {
				state.isLoading = true;
			})
			.addCase(deleteTests.fulfilled, (state, action) => {
				state.isLoading = false;
				state.isError = false;
				state.tests = state.tests.filter(
					(test) => test._id !== action.payload.id,
				);
				state.isSuccess = true;
			})
			.addCase(deleteTests.rejected, (state, action) => {
				state.isError = true;
				state.isLoading = false;
				state.message = action.payload;
			});
	},
});

export const { reset } = testsSlice.actions;
export default testsSlice.reducer;
