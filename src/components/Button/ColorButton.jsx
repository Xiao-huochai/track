import { useState } from "react";
import "./ColorButton.css";

const ColorButton = ({
  label,
  topLabel,
  activeColor = "#e74c3c", // 激活状态颜色，默认红色
  inactiveColor = "#666", // 非激活状态颜色，默认深灰
  borderColor = "#999", // 边框颜色，默认灰色
  wrapperId,
}) => {
  const [isOn, setIsOn] = useState(false);

  const toggle = () => setIsOn(!isOn);

  return (
    <div
      className="single-red-button-container"
      onClick={toggle}
      id={wrapperId}
    >
      {/* 上方文字 - 当topLabel为null时隐藏 */}
      <div className="top-label" style={{ opacity: topLabel === null ? 0 : 1 }}>
        {topLabel}
      </div>

      {/* 按钮 - 使用传入的颜色 */}
      <div
        className="red-button"
        style={{
          backgroundColor: isOn ? activeColor : inactiveColor,
          borderColor: borderColor,
        }}
      ></div>

      {/* 下方文字 */}
      <div className="bottom-label">{label}</div>
    </div>
  );
};

export default ColorButton;
