import { TeamColor } from "../data/model";
import { getColor } from "../helpers";

interface TeamCardProps {
  color: TeamColor;
}
export default function TeamCard({ color }: TeamCardProps) {
  return (
    <div
      className={
        "w-48 h-48 hover:border-4 hover:border-white " + getColor(color)
      }
      key={color}
    />
  );
}
