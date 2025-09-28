import { useState } from "react";
import "./OperationModeKnob.css";

const OperationModeKnob = ({ wrapperId }) => {
  const [mode, setMode] = useState("正常"); // 初始模式为“正常”
  const modes = ["正常", "慢行", "救援", "降级"];

  const toggleMode = () => {
    const currentIndex = modes.indexOf(mode);
    const nextIndex = (currentIndex + 1) % modes.length;
    setMode(modes[nextIndex]);
  };

  return (
    <div className="operation-mode-knob" onClick={toggleMode} id={wrapperId}>
      <div className="mode-label">运行模式选择</div>
      <div className="mode-indicator">
        {modes.map((m) => (
          <div key={m} className={`mode-option ${m === mode ? "active" : ""}`}>
            {m}
          </div>
        ))}
        <div
          className="mode-pointer"
          style={{ transform: `rotate(${modes.indexOf(mode) * 90}deg)` }}
        ></div>
      </div>
    </div>
  );
};

export default OperationModeKnob;
