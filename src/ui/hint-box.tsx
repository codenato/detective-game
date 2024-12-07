import { HintPassword } from "../data/model";
import { useAppSelector } from "../data/store";

interface HintBoxProps {
  label: string;
  blocked?: boolean;
  selected?: boolean;
  hintKey?: keyof typeof HintPassword;
}

export function HintBox({ label, blocked, hintKey }: HintBoxProps) {
  const selected = useAppSelector((state) => {
    if (!hintKey) return false;
    return state.root.currentHint === hintKey;
  });

  return (
    <div
      className={`px-4 py-2 ${
        blocked
          ? "bg-disabled hover:shadow-[inset_0_0_0_4px_rgba(74,74,74,1)]"
          : "bg-blue hover:shadow-[inset_0_0_0_4px_rgba(255,255,255,1)] "
      } ${
        selected
          ? "border-8 border-white"
          : !blocked
          ? "border-4 border-white"
          : ""
      }
      min-w-[120px] `}
    >
      <p
        className={`text-2xl ${blocked ? "text-text_disabled" : "text-white"}`}
      >
        {label}
      </p>
    </div>
  );
}
