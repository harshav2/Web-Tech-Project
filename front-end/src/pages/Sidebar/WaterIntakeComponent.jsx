import React, { useState } from "react";
import SideBar from "./SideBar";
import "./WaterIntakeComponent.css"; // Import your stylesheet

const WaterIntakeComponent = () => {
  const [waterIntake, setWaterIntake] = useState(0);
  const [goal, setGoal] = useState(8);

  const handleWaterIntakeChange = (event) => {
    const value = parseInt(event.target.value, 10) || 0;
    setWaterIntake(value);
  };

  const handleGoalChange = (event) => {
    const value = parseInt(event.target.value, 10) || 0;
    setGoal(value);
  };

  const completionPercentage = (waterIntake / goal) * 100;

  const handleSaveClick = () => {
    console.log(`Water intake saved: ${waterIntake} cups`);
  };

  return (
    <div className="overall">
      <div className="side-container">
        <SideBar />
      </div>
      <div className="content-container">
        <h1>Water Intake</h1>

        <label>
          Enter Water Intake (cups):
          <input
            type="number"
            value={waterIntake}
            onChange={handleWaterIntakeChange}
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
            step={1}
            min={1}
            max={12}
          />
          <span>{goal}</span>
        </div>

        <div style={{ marginTop: "24px" }}>
          <p>Water Intake Progress</p>
          <progress max="100" value={completionPercentage}></progress>
        </div>

        <button style={{ marginTop: "24px" }} onClick={handleSaveClick}>
          Save
        </button>
      </div>
    </div>
  );
};

export default WaterIntakeComponent;
