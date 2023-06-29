import { configureStore } from "@reduxjs/toolkit";
import formReducer from "./formSlice";

const store = configureStore({
	reducer: {
		formState: formReducer,
	},
})

export default store;
export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch