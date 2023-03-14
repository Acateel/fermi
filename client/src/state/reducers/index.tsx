import { combineReducers } from "@reduxjs/toolkit";
import authReducer from "./authReducer";
import conversationReducer from "./conversationReducer";
import messageReducer from "./messageReducer";

const reducers = combineReducers({
  auth: authReducer,
  conversations: conversationReducer,
  messages: messageReducer,
});

export default reducers;
export type RootState = ReturnType<typeof reducers>;
