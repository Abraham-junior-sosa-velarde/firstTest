import { configureStore } from "@reduxjs/toolkit";
import CrudSliceReducer from "../containers/redux/redux";
import globalStateReducer from "./globalRedux";

export const store = configureStore({
  reducer: {
    crudStore: CrudSliceReducer,
    globalState: globalStateReducer,
  },
});
