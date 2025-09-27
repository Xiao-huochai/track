import { useState } from "react";
import "./SquareButton.css";

const SquareButton = ({ color, label, initialOn = false }) => {
  const [isOn, setIsOn] = useState(initialOn);

  const toggle = () => setIsOn(!isOn);

  return (
    <div className="square-button-container" onClick={toggle}>
      <div
        className="square-button"
        style={{ backgroundColor: isOn ? color : "#666" }}
      ></div>
      <div className="button-label">{label}</div>
    </div>
  );
};

export default SquareButton;
