import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { base_url } from "../utils/base_url";

const initialState = {
  infos: [],
  loading: true,
  error: false,
};

export const fetchQuote = createAsyncThunk("getquotes", async () => {
  try {
    const res = await axios.get(`${base_url}/admin/getquotes`);

    // console.log(res.data);
    return res.data;
  } catch (error) {
    throw error;
  }
});

export const SearchQuote = createAsyncThunk(
  "/admin/searchquotes",
  async (payload) => {
    try {
      const result = await axios.get(
        `${base_url}/admin/searchquotes/${payload}`
      );
      console.log(result.data.searchResults);
      return result.data.searchResults;
    } catch (error) {
      throw error;
    }
  }
);

export const quoteSlice = createSlice({
  name: "quoteData",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchQuote.fulfilled, (state, action) => {
        state.loading = false;
        state.infos = action.payload;
      })
      .addCase(fetchQuote.rejected, (state, action) => {
        console.log("error");
        state.error = true;
      })
      .addCase(SearchQuote.fulfilled, (state, action) => {
        state.loading = false;
        state.infos = action.payload;
      })
      .addCase(SearchQuote.rejected , (state,action)=>{
        state.loading=false;
        state.error=true;
        state.infos=[];
        state.noResults = false;
      })
  },
});

export default quoteSlice.reducer;
