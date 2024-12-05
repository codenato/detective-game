interface HintBoxProps {
  label: string;
  blocked?: boolean;
}

export function HintBox({ label, blocked }: HintBoxProps) {
  return (
    <div
      className={`px-4 py-2 ${
        blocked
          ? "bg-disabled hover:shadow-[inset_0_0_0_4px_rgba(0,0,0,1)]"
          : "bg-blue hover:shadow-[inset_0_0_0_4px_rgba(255,255,255,1)]"
      } min-w-[120px] `}
    >
      <p
        className={`text-2xl ${blocked ? "text-text_disabled" : "text-white"}`}
      >
        {label}
      </p>
    </div>
  );
}
