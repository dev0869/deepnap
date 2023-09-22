import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { base_url } from "../utils/base_url";

const initialState = {
  meta: [],
  loading: true,
  error: false,
};

export const fetchCareer = createAsyncThunk("getcareerdetail", async () => {
  try {
    const res = await axios.get(
      `${base_url}/admin/getcareerdetail`
    );
    // console.log(res);
    return res.data;
  } catch (error) {
    throw error;
  }
});

export const SearchCareer = createAsyncThunk("searchcareer", async (payload) => {
  try {
    const result = await axios.get(
     `${base_url}/admin/${payload}`
    );
    console.log(result.data);
    return result.data;
  } catch (error) {
    throw error;
  }
});

export const careerSlice = createSlice({
  name: "careerData",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchCareer.fulfilled, (state, action) => {
        state.loading = false;
        state.meta = action.payload;
      })
      .addCase(fetchCareer.rejected, (state, action) => {
        state.error = true;
      })
      .addCase(SearchCareer.fulfilled, (state, action) => {
        state.loading = false;
        state.meta = action.payload;
      })
  },
});

export default careerSlice.reducer;
