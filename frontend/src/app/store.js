import { configureStore } from "@reduxjs/toolkit";
import userSlice from "../features/userSlice";
import careerSlice from "../features/careerSlice";
import quoteSlice from "../features/quoteSlice";
import contactSlice from "../features/contactSlice";
import {adminSlice} from "../dashboard/api/AdminSlice";
import LoadingSlice from './../features/loading/loadingSlice';

export const store = configureStore({
  reducer: {
    user: userSlice,
    career: careerSlice,
    quote: quoteSlice,
    contact: contactSlice,
    admin: adminSlice,
    loading:LoadingSlice
  },
});
