export interface RootSliceState {
  teams?: TeamRecord;
  currentTeam?: TeamColor;
  currentHint?: keyof typeof HintPassword;
  hints: Hints;
  result?: string;
  resultModalOpened?: boolean;
  answersModalOpened?: boolean;
  isFinalAnswers?: boolean;
  hintPasswordModal?: boolean;
  startTime: number;
  answers: Answers;
  finishedTeams: FinishedTeams;
}

export type TeamRecord = {
  [k in TeamColor]?: Team;
};

export type Team = {
  color: TeamColor;
  finishedAt?: string;
  hints?: TeamHintRecord;
};

export type TeamHintRecord = {
  [K in HintPassword]?: Hint;
};

export type Answers = {
  [K in HintType]: {
    type: K;
    answer: K extends HintType.KILLER
      ? Killer
      : K extends HintType.MURDER_REASON
      ? MurderReason
      : K extends HintType.WEAPON
      ? Weapon
      : K extends HintType.MURDER_METHOD
      ? MurderMethod
      : K extends HintType.CRIME_LOCAL
      ? CrimeLocal
      : K extends HintType.CRIME_TIME
      ? CrimeTime
      : never;
  };
};

export type Hint = {
  fileType: HintFileType;
  filePath: string;
  password: HintPassword;
  files: string[];
};

export type Hints = {
  [k in HintPassword]: Hint;
};

export enum HintPassword {
  P061 = "061",
  P394 = "394",
  P405 = "405",
  P516 = "516",
  P627 = "627",
  P738 = "738",
  P849 = "849",
  P950 = "950",
}

export enum TeamColor {
  OFFWHITE = "off-white",
  GREEN = "green",
  BROWN = "brown",
  BLACK = "black",
}

export enum HintFileType {
  VIDEO = "video",
  CAROUSEL = "carousel",
  PHOTO = "photo",
  AUDIO = "audio",
}

export enum HintType {
  KILLER = "Suspeito",
  MURDER_REASON = "Motivação",
  WEAPON = "Arma do Crime",
  MURDER_METHOD = "Método de homicídio",
  CRIME_TIME = "Horário do Crime",
  CRIME_LOCAL = "Local do Crime",
}

export enum Killer {
  JUSTIN_BIEBER = "Justin Bieber",
  DRAKE = "Drake",
  JAY_Z = "Jay-Z",
  BEYONCE = "Beyoncé",
  RIHANNA = "Rihanna",
  MICHAEL_JACKSON = "Michael Jackson",
  EMINEM = "Eminem",
}

export enum Weapon {
  CRYSTAL_GLASS = "Taça de cristal",
  MICROPHONE = "Microfone",
  POISON = "Veneno",
  KNIFE = "Faca",
  CAR = "Carro",
  POOL = "Piscina",
  OSCAR_TROPHY = "Troféu do Oscar",
}

export enum MurderMethod {
  POISONING = "Envenenamento",
  ASPHYXIATION = "Asfixia",
  HEAD_TRAUMA = "Traumatismo craniano",
  STABBING = "Esfaqueamento",
  DROWNING = "Afogamento",
  HIT_AND_RUN = "Atropelamento",
  BURNING = "Queimado",
}

export enum CrimeTime {
  TIME_18_07 = "18:07",
  TIME_21_02 = "21:02",
  TIME_23_39 = "23:39",
  TIME_00_00 = "00:00",
  TIME_00_47 = "00:47",
  TIME_01_19 = "01:19",
  TIME_02_23 = "02:23",
}

export enum MurderReason {
  RIVALRY = "Rivalidade",
  FRUSTRATION = "Frustração",
  CONFRONTATION = "Confronto",
  OPPORTUNITY_LIMITATION = "Limitação de oportunidades",
  REPUTATION_PRESERVATION = "Preservar reputação",
  EMOTIONAL_DISTURBANCE = "Distúrbio emocional",
  REVENGE = "Vingança",
}

export enum CrimeLocal {
  VIP_ROOM = "Sala VIP",
  RECORDING_STUDIO = "Estúdio de gravação",
  GUEST_ROOM = "Quarto de Hospede",
  POOL_AREA = "Área da piscina",
  STREET = "Rua",
  CLOSET = "CAMARIM",
  PARKING = "Estacionamento",
}

export type FinishedTeams = {
  [k in TeamColor]?: {
    answers: { [x: string]: { answer: string } };
    time: string;
  };
};
