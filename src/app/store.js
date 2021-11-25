import { configureStore } from "@reduxjs/toolkit";
import mailReducer from "../features/counter/MailSlice";

export const store = configureStore({
  reducer: {
    mail: mailReducer,
  },
});
