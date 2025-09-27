import { useState } from "react";
import "./IndicatorLight.css";

const IndicatorLight = ({
  label,
  color,
  initialState = false,
  isButton = false,
}) => {
  const [isOn, setIsOn] = useState(initialState);

  const toggle = () => {
    setIsOn(!isOn);
  };

  return (
    <div
      className="indicator-light"
      onClick={isButton ? toggle : null}
      style={{ cursor: isButton ? "pointer" : "default" }}
    >
      <div className={`light ${isOn ? "on" : "off"} ${color}`}></div>
      <div className="light-label">{label}</div>
    </div>
  );
};

export default IndicatorLight;
