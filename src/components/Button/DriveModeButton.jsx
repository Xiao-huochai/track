import { useState } from "react";
import "./DriveModeButton.css";

const DriveModeButton = ({ wrapperId }) => {
  // 模式循环：OFF -> PM -> RM -> OFF
  const modes = ["OFF", "PM", "RM"];
  const [currentMode, setCurrentMode] = useState("OFF");

  const toggleMode = () => {
    const currentIndex = modes.indexOf(currentMode);
    const nextIndex = (currentIndex + 1) % modes.length;
    setCurrentMode(modes[nextIndex]);
  };

  return (
    <div className="drive-mode-container" onClick={toggleMode} id={wrapperId}>
      {/* 上方三个模式文字 */}
      <div className="mode-labels">
        <span>RM</span>
        <span>OFF</span>
        <span>PM</span>
      </div>
      {/* 中间按钮（显示当前模式） */}
      <div className="mode-button">
        <span className="current-mode">{currentMode}</span>
      </div>
      {/* 下方文字 */}
      <div className="mode-label-bottom">驾驶模式选择</div>
    </div>
  );
};

export default DriveModeButton;
