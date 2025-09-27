import { useState } from "react";
import "./UnmannedButton.css";

const UnmannedButton = ({ label }) => {
  const [isOn, setIsOn] = useState(false);

  const toggle = () => setIsOn(!isOn);

  return (
    <div className="unmanned-container" onClick={toggle}>
      <div
        className="unmanned-button"
        style={{ backgroundColor: isOn ? "#f39c12" : "#666" }}
      ></div>
      <div className="button-label">{label}</div>
    </div>
  );
};

export default UnmannedButton;
