import { RootSliceState } from "../model";

export function hintsByCurrentTeamSelector(state: { root: RootSliceState }) {
  return state.root.teams![state.root.currentTeam!]?.hints;
}
