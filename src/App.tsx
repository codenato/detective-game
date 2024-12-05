import { TeamColor } from "./data/model";
import { BotttomBar } from "./ui/bottom";
import { Navbar } from "./ui/navbar";
import { TeamContainer } from "./ui/team-container";
// import Teams from "./ui/teams";

function App() {
  return (
    <div className="h-screen text-center flex flex-col bg-red bg-blue items-center">
      <Navbar />
      {/* <Teams /> */}
      <TeamContainer teamColor={TeamColor.BLACK} />
      <BotttomBar />
    </div>
  );
}

export default App;
