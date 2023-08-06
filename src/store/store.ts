import { configureStore } from "@reduxjs/toolkit";
import { articleApi } from "./api/articleApi";
import authorizedReducer from "./slice/authorizedSlice";

export const store = configureStore({
  reducer: {
    [articleApi.reducerPath]: articleApi.reducer,
    authorized: authorizedReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(articleApi.middleware),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
