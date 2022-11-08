import { createSlice } from "@reduxjs/toolkit";
const initialState = {
  data: [],
};
export const CrudSlice = createSlice({
  name: "initialRequestData",
  initialState,
  reducers: {
    initialRequestCrud: (state, action) => {
      state.data = action.payload;
    },
  },
});

export const { initialRequestCrud } = CrudSlice.actions;
export default CrudSlice.reducer;
