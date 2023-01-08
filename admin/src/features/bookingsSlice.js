import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import bookingsService from "./bookingsService";
const initialState = {
	bookings: [],
	isLoading: false,
	isError: false,
	message: "",
};

//Get All Contacts

export const getAllBookings = createAsyncThunk(
	"getAllBookings",
	async (_, thunkAPI) => {
		try {
			return await bookingsService.getAllBookings();
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
export const deleteBookings = createAsyncThunk(
	"deleteBookings",
	async (id, thunkAPI) => {
		try {
			console.log(id);
			return await bookingsService.deleteBooking(id);
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

export const bookings = createSlice({
	name: "bookings",
	initialState,
	reducer: {
		reset: (state) => initialState,
	},
	extraReducers: (builder) => {
		builder
			.addCase(getAllBookings.pending, (state) => {
				state.isLoading = true;
			})
			.addCase(getAllBookings.fulfilled, (state, action) => {
				state.isLoading = false;
				state.isError = false;
				state.bookings = action.payload;
				state.isSuccess = true;
			})
			.addCase(getAllBookings.rejected, (state, action) => {
				state.isError = true;
				state.isLoading = false;
				state.message = action.payload;
			})
			.addCase(deleteBookings.pending, (state) => {
				state.isLoading = true;
			})
			.addCase(deleteBookings.fulfilled, (state, action) => {
				state.isLoading = false;
				state.isError = false;
				state.bookings = state.bookings.filter((booking)=>booking._id !== action.payload.id)
				state.isSuccess = true;
			})
			.addCase(deleteBookings.rejected, (state, action) => {
				state.isError = true;
				state.isLoading = false;
				state.message = action.payload;
			});
	},
});

export const { reset } = bookings.actions;
export default bookings.reducer;
