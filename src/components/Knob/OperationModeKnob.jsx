import React, { useState } from "react";
import "./OperationModeKnob.css";

const modes = ["正常", "慢行", "救援", "降级"];

const OperationModeKnob = ({ wrapperId, title = "运行模式" }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const toggleMode = () => {
    setCurrentIndex((prev) => (prev + 1) % modes.length);
  };

  // 计算指针角度（旋转角度 = index * 90°）
  const angle = currentIndex * 90;

  // SVG参数
  const size = 200;
  const center = size / 2;
  const pointerLength = 60;

  const rad = (angle - 90) * (Math.PI / 180);
  const x = center + pointerLength * Math.cos(rad);
  const y = center + pointerLength * Math.sin(rad);

  return (
    <div className="operation-mode-knob" id={wrapperId} onClick={toggleMode}>
      {/* 表名 */}
      <div className="knob-title">{title}</div>

      {/* 圆形旋钮 */}
      <svg viewBox="0 0 200 200" className="knob-svg">
        {/* 圆背景 */}
        <circle
          cx={center}
          cy={center}
          r={80}
          stroke="#ccc"
          strokeWidth="8"
          fill="#f9f9f9"
        />

        {/* 模式文字标记 */}
        <text
          x={center}
          y={center - 70}
          textAnchor="middle"
          className="mode-label"
        >
          正常
        </text>
        <text
          x={center + 70}
          y={center + 5}
          textAnchor="middle"
          className="mode-label"
        >
          慢行
        </text>
        <text
          x={center}
          y={center + 80}
          textAnchor="middle"
          className="mode-label"
        >
          救援
        </text>
        <text
          x={center - 70}
          y={center + 5}
          textAnchor="middle"
          className="mode-label"
        >
          降级
        </text>

        {/* 指针 */}
        <line
          x1={center}
          y1={center}
          x2={x}
          y2={y}
          stroke="red"
          strokeWidth="4"
          strokeLinecap="round"
        />

        {/* 圆心 */}
        <circle cx={center} cy={center} r="5" fill="#000" />

        {/* 当前模式显示 */}
        <text
          x={center}
          y={center + 110}
          textAnchor="middle"
          className="current-mode"
        >
          当前：{modes[currentIndex]}
        </text>
      </svg>
    </div>
  );
};

export default OperationModeKnob;
