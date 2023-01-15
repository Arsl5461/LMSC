import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import userTestService from "../userTest/userTestService";
const initialState = {
	tests: [],
	test: [],
	isLoading: false,
	isError: false,
	message: "",
};

export const getUserTests = createAsyncThunk(
	"getTests",
	async (_, thunkAPI) => {
		try {
			const token = thunkAPI.getState().auth.user.token;
			return await userTestService.getAllTests(token);
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
// export const getAllTests = createAsyncThunk(
// 	"getAllTests",
// 	async (_, thunkAPI) => {
// 		try {
// 			return await user.viewAllTests();
// 		} catch (error) {
// 			const message =
// 				(error.message &&
// 					error.response.data &&
// 					error.response.data.message) ||
// 				error.message ||
// 				error.toString();
// 			return thunkAPI.rejectWithValue(message);
// 		}
// 	},
// );
// export const getTestDetail = createAsyncThunk(
// 	"getTestDetails",
// 	async (id, thunkAPI) => {
// 		try {
// 			return await testService.getTest(id);
// 		} catch (error) {
// 			const message =
// 				(error.message &&
// 					error.response.data &&
// 					error.response.data.message) ||
// 				error.message ||
// 				error.toString();
// 			return thunkAPI.rejectWithValue(message);
// 		}
// 	},
// );

export const userTestSlice = createSlice({
	name: "usertests",
	initialState,
	reducer: {
		reset: (state) => initialState,
	},
	extraReducers: (builder) => {
		builder
			.addCase(getUserTests.pending, (state) => {
				state.isLoading = true;
			})
			.addCase(getUserTests.fulfilled, (state, action) => {
				state.isLoading = false;
				state.isError = false;
				state.tests = action.payload;
			})
			.addCase(getUserTests.rejected, (state, action) => {
				state.isError = true;
				state.isLoading = false;
				state.message = action.payload;
			});
		// .addCase(getAllTests.pending, (state) => {
		// 	state.isLoading = true;
		// })
		// .addCase(getAllTests.fulfilled, (state, action) => {
		// 	state.isLoading = false;
		// 	state.isError = false;
		// 	state.tests = action.payload;
		// })
		// .addCase(getAllTests.rejected, (state, action) => {
		// 	state.isError = true;
		// 	state.isLoading = false;
		// 	state.message = action.payload;
		// })
		// .addCase(getTestDetail.pending, (state) => {
		// 	state.isLoading = true;
		// })
		// .addCase(getTestDetail.fulfilled, (state, action) => {
		// 	state.isLoading = false;
		// 	state.isError = false;
		// 	state.test = action.payload;
		// })
		// .addCase(getTestDetail.rejected, (state, action) => {
		// 	state.isError = true;
		// 	state.isLoading = false;
		// 	state.message = action.payload;
		// });
	},
});
export const { reset } = userTestSlice.actions;
export default userTestSlice.reducer;
