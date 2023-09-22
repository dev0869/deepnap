import { createSlice } from "@reduxjs/toolkit";
import { createAsyncThunk } from "@reduxjs/toolkit";
import { base_url, config } from "../../utils/base_url";
import axios from "axios";
import { toast } from "react-toastify";

export const getAdmindata = createAsyncThunk(
  "getAdmindata",
  async (userData, thunkAPI) => {
    try {
      const response = await axios.get(`${base_url}/admin`, config);
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);

export const addEmployee = createAsyncThunk(
  "addEmployee",
  async (employeeData, thunkAPI) => {
    try {
      const response = await axios.post(
        `${base_url}/employee`,
        employeeData,
        config
      );
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);

export const updateEmployee = createAsyncThunk(
  "updateEmployee",
  async (employeeData, thunkAPI) => {
    try {
      const response = await axios.put(
        `${base_url}/employee/${employeeData.employeeId}`,
        employeeData,
        config
      );
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);

const initialState = {
  data: [],
  loading: false,
  error: null,
};

const admin = createSlice({
  name: "admin",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getAdmindata.fulfilled, (state, action) => {
        state.loading = false;
        state.data = action.payload;
      })
      .addCase(getAdmindata.rejected, (state) => {
        state.loading = false;
      })
      .addCase(addEmployee.fulfilled, (state, action) => {
        state.loading = false;
        if(action.payload.message){
          toast.success(action.payload.message);
        }else{
          toast.success("Employee Added Successfully");
        }
      })
      .addCase(addEmployee.rejected, (state,action) => {
        state.loading = false;
        toast.error(action.payload.response.data.error);
      })
      .addCase(updateEmployee.fulfilled, (state, action) => {
        state.loading = false;
        toast.success(action.payload.message);
      })
      .addCase(updateEmployee.rejected, (state,action) => {
        state.loading = false;
        toast.error(action.payload.response.data.error);
      });
  },
});

export const adminSlice = admin.reducer;
