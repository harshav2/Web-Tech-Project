// Import necessary React and library components
import React, { useState } from "react";
import {
  FaTh,
  FaBars,
  FaUserAlt,
  FaCalculator,
  FaBed,
  FaDumbbell,
  FaCocktail,
} from "react-icons/fa";
import { ImAlarm } from "react-icons/im";
import { NavLink } from "react-router-dom";
import styles from "./SideBar.css"; // Import your stylesheet

// // Import your logo image
// import logoImage from "../../images/logo.png"; // Replace with the actual path

const SideBar = ({ children }) => {
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => setIsOpen(!isOpen);
  const menuItem = [
    { path: "/dashboard", name: "Dashboard", icon: <FaTh /> },
    { path: "/goals", name: "Goals", icon: <FaUserAlt /> },
    { path: "/BMICalculator", name: "BMI Calculator", icon: <FaCalculator /> },
    { path: "/PomodoroTimer", name: "Pomodoro Timer", icon: <ImAlarm /> },
    { path: "/SleepComponent", name: "Sleep Tracker", icon: <FaBed /> },
    {
      path: "/WorkoutComponent",
      name: "Workout Tracker",
      icon: <FaDumbbell />,
    },
    {
      path: "/WaterIntakeComponent",
      name: "Water Intake",
      icon: <FaCocktail />,
    },
  ];

  return (
    <div className={styles.container} id="overall">
      <div
        style={{ width: isOpen ? "200px" : "200px" }}
        className={styles.sidebar}
      >
        <div className={styles.top_section}>
          <div
            style={{
              marginLeft: isOpen ? "20px" : "20px",
              display: "block",
            }}
            className={styles.bars}
          >
            <h3 style={{ paddingLeft: isOpen ? "0px" : "20px" }}>
              VitalityVoyage
            </h3>
            <FaBars onClick={toggle} />
          </div>
          <br />
        </div>
        {menuItem.map((item, index) => (
          <NavLink
            to={item.path}
            key={index}
            className={styles.link}
            activeClassName={styles.active}
          >
            <div
              className="option"
              style={{ paddingLeft: isOpen ? "20px" : "20px" }}
            >
              <div className={styles.icon}>{item.icon}</div>
              <div
                style={{ display: isOpen ? "block" : "none" }}
                className={styles.link_text}
              >
                {item.name}
              </div>
            </div>
            <br />
          </NavLink>
        ))}
      </div>
      <main>{children}</main>
    </div>
  );
};

export default SideBar;
