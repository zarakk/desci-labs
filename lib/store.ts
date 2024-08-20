import { configureStore } from "@reduxjs/toolkit";
import { createWrapper } from "next-redux-wrapper";
import researchReducer from "./researchSlice";
import launchAppSlice from "./launchAppSlice";
import openDraftSlice from "./openDraftSlice";

export const makeStore = () =>
  configureStore({
    reducer: {
      research: researchReducer,
      launchApp: launchAppSlice,
      openDraft: openDraftSlice,
    },
  });

export type AppStore = ReturnType<typeof makeStore>;
export type RootState = ReturnType<AppStore["getState"]>;
export type AppDispatch = AppStore["dispatch"];

export const wrapper = createWrapper<AppStore>(makeStore);
