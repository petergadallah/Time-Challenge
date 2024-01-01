import React, { forwardRef } from "react";

const ResultModal = forwardRef(function (
  { targetTime, remainingTime, onReset },
  ref
) {
  const isWinning = remainingTime > 0;
  const score = ((remainingTime / targetTime) * 100).toFixed(0);
  return (
    <dialog className="result-modal" ref={ref} onClose={onReset}>
      {!isWinning && <h2>You Lost</h2>}
      {isWinning && <h2>Your Score is {score}</h2>}
      <p>
        The target time was <strong>{targetTime} seconds</strong>
      </p>
      <p>
        You stopped the timer with <strong>{remainingTime} seconds left</strong>
      </p>
      <form method="dialog">
        <button>Close</button>
      </form>
    </dialog>
  );
});
export default ResultModal;
