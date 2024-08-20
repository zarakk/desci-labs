import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface openDraftState {
  openDraft: boolean;
}

const initialState: openDraftState = {
  openDraft: false,
};

const openDraftSlice = createSlice({
  name: "openDraft",
  initialState,
  reducers: {
    setOpenDraft: (state, action: PayloadAction<boolean>) => {
      state.openDraft = action.payload;
    },
    toggleOpenDraft: (state) => {
      state.openDraft = !state.openDraft;
    },
  },
});

export const { setOpenDraft, toggleOpenDraft } = openDraftSlice.actions;
export default openDraftSlice.reducer;
