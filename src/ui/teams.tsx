import { TeamColor } from "../data/model";
import { selectTeam } from "../data/slice";
import { useAppDispatch, useAppSelector } from "../data/store";
import TeamCard from "./team-card";

export default function Teams() {
  const dispatch = useAppDispatch();

  const onSelectTeam = (team: TeamColor) => () => dispatch(selectTeam(team));
  const finishedTeams = useAppSelector((state) => state.root.finishedTeams);

  return (
    <div className="flex flex-col items-center flex-1 justify-center border-4 border-white w-[1024px]">
      <div className="flex flex-row gap-10 justify-evenly items-center w-full">
        {Object.values(TeamColor).map((key) => {
          if (!finishedTeams[key]) {
            return (
              <a href="#" onClick={onSelectTeam(key)} key={key}>
                <TeamCard color={key} />
              </a>
            );
          }
        })}
      </div>
    </div>
  );
}
