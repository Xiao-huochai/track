import { useLocation } from "react-router-dom";
import SceneDetailLayout from "./SceneDetailLayout";
import "./SceneDetail.css";
import SplitCombineKnob from "../../components/Knob/SplitCombineKnob";
import SplitZeroCombineKnob from "../../components/Knob/SplitZeroCombineKnob";
import Voltmeter from "../../components/Instruments/Voltmeter";
import OdometerPlaceholder from "../../components/Instruments/OdometerPlaceholder";
import OperationModeKnob from "../../components/Knob/OperationModeKnob";

const SceneDetail = () => {
  const location = useLocation();

  // 解析并解码URL中的系统名称
  const pathParts = location.pathname.split("/");
  const encodedSystemName = pathParts[2] || "";
  const systemName = encodedSystemName
    ? decodeURIComponent(encodedSystemName)
    : "未知系统";

  // 第一行分合旋钮标签（对应图中第一行10个旋钮）
  const row1Labels = [
    "信号选择",
    "允许开弓旁路",
    "受电弓切除",
    "本车辅逆切除",
    "气压不足旁路",
    "气制动旁路",
    "停放制动旁路",
    "非激活供电",
    "MVB复位",
    "VOBC复位",
  ];

  // 第二行分合旋钮标签（6个）
  const row2SplitCombineLabels = [
    "车门旁路",
    "安全回路旁路",
    "开关门模式切换",
    "门零速旁路",
    "车钩监视旁路",
    "备用",
  ];

  // 第二行分0合旋钮标签（3个）
  const row2SplitZeroCombineLabels = ["列车空调", "A车空调", "列车激活"];

  return (
    <SceneDetailLayout
      title={systemName + "故障"}
      childrenLeft={
        <div className="left-content-placeholder">
          {/* 第一行：10个分合旋钮 */}
          <div className="knob-row">
            {row1Labels.map((label) => (
              <SplitCombineKnob key={label} label={label} />
            ))}
          </div>

          {/* 第二行：6个分合 + 3个分0合旋钮 */}
          <div className="knob-row">
            {row2SplitCombineLabels.map((label) => (
              <SplitCombineKnob key={label} label={label} />
            ))}
            {row2SplitZeroCombineLabels.map((label) => (
              <SplitZeroCombineKnob key={label} label={label} />
            ))}
          </div>

          {/* 仪表区：电压表 + 里程计占位 + 运行模式旋钮 */}
          <div className="instruments-row">
            <Voltmeter />
            <OdometerPlaceholder />
            <OperationModeKnob />
          </div>
        </div>
      }
      childrenRightTop={<div className="right-top-placeholder"></div>}
      childrenRightBottom={<div className="right-bottom-placeholder"></div>}
    />
  );
};

export default SceneDetail;
