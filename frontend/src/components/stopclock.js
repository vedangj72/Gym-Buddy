import React, { useState, useRef } from "react";

export default function Stopwatch() {
  const [isRunning, setIsRunning] = useState(false);
  const [time, setTime] = useState(0);
  const timerRef = useRef(null);

  const start = () => {
    if (!isRunning) {
      timerRef.current = setInterval(() => {
        setTime((prevTime) => prevTime + 1);
      }, 10); // Update the interval to 10 milliseconds
      setIsRunning(true);
    }
  };

  const stop = () => {
    clearInterval(timerRef.current);
    setIsRunning(false);
  };

  const reset = () => {
    clearInterval(timerRef.current);
    setIsRunning(false);
    setTime(0);
  };

  const formatTime = (milliseconds) => {
    const hrs = Math.floor(milliseconds / 3600000);
    const mins = Math.floor((milliseconds % 3600000) / 60000);
    const secs = Math.floor((milliseconds % 60000) / 1000);
    const ms = milliseconds % 1000;

    return (
      <span style={{ fontSize: "24px" }}>
        {String(hrs).padStart(2, "0")} : {String(mins).padStart(2, "0")} :{" "}
        {String(secs).padStart(2, "0")} : {String(ms).padStart(3, "0")}
      </span>
    );
  };

  return (
    <div className="container">
      <h1 className="text-center" style={{ fontSize: "36px" }}>
        Stopwatch
      </h1>
      <div
        className="container text-center mt-3"
        style={{
          border: "1px solid black",
          borderRadius: "5px",
          backgroundColor: "#dcdad561",
          width: "400px",
          fontSize: "24px",
        }}
      >
        <div className="row mt-3">
          <p className="col">{formatTime(time)}</p>
        </div>
        <div className="container text-center m-3">
          {isRunning ? (
            <button className="btn btn-danger m-3" onClick={stop}>
              Stop
            </button>
          ) : (
            <button className="btn btn-success m-3" onClick={start}>
              Start
            </button>
          )}
          <button className="btn btn-primary m-3" onClick={reset}>
            Reset
          </button>
        </div>
      </div>
    </div>
  );
}
