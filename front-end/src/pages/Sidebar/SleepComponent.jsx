import React, { useState } from "react";
import SideBar from "./SideBar";
import "./SleepComponent.css"; // Import your stylesheet

const SleepComponent = () => {
  const [sleepDuration, setSleepDuration] = useState(0);
  const [goal, setGoal] = useState(7);

  const handleSleepDurationChange = (event) => {
    const value = parseFloat(event.target.value) || 0;
    setSleepDuration(value);
  };

  const handleGoalChange = (event) => {
    const value = parseFloat(event.target.value) || 0;
    setGoal(value);
  };

  const completionPercentage = (sleepDuration / goal) * 100;

  const handleSaveClick = () => {
    console.log(`Sleep duration saved: ${sleepDuration} hours`);
  };

  const getMotivationalMessage = () => {
    if (completionPercentage >= 100) {
      return "Great job! You achieved your sleep goal.";
    } else if (completionPercentage > 80) {
      return "You're almost there! Keep it up.";
    } else if (completionPercentage > 60) {
      return "Good effort! Strive for a bit more tonight.";
    } else {
      return "Sleep is important for your well-being. Make it a priority tonight.";
    }
  };

  return (
    <div className="overall">
      <div className="side-container">
        <SideBar />
      </div>
      <div className="content-container">
        <h1>Sleep Tracker</h1>
        <br />
        <h5>Sleep Duration</h5>
        <label>
          Enter Sleep Duration (hours):
          <input
            type="number"
            value={sleepDuration}
            onChange={handleSleepDurationChange}
            fullWidth
            style={{ margin: "8px 0" }}
          />
        </label>

        <div style={{ marginTop: "24px" }}>
          <p>Set Your Daily Goal</p>
          <input
            type="range"
            value={goal}
            onChange={handleGoalChange}
            step={0.5}
            min={1}
            max={12}
          />
          <span>{goal}</span>
        </div>

        <div style={{ marginTop: "24px" }}>
          <p>Sleep Progress</p>
          <progress max="100" value={completionPercentage}></progress>
        </div>

        <div style={{ marginTop: "24px" }}>
          <p>Sleep Message</p>
          <div>{getMotivationalMessage()}</div>
        </div>

        <button style={{ marginTop: "24px" }} onClick={handleSaveClick}>
          Save
        </button>
      </div>
    </div>
  );
};

export default SleepComponent;
