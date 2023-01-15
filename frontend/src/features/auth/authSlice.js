import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import authService from "./authService";

// Get user from Localstorage
const user = JSON.parse(localStorage.getItem("user"));
const initialState = {
	user: user ? user : null,
	register: [],
	isError: false,
	isLoadaing: false,
	isSuccess: false,
	message: "",
};

//Register user

export const register = createAsyncThunk(
	"auth/Register",
	async (userdata, thunkAPI) => {
		try {
			console.log(userdata);
			return await authService.register(userdata);
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
//Login user
export const login = createAsyncThunk("auth/login", async (user, thunkAPI) => {
	try {
		return await authService.login(user);
	} catch (error) {
		const message =
			(error.message &&
				error.response.data &&
				error.response.data.message) ||
			error.message ||
			error.toString();
		return thunkAPI.rejectWithValue(message);
	}
});

// logOut user
export const logout = createAsyncThunk("auth/logout", async () => {
	await authService.logout();
});

export const authSlice = createSlice({
	name: "auth",
	initialState,
	reducers: {
		reset: (state) => {
			state.isLoadaing = false;
			state.isError = false;
			state.isSuccess = false;
			state.message = "";
		},
	},
	extraReducers: (builder) => {
		builder
			.addCase(register.pending, (state) => {
				state.isLoadaing = true;
			})
			.addCase(register.fulfilled, (state, action) => {
				state.isLoadaing = false;
				state.isError = false;
				state.register = action.payload;
			})
			.addCase(register.rejected, (state, action) => {
				state.isLoadaing = false;
				state.isError = true;
				state.user = null;
				state.message = action.payload;
			})
			.addCase(login.pending, (state) => {
				state.isLoadaing = true;
			})
			.addCase(login.fulfilled, (state, action) => {
				state.isLoadaing = false;
				state.isError = false;
				state.user = action.payload;
			})
			.addCase(login.rejected, (state, action) => {
				state.isLoadaing = false;
				state.isError = true;
				state.user = null;
				state.message = action.payload;
			})

			.addCase(logout.fulfilled, (state) => {
				state.user = null;
			});
	},
});
export const { reset } = authSlice.actions;
export default authSlice.reducer;
