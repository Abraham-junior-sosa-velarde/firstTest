import { createSlice } from "@reduxjs/toolkit";
const initialState = {
  loader: false,
};
export const globalState = createSlice({
  name: "globalState",
  initialState,
  reducers: {
    showLoader: (state, action) => {
      state.loader = true;
    },
    hideLoader: (state, action) => {
      state.loader = false;
    },
  },
});

export const { showLoader, hideLoader } = globalState.actions;
export default globalState.reducer;
