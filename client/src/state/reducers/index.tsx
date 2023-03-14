import { combineReducers } from "@reduxjs/toolkit";
import authReducer from "./authReducer";
import conversationReducer from "./conversationReducer";

const reducers = combineReducers({
  auth: authReducer,
  conversation: conversationReducer,
});

export default reducers;
export type RootState = ReturnType<typeof reducers>;
