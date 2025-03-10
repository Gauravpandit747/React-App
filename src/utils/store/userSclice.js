import { createSlice } from "@reduxjs/toolkit";

const UserSlice = createSlice({
  name: "user",
  initialState: {
    userData: {},
    isLoggedIn: false,
  },
  reducers: {
    addUser: (state, action) => {
      state.userData = { email : action?.payload?.user?.email, username: action?.payload?.user?.username, Token:action.payload.Token };
      state.isLoggedIn = action.payload.isLoggedIn;
    },
    
    removeUser:(state, action) => {
      state.isLoggedIn = false;
    }, 

    editUsername:(state, action) =>{
      state.userData.username = action?.payload?.username
      state.userData.email = action?.payload?.username
    }
  },
});

export const { addUser, removeUser, editUsername } = UserSlice.actions;
export default UserSlice.reducer;
