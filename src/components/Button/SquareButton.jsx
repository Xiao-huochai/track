import { useState } from "react";
import "./SquareButton.css";

const SquareButton = ({
  color,
  inActiveColor = "#666",
  label,
  initialOn = false,
  wrapperId,
}) => {
  const [isOn, setIsOn] = useState(initialOn);

  const toggle = () => setIsOn(!isOn);

  return (
    <div className="square-button-container" onClick={toggle} id={wrapperId}>
      <div
        className="square-button"
        style={{ backgroundColor: isOn ? color : inActiveColor }}
      ></div>
      <div className="button-label">{label}</div>
    </div>
  );
};

export default SquareButton;
