import { useState, useEffect } from "react";

const Timer = () => {
  const [timeInput, setTimeInput] = useState(0);
  const [curTime, setCurTime] = useState(0);
  const [isRunning, setIsRunning] = useState(false);

  

  let countFun = () => {
    let count=timeInput;
    if(isRunning){
       let id= setInterval(()=>{
            setCurTime((prevTime)=>prevTime-1);
            count--;
            if(count<=0){
                clearInterval(id);
                console.log("cleared Intervel");
            }
        },1000)
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

  return (
    <div>
      <input
        className="border-2"
        type="number"
        onChange={(event) => setTimeInput(event.target.value)}
      />
      <button className="bg-blue-500" onClick={handleClick}>
        Start Timer
      </button>

      <div>Time Left : {curTime} </div>
    </div>
  );
};

export default Timer;
