import { combineReducers } from "@reduxjs/toolkit";
import authReducer from "./authReducer";

const reducers = combineReducers({
  auth: authReducer,
});

export default reducers;
export type RootState = ReturnType<typeof reducers>;
