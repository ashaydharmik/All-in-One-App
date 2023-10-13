import React, { useState } from "react";
import { CountdownCircleTimer } from "react-countdown-circle-timer";
import "./stopwatch.scss";
import { BiSolidUpArrow } from "react-icons/bi";
import { BiSolidDownArrow } from "react-icons/bi";
import music from "../music/alarm.mp3"

const StopWatch = () => {
  const [hours, setHours] = useState(0);
  const [min, setMin] = useState(0);
  const [sec, setSec] = useState(0);
  const [timerKey, setTimerKey] = useState(0);
  const [timerStarted, setTimerStarted] = useState(false);
  const [stopTimer, setStopTimer] = useState(false);
//   const[music,setMusic] = useState(false)

  const handleIncrement = (setter, max) => {
    setter((prevValue) => {
      if (prevValue < max) {
        return prevValue + 1;
      }
      return prevValue;
    });
  };

  const handleDecrement = (setter, min) => {
    setter((prevValue) => {
      if (prevValue > min) {
        return prevValue - 1;
      }
      return prevValue;
    });
  };

  const resetTimer = () => {
    setHours(0);
    setMin(0);
    setSec(0);
    setTimerStarted(false);
    setStopTimer(false);
    setTimerKey((prevKey) => prevKey + 1);
  };

  // Calculate the total duration in seconds
  const totalDuration = hours * 3600 + min * 60 + sec;

  const startTimer = () => {
    if (totalDuration > 0) {
      setTimerKey((prevKey) => prevKey + 1);
      setTimerStarted(true);
      setStopTimer(true);
    }
  };


  


  return (
    <>
      <div className="stop-watch">
        <div className="timer">
          <CountdownCircleTimer
            isPlaying={timerStarted}
            duration={totalDuration}
            colors={"#FF6A6A"}
            trailColor={"#191E39"}
            colorsTime={[totalDuration]}
            key={timerKey}
            strokeWidth={6}
            onComplete={() => {
              setTimerStarted(false);
              setStopTimer(false);
              const audio = document.getElementById("timerAudio");
              if (audio) {
                audio.play();
              }
            }}
          >
            {({ remainingTime }) => {
              const hoursRemaining = Math.floor(remainingTime / 3600);
              const minutesRemaining = Math.floor((remainingTime % 3600) / 60);
              const secondsRemaining = remainingTime % 60;
              return (
                <div className="time-in-watch">
                  {`${hoursRemaining < 10 ? "0" : ""}${hoursRemaining}:`}
                  {`${minutesRemaining < 10 ? "0" : ""}${minutesRemaining}:`}
                  {`${secondsRemaining < 10 ? "0" : ""}${secondsRemaining}`}
                </div>
              );
            }}
          </CountdownCircleTimer>
        </div>

        <div className="watch-time">
          <div className="set-time">
            <div className="hours">
              <p className="timer-title">Hours</p>
              <p>
                <BiSolidUpArrow onClick={() => handleIncrement(setHours, 24)} />
              </p>
              <p>{`${hours < 10 ? "0" : ""}${hours}`}</p>
              <p>
                <BiSolidDownArrow
                  className="down-arrow"
                  onClick={() => handleDecrement(setHours, 0)}
                />
              </p>
            </div>
            <div className="set">:</div>
            <div className="min">
              <p className="timer-title">Minutes</p>
              <p>
                <BiSolidUpArrow onClick={() => handleIncrement(setMin, 60)} />
              </p>
              <p>{`${min < 10 ? "0" : ""}${min}`}</p>
              <p>
                <BiSolidDownArrow
                  className="down-arrow"
                  onClick={() => handleDecrement(setMin, 0)}
                />
              </p>
            </div>
            <div className="set">:</div>
            <div className="sec">
              <p className="timer-title">Seconds</p>
              <p>
                <BiSolidUpArrow onClick={() => handleIncrement(setSec, 60)} />
              </p>
              <p>{`${sec < 10 ? "0" : ""}${sec}`}</p>
              <p>
                <BiSolidDownArrow
                  className="down-arrow"
                  onClick={() => handleDecrement(setSec, 0)}
                />
              </p>
            </div>
          </div>
          <div className="buttons">
            {stopTimer ? (
              <button onClick={resetTimer} className="start-button">
                Stop
              </button>
            ) : (
              <button onClick={startTimer} className="start-button">
                Start
              </button>
            )}
          </div>
        </div>
      </div>

      <audio id="timerAudio">
  <source src={music} type="audio/mpeg" />
</audio>
    </>
  );
};

export default StopWatch;
