import { useState } from "react";
import "./AtoModeButton.css";

const AtoModeButton = ({ label }) => {
  const [isOn, setIsOn] = useState(false);

  const toggle = () => setIsOn(!isOn);

  return (
    <div className="ato-mode-container" onClick={toggle}>
      <div
        className="ato-button"
        style={{ backgroundColor: isOn ? "#2ecc71" : "#666" }}
      ></div>
      <div className="button-label">{label}</div>
    </div>
  );
};

export default AtoModeButton;
