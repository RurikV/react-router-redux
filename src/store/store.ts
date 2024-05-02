import { configureStore } from "@reduxjs/toolkit";
import { homePageSlice } from "./slices/HomePage";

const store = configureStore({
  reducer: {
    homePage: homePageSlice.reducer,
  },
});
export default store;
