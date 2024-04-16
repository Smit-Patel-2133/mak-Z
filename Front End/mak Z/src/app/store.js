import { configureStore } from "@reduxjs/toolkit";
import { userDetails } from '../features/authentication/auth.js';

export const store = configureStore({
    reducer: userDetails.reducer
});
