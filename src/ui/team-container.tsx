import { TeamColor } from "../data/model";
import { getColor } from "../helpers";
import { ContainerButtons } from "./container-buttons";
import { ContainerHint } from "./container-hint";
import { Hints } from "./hints";

interface TeamContainerProps {
  teamColor: TeamColor;
}

export function TeamContainer({ teamColor }: TeamContainerProps) {
  return (
    <div
      className={`${getColor(
        teamColor
      )} flex flex-col flex-1 py-4 w-[1024px] px-4`}
    >
      <Hints />
      <ContainerHint />
      <ContainerButtons />
    </div>
  );
}
