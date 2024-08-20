import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface LaunchAppState {
  launchApp: boolean;
}

const initialState: LaunchAppState = {
  launchApp: false,
};

const launchAppSlice = createSlice({
  name: "launchApp",
  initialState,
  reducers: {
    setLaunchApp: (state, action: PayloadAction<boolean>) => {
      state.launchApp = action.payload;
    },
    toggleLaunchApp: (state) => {
      state.launchApp = !state.launchApp;
    },
  },
});

export const { setLaunchApp, toggleLaunchApp } = launchAppSlice.actions;
export default launchAppSlice.reducer;
