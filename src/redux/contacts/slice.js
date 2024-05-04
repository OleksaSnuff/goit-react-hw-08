import { createSlice } from "@reduxjs/toolkit";
import { fetchContacts, addContact, deleteContact } from "./operations";

const handlePending = (state) => {
  state.loading = true;
  state.error = null;
};

const handleFulfilledAndRejected = (state, action) => {
  state.loading = false;
  state.items = action.payload;
};

const contactsSlice = createSlice({
  name: "contacts",
  initialState: { items: [], loading: false, error: null },

  extraReducers: (builder) => {
    builder
      .addCase(fetchContacts.pending, handlePending)
      .addCase(fetchContacts.fulfilled, handleFulfilledAndRejected)
      .addCase(fetchContacts.rejected, handleFulfilledAndRejected)

      .addCase(addContact.pending, handlePending)
      .addCase(addContact.fulfilled, handleFulfilledAndRejected)
      .addCase(addContact.rejected, handleFulfilledAndRejected)

      .addCase(deleteContact.pending, handlePending)
      .addCase(deleteContact.fulfilled, handleFulfilledAndRejected)
      .addCase(deleteContact.rejected, handleFulfilledAndRejected);
  },
});

export const contactReducer = contactsSlice.reducer;
