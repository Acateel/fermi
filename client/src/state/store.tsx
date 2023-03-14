import { configureStore } from "@reduxjs/toolkit";
import reducers from "./reducers";
import { save, load } from "redux-sessionstorage-simple";

export const store = configureStore({
  reducer: reducers,
  //preloadedState: load(), commenting for developing auth
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().prepend(save()),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
