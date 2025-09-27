import { useState } from "react";
import "./ColoredButton.css";

const ColoredButton = ({ color, label, initialOn = false }) => {
  const [isOn, setIsOn] = useState(initialOn);

  const toggle = () => setIsOn(!isOn);

  return (
    <div className="colored-button-container" onClick={toggle}>
      {/* 圆形按钮 */}
      <div
        className="colored-button"
        style={{
          backgroundColor: isOn ? color : "#666", // 按下变亮
          borderColor: "white", // 白边
        }}
      ></div>
      {/* 下方文字 */}
      <div className="button-label">{label}</div>
    </div>
  );
};

export default ColoredButton;
