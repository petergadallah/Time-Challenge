import React, { useRef, useState } from "react";
import ResultModal from "./ResultModal";
import { createPortal } from "react-dom";

export default function TimerChallenge({ title, targetTime }) {
  const timer = useRef();
  const dialogRef = useRef();
  const [remainingTime, setRemainingTime] = useState(targetTime * 1000);

  const timeIsActive = remainingTime < targetTime * 1000 && remainingTime > 0;

  const startHandler = () => {
    timer.current = setInterval(() => {
      setRemainingTime((prevState) => prevState - 10);
    }, 10);
  };

  const stopHandler = () => {
    clearInterval(timer.current);
    dialogRef.current.showModal();
    // setRemainingTime(targetTime * 1000);
  };

  if (remainingTime <= 0) {
    clearInterval(timer.current);
    // setRemainingTime(targetTime * 1000);
    dialogRef.current.showModal();
  }

  function resetTimer() {
    setRemainingTime(targetTime * 1000);
  }

  return (
    <section className="challenge">
      <h2>{title}</h2>
      <p className="challenge-time">
        {targetTime} second{targetTime > 1 ? "s" : ""}
      </p>
      <p>
        <button onClick={timeIsActive ? stopHandler : startHandler}>
          {timeIsActive ? "Stop" : "Start"} Challenge
        </button>
      </p>
      <p className={timeIsActive ? "active" : ""}>
        {timeIsActive ? "Time is Running" : "Timer inactive"}
      </p>

      {createPortal(
        <ResultModal
          onReset={resetTimer}
          ref={dialogRef}
          result={"Lost"}
          targetTime={targetTime}
          remainingTime={remainingTime / 1000}
        />,
        document.getElementById("modal")
      )}
    </section>
  );
}
