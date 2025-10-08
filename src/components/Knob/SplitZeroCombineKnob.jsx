import { useState } from "react";
import "./SplitZeroCombineKnob.css";

const SplitZeroCombineKnob = ({
  label,
  options,
  wrapperId,
  startIndex = 0,
  // 0 1 2分别对应左中右
}) => {
  // 验证输入参数，确保是2或3个选项
  if (
    !options ||
    !Array.isArray(options) ||
    options.length < 2 ||
    options.length > 3
  ) {
    // console.warn("options必须是包含2或3个元素的数组，使用默认值");
    options = ["分", "0", "合"]; // 默认值
  }

  // 👉 获取合法的初始状态索引
  const getValidStartIndex = () => {
    if (options.length === 2) {
      return startIndex === 0 || startIndex === 2 ? startIndex : 0;
    }
    // 三个选项时，只能是 0, 1, 2
    return [0, 1, 2].includes(startIndex) ? startIndex : 1;
  };

  const [stateIndex, setStateIndex] = useState(getValidStartIndex());

  // 切换状态的处理函数
  const toggleState = () => {
    if (options.length === 2) {
      setStateIndex((prev) => (prev === 0 ? 2 : 0)); // 在 0 和 2 之间切换
    } else {
      setStateIndex((prev) => (prev + 1) % 3); // 在 0, 1, 2 之间循环
    }
  };

  // 获取当前状态对应的类名
  const getStateClass = () => {
    const classes = ["left", "middle", "right"];
    return classes[stateIndex];
  };

  return (
    <div
      className="split-zero-combine-knob"
      onClick={toggleState}
      id={wrapperId}
    >
      {/* 动态状态标签 */}
      <div className="knob-state-labels">
        <span className="label-left">{options[0]}</span>
        {options.length === 3 && (
          <span className="label-middle">{options[1]}</span>
        )}
        <span className="label-right">{options[options.length - 1]}</span>
      </div>

      {/* 旋钮主体 */}
      <div className="knob-outer-ring">
        <div className={`knob-indicator ${getStateClass()}`}></div>
      </div>

      {/* 底部标签 */}
      <div className="knob-label">{label}</div>
    </div>
  );
};

export default SplitZeroCombineKnob;

// 预览示例组件
export const KnobPreview = () => {
  return (
    <div
      style={{
        display: "flex",
        gap: "20px",
        padding: "20px",
        backgroundColor: "#f5f5f5",
        flexWrap: "wrap",
      }}
    >
      <div style={{ textAlign: "center" }}>
        <h4>3个选项示例</h4>
        <SplitZeroCombineKnob label="三相电流" options={["分", "0", "合"]} />
      </div>

      <div style={{ textAlign: "center" }}>
        <h4>2个选项示例</h4>
        <SplitZeroCombineKnob label="电压选择" options={["交流", "直流"]} />
      </div>

      <div style={{ textAlign: "center" }}>
        <h4>模式控制</h4>
        <SplitZeroCombineKnob label="运行模式" options={["手动", "自动"]} />
      </div>
    </div>
  );
};
