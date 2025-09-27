import { useState } from "react";
import "./SingleRedButton.css";

const SingleRedButton = ({ label, topLabel }) => {
  const [isOn, setIsOn] = useState(false);

  const toggle = () => setIsOn(!isOn);

  return (
    <div className="single-red-button-container" onClick={toggle}>
      {/* 上方文字 */}
      <div className="top-label">{topLabel}</div>
      {/* 红色按钮 */}
      <div
        className="red-button"
        style={{ backgroundColor: isOn ? "#e74c3c" : "#666" }}
      ></div>
      {/* 下方文字 */}
      <div className="bottom-label">{label}</div>
    </div>
  );
};

export default SingleRedButton;
