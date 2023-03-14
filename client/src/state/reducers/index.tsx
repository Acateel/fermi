import { combineReducers } from "@reduxjs/toolkit";
import authReducer from "./authReducer";
import conversationReducer from "./conversationReducer";

const reducers = combineReducers({
  auth: authReducer,
  conversations: conversationReducer,
});

export default reducers;
export type RootState = ReturnType<typeof reducers>;
