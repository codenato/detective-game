import { TeamColor } from "../data/model";
import TeamCard from "./team-card";

export default function Teams() {
  return (
    <div className="flex flex-row gap-4 justify-center">
      <a href="/">
        <TeamCard color={TeamColor.BLACK} />
      </a>
      <a href="/">
        <TeamCard color={TeamColor.BROWN} />
      </a>
      <a href="/">
        <TeamCard color={TeamColor.OFFWHITE} />
      </a>
      <a href="/">
        <TeamCard color={TeamColor.GREEN} />
      </a>
    </div>
  );
}
