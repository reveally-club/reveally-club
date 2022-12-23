import { Action, ThunkAction, configureStore } from "@reduxjs/toolkit";
import { createWrapper } from "next-redux-wrapper";
import logger from "redux-logger";
import { useDispatch } from "react-redux";
import { threadSlice } from "../reducers/thread";

const makeStore = () => {
  const store = configureStore({
    reducer: {
      [threadSlice.reducerPath]: threadSlice.reducer,
    },
    middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware().concat(logger, threadSlice.middleware),
    devTools: process.env.NODE_ENV !== "production",
  });
  return store;
};

const wrapper = createWrapper(makeStore, {
  debug: false,
});

type AppStore = ReturnType<typeof makeStore>;
type AppDispatch = AppStore["dispatch"];
export type RootState = ReturnType<AppStore["getState"]>;
export const useAppDispatch = () => useDispatch<AppDispatch>();
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action
>;

export default wrapper;
