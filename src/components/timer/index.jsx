import "./index.scss";
import { useEffect, useState } from "react";

export const CountDown = ({ hours = 0, minutes = 0, seconds = 0 }) => {
  const [over, setOver] = useState(false);
  const [[h, m, s], setTime] = useState([hours, minutes, seconds]);

  const tick = () => {
    if (over) return;

    if (h === 0 && m === 0 && s === 0) {
      setOver(true);
    } else if (m === 0 && s === 0) {
      setTime([h - 1, 59, 59]);
    } else if (s == 0) {
      setTime([h, m - 1, 59]);
    } else {
      setTime([h, m, s - 1]);
    }
  };

  useEffect(() => {
    const timerID = setInterval(() => tick(), 1000);
    return () => clearInterval(timerID);
  });

  return (
    <div className="timer">
      <p className="timer__time">{`${h.toString().padStart(2, "0")}h : ${m
        .toString()
        .padStart(2, "0")}min : ${s.toString().padStart(2, "0")}s`}</p>
      <div>{over ? "Time's up!" : ""}</div>
    </div>
  );
};
