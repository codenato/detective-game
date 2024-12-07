import { useAppSelector } from "../data/store";

export function ResultModal() {
  const result = useAppSelector((state) => state.root.result);

  return <p className="text-white text-3xl">{result}</p>;
}
