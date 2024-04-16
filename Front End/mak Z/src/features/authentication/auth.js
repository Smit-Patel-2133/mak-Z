import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    auth: { name: '', email: "", isLogedin: false }
};
export const userDetails = createSlice({
    name: 'user_info',
    initialState,
    reducers: {
        currentUser: (state, action) => {
            const { name, email } = action.payload;
            state.auth = {
                name: name,
                email: email,
                isLogedin: !!name

            }
        }
    }
});

export const { currentUser } = userDetails.actions;
