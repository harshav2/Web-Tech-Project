// PomodoroTimer.jsx
import React, { useState, useEffect } from "react";
import "./PomodoroTimer.css";
import SideBar from "../SideBar";
import beepSound from "./beep.mp3";

const PomodoroTimer = () => {
  const [sessionMinutes, setSessionMinutes] = useState(25);
  const [breakMinutes, setBreakMinutes] = useState(5);
  const [minutes, setMinutes] = useState(sessionMinutes);
  const [seconds, setSeconds] = useState(0);
  const [isActive, setIsActive] = useState(false);
  const [isSession, setIsSession] = useState(true);

  useEffect(() => {
    let interval;

    if (isActive) {
      interval = setInterval(() => {
        if (seconds === 0) {
          if (minutes === 0) {
            clearInterval(interval);
            setIsActive(false);
            playNotificationSound();
            toggleSession();
          } else {
            setMinutes(minutes - 1);
            setSeconds(59);
          }
        } else {
          setSeconds(seconds - 1);
        }
      }, 1000);
    } else {
      clearInterval(interval);
    }

    return () => clearInterval(interval);
  }, [isActive, minutes, seconds]);

  const playNotificationSound = () => {
    const audio = new Audio(beepSound);
    audio.play();
  };

  const toggleTimer = () => {
    setIsActive(!isActive);
  };

  const resetTimer = () => {
    setIsActive(false);
    setIsSession(true);
    setMinutes(sessionMinutes);
    setSeconds(0);
  };

  const toggleSession = () => {
    setIsSession(!isSession);
    setMinutes(isSession ? breakMinutes : sessionMinutes);
    setSeconds(0);
  };

  const adjustSessionDuration = (value) => {
    setSessionMinutes(Math.max(1, sessionMinutes + value));
    resetTimer();
  };

  const adjustBreakDuration = (value) => {
    setBreakMinutes(Math.max(1, breakMinutes + value));
    resetTimer();
  };

  const formattedTime = (value) => String(value).padStart(2, "0");

  return (
    <div className="overall">
      <div className="side-container">
        <SideBar />
      </div>
      <div className="content-container">
        <div className={`content-container ${isSession ? "session" : "break"}`}>
          <h1>Pomodoro Timer</h1>
          <div className="timer">
            <span>{formattedTime(minutes)}</span>:
            <span>{formattedTime(seconds)}</span>
          </div>
          <div
            className="progress-bar"
            style={{
              width: `${
                ((minutes * 60 + seconds) /
                  (isSession ? sessionMinutes * 60 : breakMinutes * 60)) *
                100
              }%`,
            }}
          ></div>
          <div className="buttons">
            <button onClick={toggleTimer}>
              {isActive ? "Pause" : "Start"}
            </button>
            <button onClick={resetTimer}>Reset</button>
            <button onClick={toggleSession}>
              {isSession ? "Break" : "Session"}
            </button>
          </div>
          <div className="duration-adjust">
            <div style={{ display: "flex", justifyContent: "space-around" }}>
              <span>Session Duration</span>
              <button onClick={() => adjustSessionDuration(-1)}>-</button>
              <span>{sessionMinutes}</span>
              <button onClick={() => adjustSessionDuration(1)}>+</button>
            </div>
            <div style={{ display: "flex", justifyContent: "space-around" }}>
              <span>Break Duration</span>
              <button onClick={() => adjustBreakDuration(-1)}>-</button>
              <span>{breakMinutes}</span>
              <button onClick={() => adjustBreakDuration(1)}>+</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PomodoroTimer;
