import { configureStore } from "@reduxjs/toolkit";
import themeChangerReducer from "../features/themeChanger/themeChangerSlice";

export const store = configureStore({
  reducer: {
    themeChanger: themeChangerReducer,
  },
});
