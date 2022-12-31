import { configureStore } from "@reduxjs/toolkit";
import userreducer from "../features/registerUserSlice";
import testreducer from "../features/testSlice";

export const store = configureStore({
	reducer: {
		user: userreducer,
		test: testreducer,
	},
});
