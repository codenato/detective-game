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

export function getEnumKeyByValue<T extends { [key: string]: string }>(
  enumObj: T,
  value: string
): keyof T | null {
  const entry = Object.entries(enumObj).find(([key, val]) => val === value);
  return entry ? (entry[0] as keyof T) : null;
}

export const formatTimer = (segundos: number): string => {
  const hours = Math.floor(segundos / 3600);
  const mins = Math.floor((segundos % 3600) / 60);
  const secs = segundos % 60;

  return `${hours.toString().padStart(2, "0")}:${mins
    .toString()
    .padStart(2, "0")}:${secs.toString().padStart(2, "0")}`;
};
