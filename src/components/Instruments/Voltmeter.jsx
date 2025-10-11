import React from "react";
import "./Voltmeter.css";

const Voltmeter = ({ voltage = 0, wrapperId }) => {
  const size = 200;
  const radius = size / 2 - 10;
  const center = size / 2;

  // 限制电压在 0 到 120
  const clampedVoltage = Math.max(0, Math.min(voltage, 120));

  // 将 voltage=0 映射到 -120度，voltage=120 映射到 +120度
  const angleDeg = (clampedVoltage / 120) * 240 - 120;

  // 将角度转换为SVG坐标系下的弧度角（注意：SVG中0°在3点钟方向，且顺时针）
  const angleRad = (angleDeg - 90) * (Math.PI / 180);

  const needleLength = radius - 20;
  const needleX = center + needleLength * Math.cos(angleRad);
  const needleY = center + needleLength * Math.sin(angleRad);

  return (
    <div className="voltmeter-wrapper" id={wrapperId}>
      <svg
        viewBox="0 0 200 200"
        className="voltmeter-svg"
        preserveAspectRatio="xMidYMid meet"
      >
        {/* 背景圆弧：从 -120° 到 +120° 的半圆 */}
        <path
          d="M 40 160 A 80 80 0 1 1 160 160"
          fill="none"
          stroke="#ffffff"
          strokeWidth="10"
        />

        {/* 指针 */}
        <line
          x1={center}
          y1={center}
          x2={needleX}
          y2={needleY}
          stroke="red"
          strokeWidth="4"
          strokeLinecap="round"
        />

        {/* 圆心 */}
        <circle cx={center} cy={center} r="10" fill="#717171" />

        {/* 电压文本 */}
        <text
          x={center}
          y={center + 50}
          textAnchor="middle"
          fontSize="20"
          fill="#000"
        >
          {clampedVoltage.toFixed(1)} V
        </text>
      </svg>
    </div>
  );
};

export default Voltmeter;
