import { useEffect, useState } from "react";
import { useAppSelector } from "../data/store";
import { formatTimer } from "../helpers";

const Timer = () => {
  const [time, setTime] = useState<number>(0);

  const init = useAppSelector((state) => state.root.startTime);

  useEffect(() => {
    const interval = setInterval(() => {
      const now = new Date().getTime();
      const diff = now - init;
      setTime(Math.floor(diff / 1000));
    }, 1000);

    return () => clearInterval(interval);
  }, [init]);

  return <p className="text-white">{formatTimer(time)}</p>;
};

export default Timer;
