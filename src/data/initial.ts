import {
  CrimeLocal,
  CrimeTime,
  HintFileType,
  HintPassword,
  HintType,
  Killer,
  MurderMethod,
  MurderReason,
  RootSliceState,
  TeamColor,
  // TeamHintRecord,
  TeamRecord,
  Weapon,
} from "./model";

// const initialHints = Object.keys(HintPassword).reduce<TeamHintRecord>(
//   (acc, key) => {
//     acc[key as HintPassword] = {
//       blocked: true,
//     };
//     return acc;
//   },
//   {}
// );

export const initialState: RootSliceState = {
  startTime: new Date().getTime(),
  finishedTeams: {},
  game: {
    startDate: undefined,
  },
  teams: Object.values(TeamColor).reduce<TeamRecord>((acc, key) => {
    acc[key as TeamColor] = {
      color: key as TeamColor,
      hints: {},
    };
    return acc;
  }, {}),
  hints: {
    [HintPassword.P061]: {
      filePath: "",
      fileType: HintFileType.PHOTO,
      password: HintPassword.P061,
      files: ["0.png"],
    },
    [HintPassword.P394]: {
      filePath: "",
      fileType: HintFileType.VIDEO,
      password: HintPassword.P394,
      files: ["0.mp4"],
    },
    [HintPassword.P405]: {
      filePath: "",
      fileType: HintFileType.PHOTO,
      password: HintPassword.P405,
      files: ["0.png"],
    },
    [HintPassword.P516]: {
      filePath: "",
      fileType: HintFileType.PHOTO,
      password: HintPassword.P516,
      files: ["0.png"],
    },
    [HintPassword.P627]: {
      filePath: "",
      fileType: HintFileType.VIDEO,
      password: HintPassword.P627,
      files: ["0.mp4"],
    },
    [HintPassword.P738]: {
      filePath: "",
      fileType: HintFileType.CAROUSEL,
      password: HintPassword.P738,
      files: Array.from({ length: 30 }).map(
        (_, key) => key.toString() + ".JPG"
      ),
    },
    [HintPassword.P849]: {
      filePath: "",
      fileType: HintFileType.PHOTO,
      password: HintPassword.P849,
      files: ["0.jpeg"],
    },
    [HintPassword.P950]: {
      filePath: "",
      fileType: HintFileType.AUDIO,
      password: HintPassword.P950,
      files: ["0.mp3"],
    },
  },
  answers: {
    [HintType.CRIME_LOCAL]: {
      answer: CrimeLocal.POOL_AREA,
      type: HintType.CRIME_LOCAL,
    },
    [HintType.CRIME_TIME]: {
      answer: CrimeTime.TIME_21_02,
      type: HintType.CRIME_TIME,
    },
    [HintType.KILLER]: {
      answer: Killer.MICHAEL_JACKSON,
      type: HintType.KILLER,
    },
    [HintType.MURDER_METHOD]: {
      answer: MurderMethod.HEAD_TRAUMA,
      type: HintType.MURDER_METHOD,
    },
    [HintType.MURDER_REASON]: {
      answer: MurderReason.REVENGE,
      type: HintType.MURDER_REASON,
    },
    [HintType.WEAPON]: {
      answer: Weapon.MICROPHONE,
      type: HintType.WEAPON,
    },
  },
};
