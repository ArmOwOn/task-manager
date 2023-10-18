import { createSlice } from "@reduxjs/toolkit";
import Cookies from "js-cookie";

const initialState = {
  theme: Cookies.get("theme") || "brandLight",
};

export const themeChangerSlice = createSlice({
  name: "themeChanger",
  initialState,
  reducers: {
    themeChange: (state, action) => {
      state.theme = action.payload;
      Cookies.set("theme", action.payload, { expires: 365 });
    },
  },
});

export const { themeChange } = themeChangerSlice.actions;

export default themeChangerSlice.reducer;
