import { useState } from "react";
import Stopwatch from "./Stopwatch";

function StopwatchMain() {
  const [isStartTimer, setIsStartTimer] = useState(false);
  const [indexChange, setIndexChange] = useState(0);

  const startQueryclick = () => {
    setIndexChange(indexChange + 1);
    setIsStartTimer(true);
  };

  return (
    <div>
      <Stopwatch startTime={isStartTimer} indexChange={indexChange} />
      <button onClick={startQueryclick}>Start</button>
    </div>
  );
}

export default StopwatchMain;
