import { createSlice } from "@reduxjs/toolkit";

export const mailSlice = createSlice({
  name: "mail",
  initialState: {
    sendMessageIsOpen: false,
    selectedMail: null,
  },
  reducers: {
    openSendMessage: (state) => {
      state.sendMessageIsOpen = true;
    },
    closeSendMessage: (state) => {
      state.sendMessageIsOpen = false;
    },
    selectMail: (state, action) => {
      state.selectedMail = action.payload;
    },
  },
});

export const { openSendMessage, closeSendMessage, selectMail } =
  mailSlice.actions;

export const selectSendMessageIsOpen = (state: any) =>
  state.mail.sendMessageIsOpen;

export const selectOpenMail = (state: any) => state.mail.selectedMail;

export default mailSlice.reducer;
