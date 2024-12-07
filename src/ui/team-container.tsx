import { ContainerButtons } from "./container-buttons";
import { Hints } from "./hints";

import { TeamHintContainer } from "./team-hint-container";

export function TeamContainer() {
  return (
    <div
      className={`
      flex flex-col flex-1 py-4 w-[1024px] px-8 bg-blue border-4 border-white`}
    >
      <Hints />
      <TeamHintContainer />
      <ContainerButtons />
    </div>
  );
}
