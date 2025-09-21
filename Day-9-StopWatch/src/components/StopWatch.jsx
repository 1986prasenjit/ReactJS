import { useState } from "react";

function StopWatch() {
  const [time, setTime] = useState({
    milliSeconds: 0,
    seconds: 0,
    minutes: 0,
    hour: 0,
  });

  const [status, setStatus] = useState(null);

  function myTimeFunc() {
    setTime((prev) => {
      let { milliSeconds, seconds, minutes, hour } = prev;

      milliSeconds++;
      if (milliSeconds === 100) {
        milliSeconds = 0;
        seconds++;
      }
      if (seconds === 60) {
        seconds = 0;
        minutes++;
      }
      if (minutes === 60) {
        minutes = 0;
        hour++;
      }

      return { milliSeconds, seconds, minutes, hour };
    });
  }

  function handleStart() {
    if (status === null) {
      const setIntervalValue = setInterval(myTimeFunc, 10);
      setStatus(setIntervalValue);
    }
  }

  function handleStop() {
    if (status !== null) {
      clearInterval(status);
      setStatus(null);
    }
  }

  function handleReset() {
    if (status !== null) {
      clearInterval(status);
      setStatus(null);
    }
    setTime({ milliSeconds: 0, seconds: 0, minutes: 0, hour: 0 });
  }

  return (
    <div className="mainContainer">
      <h1>Stop Watch</h1>
      <h2>
        {`${time.hour} : ${time.minutes} : ${time.seconds} : ${time.milliSeconds}`}
      </h2>
      <div className="divContainer">
        <button onClick={handleStart} className="btn green">
          START
        </button>
        <button onClick={handleStop} className="btn">
          STOP
        </button>
        <button onClick={handleReset} className="btn blue">
          RESET
        </button>
      </div>
    </div>
  );
}

export default StopWatch;
