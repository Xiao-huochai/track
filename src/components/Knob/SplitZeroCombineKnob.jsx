import { useState } from "react";
import "./SplitZeroCombineKnob.css";

const SplitZeroCombineKnob = ({ label }) => {
  const [state, setState] = useState("分"); // 初始状态为“分”

  const toggleState = () => {
    if (state === "分") setState("zero"); // 改为字符串“zero”
    else if (state === "zero") setState("合");
    else setState("分");
  };

  return (
    <div className="split-zero-combine-knob" onClick={toggleState}>
      <div className={`knob-indicator ${state}`}></div>
      <div className="knob-label">{label}</div>
    </div>
  );
};

export default SplitZeroCombineKnob;
