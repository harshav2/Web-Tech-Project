import React, { useState } from "react";

const BodyComponent = () => {
  const [weight, setWeight] = useState("");
  const [height, setHeight] = useState("");
  const [arms, setArms] = useState("");
  const [forearms, setForearms] = useState("");
  const [thighs, setThighs] = useState("");
  const [calves, setCalves] = useState("");
  const [chest, setChest] = useState("");
  const [shoulder, setShoulder] = useState("");

  return (
    <div>
      <h5>Body Measurements</h5>

      <label>
        Weight (kg):
        <input
          type="number"
          value={weight}
          onChange={(e) => setWeight(e.target.value)}
          style={{ margin: "8px 0" }}
        />
      </label>

      <label>
        Height (cm):
        <input
          type="number"
          value={height}
          onChange={(e) => setHeight(e.target.value)}
          style={{ margin: "8px 0" }}
        />
      </label>

      <label>
        Arms (cm):
        <input
          type="number"
          value={arms}
          onChange={(e) => setArms(e.target.value)}
          style={{ margin: "8px 0" }}
        />
      </label>

      <label>
        Forearms (cm):
        <input
          type="number"
          value={forearms}
          onChange={(e) => setForearms(e.target.value)}
          style={{ margin: "8px 0" }}
        />
      </label>

      <label>
        Thighs (cm):
        <input
          type="number"
          value={thighs}
          onChange={(e) => setThighs(e.target.value)}
          style={{ margin: "8px 0" }}
        />
      </label>

      <label>
        Calves (cm):
        <input
          type="number"
          value={calves}
          onChange={(e) => setCalves(e.target.value)}
          style={{ margin: "8px 0" }}
        />
      </label>

      <label>
        Chest (cm):
        <input
          type="number"
          value={chest}
          onChange={(e) => setChest(e.target.value)}
          style={{ margin: "8px 0" }}
        />
      </label>

      <label>
        Shoulder (cm):
        <input
          type="number"
          value={shoulder}
          onChange={(e) => setShoulder(e.target.value)}
          style={{ margin: "8px 0" }}
        />
      </label>
    </div>
  );
};

export default BodyComponent;
