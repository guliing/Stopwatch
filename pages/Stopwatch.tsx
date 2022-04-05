import React, { useEffect, useState } from "react";

interface StopwatchProps {
  startTime: boolean;
  indexChange: number;
}

function Stopwatch({ startTime, indexChange }: StopwatchProps) {
  const [time, setTime] = useState(0);

  useEffect(() => {
    setTime(0);
  }, [indexChange]);

  useEffect(() => {
    let interval;

    if (startTime) {
      interval = setInterval(() => {
        setTime((prevTime) => prevTime + 10);
      }, 10);
    } else if (!startTime) {
      clearInterval(interval);
    }

    return () => {
      clearInterval(interval);
    };
  });

  return (
    <div>
      <hr />
      <span>Elapsed Time: </span>
      <span>{("0" + Math.floor((time / 60000) % 60)).slice(-2)}m</span>
      <span>{("0" + Math.floor((time / 1000) % 60)).slice(-2)}s</span>
      <hr />
    </div>
  );
}

export default Stopwatch;
