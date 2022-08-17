import { configureStore } from "@reduxjs/toolkit";
import BaiTapDatVeReducer from "./reducers/bookingReducer";

const store = configureStore({
  reducer: {
    BaiTapDatVeReducer,
  },
});

export default store;
