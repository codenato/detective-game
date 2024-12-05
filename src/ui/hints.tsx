import { HintBox } from "./hint-box";

export function Hints() {
  return (
    <div className="flex flex-row gap-10 justify-center">
      <a href="/">
        <HintBox label="1" />
      </a>
      <a href="/">
        <HintBox label="2" />
      </a>
      <a href="/">
        <HintBox label="3" />
      </a>
      <a href="/">
        <HintBox label="4" />
      </a>
      <a href="/">
        <HintBox label="+" blocked />
      </a>
      <a href="/">
        <HintBox label="+" blocked />
      </a>
    </div>
  );
}
