import { configureStore, ThunkAction, Action } from "@reduxjs/toolkit";
import mailReducer from "../features/counter/MailSlice";

export const store = configureStore({
  reducer: {
    mail: mailReducer,
  },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
