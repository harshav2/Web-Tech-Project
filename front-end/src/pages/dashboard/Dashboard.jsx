import React from "react";
import SideBar from "../Sidebar/SideBar";
import { FaCheck, FaTimes } from "react-icons/fa";
import "./Dashboard.css"; // Import your CSS file
import Footer from "../../components/Footer";

const Dashboard = () => {
  const dos = [
    "Warm up before starting your workout.",
    "Stay hydrated during your workout.",
    "Include a mix of cardio and strength training.",
    "Focus on proper form during exercises.",
    "Listen to your body and rest when needed.",
    "Incorporate flexibility exercises into your routine.",
    "Set realistic fitness goals.",
    "Include a variety of exercises to keep it interesting.",
    "Gradually increase the intensity of your workouts.",
    "Celebrate your fitness achievements.",
  ];

  const donts = [
    "Don't skip meals, especially post-workout nutrition.",
    "Don't overtrain; allow your body time to rest and recover.",
    "Avoid improper lifting techniques.",
    "Don't neglect proper hydration.",
    "Avoid excessive use of supplements without professional advice.",
    "Don't rely solely on one type of exercise.",
    "Avoid comparing your progress to others.",
    "Don't ignore warning signs of injury; seek professional help.",
    "Avoid excessive cardio without balancing with strength training.",
    "Don't neglect recovery and sleep.",
  ];

  const generateTips = (tips, isDos) => {
    const icon = isDos ? (
      <FaCheck className="tip-icon tip-green" />
    ) : (
      <FaTimes className="tip-icon tip-red" />
    );

    return tips.map((tip, index) => (
      <div className="tip" key={index}>
        {icon}
        <p>
          {isDos ? "Do" : "Don't"} # {index + 1}: {tip} <br />
        </p>
      </div>
    ));
  };

  return (
    <div>
      <div className="overall">
        <div className="side">
          <SideBar />
        </div>
        <div className="dashboard-container">
          <div className="dashboard-header">
            <h2>Gym Dashboard</h2>
          </div>

          <div className="dashboard-content">
            <div className="dos-column">
              <h3>Fitness Dos</h3>
              {generateTips(dos, true)}
            </div>

            <div className="donts-column">
              <h3>Fitness Don'ts</h3>
              {generateTips(donts, false)}
            </div>
          </div>
        </div>
      </div>
      <Footer></Footer>
    </div>
  );
};

export default Dashboard;
