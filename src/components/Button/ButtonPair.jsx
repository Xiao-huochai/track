import { useState } from "react";
import "./ButtonPair.css";

const ButtonPair = ({
  label,
  leftState,
  leftColor,
  rightState,
  rightColor,
  wrapperId,
}) => {
  // 左右按钮状态（默认左关右开）
  const [leftOn, setLeftOn] = useState(false);
  const [rightOn, setRightOn] = useState(true);

  // 点击左侧按钮：左侧开，右侧关
  const toggleLeft = () => {
    setLeftOn(true);
    setRightOn(false);
  };

  // 点击右侧按钮：右侧开，左侧关
  const toggleRight = () => {
    setLeftOn(false);
    setRightOn(true);
  };

  return (
    <div className="button-pair" id={wrapperId}>
      {/* 上方文字（分/合、降/升等） */}
      <div className="pair-top-labels">
        <span>{leftState}</span>
        <span>{rightState}</span>
      </div>
      {/* 两个按钮 */}
      <div className="pair-buttons">
        <div
          className="pair-button"
          style={{ backgroundColor: leftOn ? leftColor : "#666" }}
          onClick={toggleLeft}
        ></div>
        <div
          className="pair-button"
          style={{ backgroundColor: rightOn ? rightColor : "#666" }}
          onClick={toggleRight}
        ></div>
      </div>
      {/* 下方功能文字（主断、受电弓等） */}
      <div className="pair-bottom-label">{label}</div>
    </div>
  );
};

export default ButtonPair;
