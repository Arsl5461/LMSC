import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import contactService from "./contactService";
const initialState = {
	contacts: [],
	isLoading: false,
	isError: false,
	message: "",
};

//Get All Contacts

export const getAllContact = createAsyncThunk(
	"getAllContact",
	async (_, thunkAPI) => {
		try {
			
			return await contactService.getAllContact();
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

export const usersContact = createSlice({
	name: "contacts",
	initialState,
	reducer: {
		reset: (state) => initialState,
	},
	extraReducers: (builder) => {
		builder
			.addCase(getAllContact.pending, (state) => {
				state.isLoading = true;
			})
			.addCase(getAllContact.fulfilled, (state, action) => {
				state.isLoading = false;
				state.isError = false;
				state.contacts = action.payload;
				state.isSuccess = true;
			})
			.addCase(getAllContact.rejected, (state, action) => {
				state.isError = true;
				state.isLoading = false;
				state.message = action.payload;
			});
	},
});



export const { reset } = usersContact.actions;
export default usersContact.reducer;
