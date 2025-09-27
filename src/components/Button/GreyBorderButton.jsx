import { useState } from "react";
import "./GreyBorderButton.css";

const GreyBorderButton = ({ color, label, initialOn = false }) => {
  const [isOn, setIsOn] = useState(initialOn);

  const toggle = () => setIsOn(!isOn);

  return (
    <div className="grey-border-button-container" onClick={toggle}>
      <div
        className="grey-border-button"
        style={{ backgroundColor: isOn ? color : "#666" }}
      ></div>
      <div className="button-label">{label}</div>
    </div>
  );
};

export default GreyBorderButton;
