import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { initialState } from "./initial";
import { HintPassword, TeamColor } from "./model";
import { formatTimer } from "../helpers";

export const rootSlice = createSlice({
  name: "root",
  reducers: {
    selectTeam(state, action: PayloadAction<TeamColor>) {
      state.currentTeam = action.payload;
    },
    deselectTeam(state) {
      state.currentTeam = undefined;
      state.currentHint = undefined;
    },
    selectHint(state, action: PayloadAction<keyof typeof HintPassword>) {
      state.currentHint = action.payload;
    },
    openResultModal(state) {
      state.resultModalOpened = true;
    },
    closeResultModal(state) {
      state.resultModalOpened = false;
    },
    openAnswersModal(state) {
      state.answersModalOpened = true;
    },
    openFinalAnswersModal(state) {
      state.answersModalOpened = true;
      state.isFinalAnswers = true;
    },
    closeAnswersModal(state) {
      state.answersModalOpened = false;
    },
    openHintPasswordModal(state) {
      state.hintPasswordModal = true;
    },
    closeHintPasswordModal(state) {
      state.hintPasswordModal = false;
    },
    addHintToCurrentTeam(
      state,
      action: PayloadAction<keyof typeof HintPassword>
    ) {
      const currentTeamHints = state.teams![state.currentTeam!]!.hints;
      const key = HintPassword[action.payload];

      state.teams![state.currentTeam!]!.hints = {
        ...currentTeamHints,
        [action.payload]: state.hints[key],
      };

      state.hintPasswordModal = false;
      state.currentHint = action.payload;
    },
    changeResult(state, action: PayloadAction<string>) {
      state.result = action.payload;
      state.answersModalOpened = false;
      state.resultModalOpened = true;
      state.currentTeam = undefined;
    },
    finalSubmit(
      state,
      action: PayloadAction<{
        [x in string]: { answer: string };
      }>
    ) {
      const now = new Date().getTime();
      const diff = now - state.startTime;
      const timer = formatTimer(Math.floor(diff / 1000));

      state.isFinalAnswers = false;
      state.finishedTeams = {
        ...state.finishedTeams,
        [state.currentTeam as TeamColor]: {
          answers: action.payload,
          time: timer,
        },
      };
      state.result =
        "OBRIGADO POR PARTICIPAR, SABERÁ (SEM CHORAR) O RESULTADO EM BREVE 😘";
      state.answersModalOpened = false;
      state.resultModalOpened = true;
      state.currentTeam = undefined;
    },
  },
  initialState,
});

export default rootSlice.reducer;
export const {
  closeResultModal,
  openResultModal,
  selectHint,
  selectTeam,
  closeAnswersModal,
  openAnswersModal,
  deselectTeam,
  addHintToCurrentTeam,
  closeHintPasswordModal,
  openHintPasswordModal,
  changeResult,
  finalSubmit,
  openFinalAnswersModal,
} = rootSlice.actions;
