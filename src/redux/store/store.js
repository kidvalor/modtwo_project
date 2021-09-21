//configureStore gives us all the functions and properties need to create Store (gives all thunk, dev-tools extensiion, etc. )

import { configureStore } from "@reduxjs/toolkit";
import weatherReducer from "../slices/weatherSlices";
const store = configureStore({
  reducer: weatherReducer,
});
export default store;
