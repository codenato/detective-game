import { deselectTeam } from "../data/slice";
import { useAppDispatch } from "../data/store";

export function Navbar() {
  const dispatch = useAppDispatch();

  return (
    <a href="#" onClick={() => dispatch(deselectTeam())}>
      <div className="bg-blue py-2 justify-center w-[1024px] border-x-4 border-t-4 border-white">
        <p className="text-white text-lg">TEAM REUNION 2024 - CODENATO</p>
      </div>
    </a>
  );
}
