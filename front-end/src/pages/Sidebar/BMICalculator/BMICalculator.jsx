import React, { useState } from "react";
import "./BMICalculator.css";
import SideBar from "../../Sidebar/SideBar";

const BMICalculator = () => {
  const [weight, setWeight] = useState("");
  const [height, setHeight] = useState("");
  const [isMetric, setIsMetric] = useState(true);
  const [bmi, setBMI] = useState(null);
  const [bmiCategory, setBMICategory] = useState("");
  const [interpretation, setInterpretation] = useState("");

  const calculateBMI = () => {
    const heightM = isMetric ? height / 100 : height * 0.0254; // Convert height to meters or inches
    const bmiValue = (weight / (heightM * heightM)).toFixed(2);
    setBMI(bmiValue);
    determineBMICategory(bmiValue);
    interpretBMI(bmiValue);
  };

  const determineBMICategory = (bmiValue) => {
    if (bmiValue < 18.5) {
      setBMICategory("Underweight");
    } else if (bmiValue >= 18.5 && bmiValue <= 24.9) {
      setBMICategory("Normal Weight");
    } else {
      setBMICategory("Overweight");
    }
  };

  const interpretBMI = (bmiValue) => {
    if (bmiValue < 18.5) {
      setInterpretation(
        "You are underweight. Consider consulting a healthcare professional."
      );
    } else if (bmiValue >= 18.5 && bmiValue <= 24.9) {
      setInterpretation("Congratulations! You have a normal weight.");
    } else {
      setInterpretation(
        "You are overweight. Consider consulting a healthcare professional."
      );
    }
  };

  const resetCalculator = () => {
    setWeight("");
    setHeight("");
    setBMI(null);
    setBMICategory("");
    setInterpretation("");
  };

  return (
    <div className="overall">
      <div className="side-container">
        <SideBar />
      </div>
      <div className="content-container">
        <h1>BMI Calculator</h1>
        <div className="input-section">
          <label>
            Weight ({isMetric ? "kg" : "lbs"}):
            <input
              type="number"
              value={weight}
              onChange={(e) => setWeight(e.target.value)}
            />
          </label>
          <label>
            Height ({isMetric ? "cm" : "in"}):
            <input
              type="number"
              value={height}
              onChange={(e) => setHeight(e.target.value)}
            />
          </label>
          <label>
            Units:
            <select onChange={() => setIsMetric(!isMetric)}>
              <option value="metric">Metric</option>
              <option value="imperial">Imperial</option>
            </select>
          </label>
        </div>
        <button onClick={calculateBMI}>Calculate BMI</button>
        <br />
        <button onClick={resetCalculator}>Reset</button>
        {bmi && (
          <div className="result-section">
            <h2>Your BMI is: {bmi}</h2>
            <p>Category: {bmiCategory}</p>
            <p>{interpretation}</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default BMICalculator;
