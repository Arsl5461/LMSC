import { configureStore } from "@reduxjs/toolkit";
import authreducer from "../features/auth/authSlice";
import goalreducer from "../features/goals/goalSlice";
import contactReducer from "../features/contact/contactSlice";
import aboutReducer from "../features/about/aboutSlice";
import testReducer from "../features/tests/testSlice";
import bookingreducer from "../features/booking/bookingSlice";
export const store = configureStore({
	reducer: {
		auth: authreducer,
		goals: goalreducer,
		contact: contactReducer,
		about: aboutReducer,
		test: testReducer,
		booking: bookingreducer,
	},
});
