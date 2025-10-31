import { useState, useEffect } from "react";

const Timer = () => {
  const [timeInput, setTimeInput] = useState(0);
  const [curTime, setCurTime] = useState(0);
  const [timing, setTiming] = useState("");
  const [isRunning, setIsRunning] = useState(false);

  let countFun = () => {
    let count = timeInput;
    if (isRunning) {
      let id = setInterval(() => {
        setCurTime((prevTime) => {
          if (prevTime <= 0) {
            prevTime = 0;
            clearInterval(id);
            return;
          }
          return prevTime - 1;
        });
        count--;
        if (count <= 0) {
          clearInterval(id);
          console.log("cleared Intervel");
          setIsRunning(false);
        }
      }, 1000);
      setTiming(id);
    }
  };

  useEffect(countFun, [isRunning]);

  let handleClick = () => {
    if (timeInput > 0) {
      console.log("all good");
      setIsRunning(true);
      setCurTime(timeInput);
    } else {
      alert("Enter correct time to start the timer");
    }
  };

  let handleReset = () => {
    console.log("Reset");
    setCurTime((prevTime) => (prevTime = 0));
    setIsRunning(false);
    clearInterval(curTime);
  };

  let handlePause = () => {
    clearInterval(timing);
  };

  return (
    <div>
      <h1>BackWard Counter</h1>
      <input
        className="border-2 "
        type="number"
        onChange={(event) => setTimeInput(event.target.value)}
        disabled={isRunning}
      />
      <button
        className="bg-blue-500 m-4"
        onClick={handleClick}
        disabled={isRunning}
      >
        Start Timer
      </button>

      <button className="bg-violet-500 m-4" onClick={handlePause}>
        Pause
      </button>

      <button className="bg-red-500 m-4" onClick={handleReset}>
        Reset
      </button>

      <div>Time Left : {curTime} </div>
    </div>
  );
};

export default Timer;
