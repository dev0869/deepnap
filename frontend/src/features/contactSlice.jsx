import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { base_url } from "../utils/base_url";
const initialState = {
  service: {
    list: [],
  },
  loading: true,
  error: false,
};

export const fetchContact = createAsyncThunk("/admin/getcontact", async () => {
  try {
    const res = await axios.get(`${base_url}/admin/getcontact`);
    // console.log(res.data.list);
    return res.data.list;
  } catch (error) {
    throw error;
  }
});

export const SearchContact = createAsyncThunk(
  "contact/searchcontact",
  async (payload) => {
    try {
      let result = await axios.get(
        `${base_url}/admin/searchcontact/${payload}`
        );
      return result;
    } catch (error) {
      throw error;
    }
  }
);
export const contactSlice = createSlice({
  name: "contactData",
  initialState,
  reducers: {
    
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchContact.fulfilled, (state, action) => {
        state.loading = false;
        console.log(action.payload)
        state.service.list = action.payload;
        state.noResults = false; // Clear noResults when fetching is successful
      })
      .addCase(fetchContact.rejected, (state, action) => {
        state.loading = false;
        state.error = true;
      })
      .addCase(SearchContact.fulfilled, (state, action) => {
        state.loading = false;
        console.log(action.payload.data.result);
        state.service.list = action.payload.data.result;

        if (action.payload.data.result.length === 0) {
          state.noResults = true; // Set noResults when search yields no results
        } else {
          state.noResults = false; // Clear noResults when search yields results
        }
      })
      .addCase(SearchContact.rejected, (state, action) => {
        state.loading = false;
        state.error = true;
        state.service.list = [];
        state.noResults = false;
      });
  },
});


export default contactSlice.reducer;
