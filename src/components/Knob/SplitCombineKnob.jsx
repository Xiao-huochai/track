import { useState } from "react";
import "./SplitCombineKnob.css";

const SplitCombineKnob = ({ label }) => {
  const [state, setState] = useState("分"); // 初始状态为“分”

  const toggleState = () => {
    setState((prev) => (prev === "分" ? "合" : "分"));
  };

  return (
    <div className="split-combine-knob" onClick={toggleState}>
      <div className={`knob-indicator ${state}`}></div>
      <div className="knob-label">{label}</div>
    </div>
  );
};

export default SplitCombineKnob;
