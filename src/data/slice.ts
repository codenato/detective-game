import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { initialState } from "./initial";
import { HintPassword, TeamColor } from "./model";

export const RootSlice = createSlice({
  name: "root",
  reducers: {
    selectTeam(state, action: PayloadAction<TeamColor>) {
      state.currentTeam = action.payload;
    },
    selectHint(state, action: PayloadAction<HintPassword>) {
      state.currentHint = action.payload;
    },
  },
  initialState,
});
