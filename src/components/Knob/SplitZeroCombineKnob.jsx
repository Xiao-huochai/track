import { useState } from "react";
import "./SplitZeroCombineKnob.css";

const SplitZeroCombineKnob = ({ label }) => {
  const [state, setState] = useState("分"); // 初始状态为“分”

  const toggleState = () => {
    if (state === "分") setState("zero");
    else if (state === "zero") setState("合");
    else setState("分");
  };

  return (
    <div className="split-zero-combine-knob" onClick={toggleState}>
      {/* 新增分0合状态标签 */}
      <div className="knob-state-labels">
        <span className="label-left">分</span>
        <span className="label-middle">0</span>
        <span className="label-right">合</span>
      </div>
      <div className={`knob-outer-ring`}>
        <div className={`knob-indicator ${state}`}></div>
      </div>
      <div className="knob-label">{label}</div>
    </div>
  );
};

export default SplitZeroCombineKnob;
