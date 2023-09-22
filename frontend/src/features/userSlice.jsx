import { createSlice } from "@reduxjs/toolkit";
const initialState = {
  data: [],
  loading: true,
  error: false,
};

export const userSlice = createSlice({
  name: "userData",
  initialState,
  reducers: {
    addUser: (state, action) => {
      state.data = action.payload;
    },
  },
});

export const { addUser } = userSlice.actions;
export default userSlice.reducer;

