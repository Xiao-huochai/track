import { useState } from "react";
import "./SplitCombineKnob.css";

const SplitCombineKnob = ({ label }) => {
  const [state, setState] = useState("分"); // 初始状态为“分”

  const toggleState = () => {
    setState((prev) => (prev === "分" ? "合" : "分"));
  };

  return (
    <div className="split-combine-knob" onClick={toggleState}>
      {/* 新增“分”“合”标签容器 */}
      <div className="knob-state-labels">
        <span className="label-left">
          {label === "信号选择" ? "信号有效" : "分"}
        </span>
        <span className="label-right">
          {label === "信号选择" ? "信号切除" : "合"}
        </span>
      </div>
      {/* 外层圆环容器 */}
      <div className="knob-outer-ring">
        <div className={`knob-indicator ${state}`}></div>
      </div>
      <div className="knob-label">{label}</div>
    </div>
  );
};

export default SplitCombineKnob;
