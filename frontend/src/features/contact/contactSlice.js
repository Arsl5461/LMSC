import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import contactService from "./contactService";

const initialState = {
	contact: [],
	isError: false,
	isLoadaing: false,
	isSuccess: false,
	message: "",
};

export const contacts = createAsyncThunk(
	"contact/contact",
	async (contact, thunkAPI) => {
		try {
			
			return await contactService.contact(contact);
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

export const contactSlice = createSlice({
	name: "contact",
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
			.addCase(contacts.pending, (state) => {
				state.isLoadaing = true;
			})
			.addCase(contacts.fulfilled, (state, action) => {
				state.isLoadaing = false;
				state.isError = false;
				state.contact = action.payload;
			})
			.addCase(contacts.rejected, (state, action) => {
				state.isLoadaing = false;
				state.isError = true;
				state.user = null;
				state.message = action.payload;
			});
	},
});

export const { reset } = contactSlice.actions;
export default contactSlice.reducer;
