import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import bookingService from "./bookingService";

const initialState = {
	bookings: [],
	isError: false,
	isLoadaing: false,
	isSuccess: false,
	message: "",
};

export const bookings = createAsyncThunk(
	"booking",
	async (booking, thunkAPI) => {
		try {
			console.log(booking);
			return await bookingService.setBooking(booking);
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

export const bookingSlice = createSlice({
	name: "booking",
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
			.addCase(bookings.pending, (state) => {
				state.isLoadaing = true;
			})
			.addCase(bookings.fulfilled, (state, action) => {
				state.isLoadaing = false;
				state.isError = false;
				state.bookings = action.payload;
			})
			.addCase(bookings.rejected, (state, action) => {
				state.isLoadaing = false;
				state.isError = true;
				state.user = null;
				state.message = action.payload;
			});
	},
});

export const { reset } = bookingSlice.actions;
export default bookingSlice.reducer;
