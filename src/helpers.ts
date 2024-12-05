import { TeamColor } from "./data/model";

export const getColor = (color: TeamColor): string => {
  switch (color) {
    case TeamColor.GREEN:
      return "bg-green";
    case TeamColor.OFFWHITE:
      return "bg-offwhite";
    case TeamColor.BROWN:
      return "bg-brown";
    case TeamColor.BLACK:
      return "bg-black";
    default:
      return "bg-blue";
  }
};
