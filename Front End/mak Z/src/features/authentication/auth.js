import { createSlice } from "@reduxjs/toolkit";
import def_pic from "../../assets/Profile picture/2.png";

const initialState = {
    auth: {
        name: '',
        email: "",
        isLogedin: false,
        profilePicture: null // Initialize profile picture as null
    }
};

export const userDetails = createSlice({
    name: 'user_info',
    initialState,
    reducers: {
        currentUser: (state, action) => {
            const { name, email, profilePicture } = action.payload;
            state.auth = {
                name: name,
                email: email,
                isLogedin: !!name,
                profilePicture: profilePicture // Set profile picture from action payload
            };
        }
    }
});

export const { currentUser } = userDetails.actions;

export default userDetails.reducer;
