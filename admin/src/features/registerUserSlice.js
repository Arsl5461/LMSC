import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import registerUserService from "./registerUserService";
const initialState = {
	users: [],
	isLoading: false,
	isError: false,
	message: "",
};
//Get All goals
export const getAllUsers = createAsyncThunk(
	"getAllUsers",
	async (_, thunkAPI) => {
		try {
			
			return await registerUserService.getAllRegisterUsers();
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

export const usersSlice = createSlice({
	name: "users",
	initialState,
	reducer: {
		reset: (state) => initialState,
	},
	extraReducers: (builder) => {
		builder
			.addCase(getAllUsers.pending, (state) => {
				state.isLoading = true;
			})
			.addCase(getAllUsers.fulfilled, (state, action) => {
				state.isLoading = false;
				state.isError = false;
				state.users = action.payload;
				state.isSuccess = true;
			})
			.addCase(getAllUsers.rejected, (state, action) => {
				state.isError = true;
				state.isLoading = false;
				state.message = action.payload;
			});
	},
});

export const { reset } = usersSlice.actions;
export default usersSlice.reducer;
