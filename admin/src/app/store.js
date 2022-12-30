import { configureStore } from "@reduxjs/toolkit";
import userreducer from "../features/registerUserSlice";
export const store = configureStore({
	reducer: {
		user:userreducer,
	},
});
