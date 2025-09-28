import { useState } from "react";
import "./EmergencyBrakeButton.css";

const EmergencyBrakeButton = ({ initialOn = false, wrapperId }) => {
  const [isOn, setIsOn] = useState(initialOn);

  const toggle = () => setIsOn(!isOn);

  return (
    <div className="emergency-button-container" onClick={toggle} id={wrapperId}>
      {/* 红色圆形按钮 */}
      <div
        className="emergency-button"
        style={{ backgroundColor: isOn ? "#e74c3c" : "#666" }}
      >
        {/* 中间白圈（分三圆弧） */}
        <div className="white-circle">
          <div className="arc arc1"></div>
          <div className="arc arc2"></div>
          <div className="arc arc3"></div>
        </div>
      </div>
      {/* 下方文字 */}
      <div className="button-label">紧急制动</div>
    </div>
  );
};

export default EmergencyBrakeButton;
