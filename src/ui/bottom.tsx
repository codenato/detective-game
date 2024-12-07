import Timer from "./timer";

export function BotttomBar() {
  return (
    <div className="items-center bottom-0 flex w-[1024px] text-center justify-center p-2 bg-blue gap-4 border-x-4 border-b-4 border-white">
      <Timer />
      {/* <p className="text-white text-lg">TEAM REUNION 2024 - CODENATO</p> */}
    </div>
  );
}
