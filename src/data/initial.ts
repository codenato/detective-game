import {
  HintFileType,
  HintPassword,
  RootSliceState,
  TeamColor,
  TeamHintRecord,
  TeamRecord,
} from "./model";

const initialHints = Object.keys(HintPassword).reduce<TeamHintRecord>(
  (acc, key) => {
    acc[key as HintPassword] = {
      blocked: true,
    };
    return acc;
  },
  {}
);

export const initialState: RootSliceState = {
  game: {
    startDate: undefined,
  },
  teams: Object.keys(TeamColor).reduce<TeamRecord>((acc, key) => {
    acc[key as TeamColor] = {
      color: key as TeamColor,
      hints: initialHints,
    };
    return acc;
  }, {}),
  hints: {
    [HintPassword.P061]: {
      filePath: "",
      fileType: HintFileType.AUDIO,
      password: HintPassword.P061,
    },
    [HintPassword.P394]: {
      filePath: "",
      fileType: HintFileType.AUDIO,
      password: HintPassword.P394,
    },
    [HintPassword.P405]: {
      filePath: "",
      fileType: HintFileType.AUDIO,
      password: HintPassword.P405,
    },
    [HintPassword.P516]: {
      filePath: "",
      fileType: HintFileType.AUDIO,
      password: HintPassword.P516,
    },
    [HintPassword.P627]: {
      filePath: "",
      fileType: HintFileType.AUDIO,
      password: HintPassword.P627,
    },
    [HintPassword.P738]: {
      filePath: "",
      fileType: HintFileType.AUDIO,
      password: HintPassword.P738,
    },
    [HintPassword.P849]: {
      filePath: "",
      fileType: HintFileType.AUDIO,
      password: HintPassword.P849,
    },
    [HintPassword.P950]: {
      filePath: "",
      fileType: HintFileType.AUDIO,
      password: HintPassword.P950,
    },
  },
};
