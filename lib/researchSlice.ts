import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface ResearchState {
  title: string;
  draft: string;
  files: File[];
  publishedDrafts: string[];
}

const initialState: ResearchState = {
  title: "",
  draft: "",
  files: [],
  publishedDrafts: [],
};

export const researchSlice = createSlice({
  name: "research",
  initialState,
  reducers: {
    setTitle: (state, action: PayloadAction<string>) => {
      state.title = action.payload;
    },
    setDraft: (state, action: PayloadAction<string>) => {
      state.draft = action.payload;
    },
    addFile: (state, action: PayloadAction<File>) => {
      state.files.push(action.payload);
    },
    publishDraft: (state) => {
      state.publishedDrafts.push(state.draft);
      state.draft = "";
    },
  },
});

export const { setDraft, addFile, publishDraft, setTitle } =
  researchSlice.actions;
export default researchSlice.reducer;
