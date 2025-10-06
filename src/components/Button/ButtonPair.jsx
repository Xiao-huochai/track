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

  // 点击左侧按钮
  const toggleLeft = () => {
    setLeftOn((prevLeftOn) => {
      setRightOn((prevRightOn) => {
        // 如果两个都是true，就都设为false
        if (prevLeftOn && prevRightOn) {
          return false;
        }
        // 否则正常切换左侧，右侧设为false
        return false;
      });
      return !prevLeftOn;
    });
  };

  // 点击右侧按钮
  const toggleRight = () => {
    setRightOn((prevRightOn) => {
      setLeftOn((prevLeftOn) => {
        // 如果两个都是true，就都设为false
        if (prevLeftOn && prevRightOn) {
          return false;
        }
        // 否则正常切换右侧，左侧设为false
        return false;
      });
      return !prevRightOn;
    });
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
          style={{ backgroundColor: leftOn ? leftColor : "#a50505" }}
          onClick={toggleLeft}
        ></div>
        <div
          className="pair-button"
          style={{ backgroundColor: rightOn ? rightColor : "#007343" }}
          onClick={toggleRight}
          id={wrapperId + "-r"}
        ></div>
      </div>
      {/* 下方功能文字（主断、受电弓等） */}
      <div className="pair-bottom-label">{label}</div>
    </div>
  );
};

export default ButtonPair;
