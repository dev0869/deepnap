import { createSlice } from "@reduxjs/toolkit";
const initialState = {
  show: false,
  data: {},
};

export const LoadingSlice = createSlice({
  name: "Loading",
  initialState,
  reducers: {
    toggleLoading: (state, action) => {
      state.show = action.payload;
    },
    adduserSignup: (state, action) => {
      state.data = action.payload;
    },
  },
});
export const { toggleLoading,adduserSignup } = LoadingSlice.actions;
export default LoadingSlice.reducer;
