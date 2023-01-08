import { configureStore } from "@reduxjs/toolkit";
import userreducer from "../features/registerUserSlice";
import testreducer from "../features/testSlice";
import contactreducer from "../features/contactSlice";
import settingreducer from "../features/settingSlice";
import bookingreducer from "../features/bookingsSlice";

export const store = configureStore({
	reducer: {
		user: userreducer,
		test: testreducer,
		contact: contactreducer,
		setting: settingreducer,
		booking: bookingreducer,
	},
});
