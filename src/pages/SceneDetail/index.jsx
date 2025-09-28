import { useLocation } from "react-router-dom";
import SceneDetailLayout from "./SceneDetailLayout";
import "./SceneDetail.css";
import SplitZeroCombineKnob from "../../components/Knob/SplitZeroCombineKnob";
import Voltmeter from "../../components/Instruments/Voltmeter";
import OdometerPlaceholder from "../../components/Instruments/OdometerPlaceholder";
import OperationModeKnob from "../../components/Knob/OperationModeKnob";
import EmergencyBrakeButton from "../../components/Button/EmergencyBrakeButton";
import ButtonPair from "../../components/Button/ButtonPair";
import ColorButton from "../../components/Button/ColorButton";
import DriveModeButton from "../../components/Button/DriveModeButton";
import SquareButton from "../../components/Button/SquareButton";
import DisplayScreen from "../../components/DisplayScreen/DsplayScreen";
const SceneDetail = () => {
  const location = useLocation();

  // 解析并解码URL中的系统名称
  const pathParts = location.pathname.split("/");
  const encodedSystemName = pathParts[2] || "";
  const systemName = encodedSystemName
    ? decodeURIComponent(encodedSystemName)
    : "未知系统";

  // 定义分合选项，供所有替换后的旋钮使用
  const splitCombineOptions = ["分", "合"];

  // 第一行旋钮标签（对应图中第一行10个旋钮）
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

  const guideSteps = [
    {
      target: "component-1",
      message: "你好！我是引导小人，先点击这个按钮~",
    },
    {
      target: "component-2",
      message: "不错！接下来点击这个卡片~",
    },
    {
      target: "component-3",
      message: "最后点击这个输入框，完成引导！",
    },
  ];

  return (
    <SceneDetailLayout
      title={systemName + "故障"}
      childrenLeft={
        <div className="left-content-placeholder">
          {/* 第一行：10个分合旋钮（已替换为带分合选项的分0合旋钮） */}
          <div className="knob-row">
            {row1Labels.map((label) => (
              <SplitZeroCombineKnob
                key={label}
                label={label}
                options={splitCombineOptions}
              />
            ))}
          </div>

          {/* 第二行：6个分合 + 3个分0合旋钮 */}
          <div className="knob-row">
            {row2SplitCombineLabels.map((label) => (
              <SplitZeroCombineKnob
                key={label}
                label={label}
                options={splitCombineOptions}
              />
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
      childrenRightTop={
        <div className="right-top-placeholder">
          {/* 左部分：两列按钮 */}
          <div className="right-top-left">
            <div className="left-section">
              {/* 左列1：5个白边彩色圆形按钮 */}
              <div className="left-col1">
                <ColorButton
                  activeColor="#e74c3c"
                  label="开左门"
                  borderColor="white"
                />
                <ColorButton
                  activeColor="#f39c12"
                  label="强制开左门"
                  borderColor="white"
                />
                <ColorButton
                  activeColor="#333"
                  label="重开左门"
                  borderColor="white"
                />
                <ColorButton
                  activeColor="#e74c3c"
                  label="开左门"
                  borderColor="white"
                />
                <ColorButton
                  activeColor="#2ecc71"
                  label="关左门"
                  borderColor="white"
                />
              </div>
              {/* 左列2：紧急制动+2个灰边按钮 */}
              <div className="left-col2">
                <EmergencyBrakeButton isOn={false} />
                <ColorButton activeColor="grey" label="解钩" />
                <ColorButton activeColor="#f39c12" label="窗外加热" />
              </div>
            </div>

            {/* 中间部分：三行控制区 */}
            <div className="middle-section">
              {/* 第一行：按钮对+乘客报警复位 */}
              <div className="middle-row1">
                <ButtonPair
                  label="主断"
                  leftState="分"
                  leftColor="#e74c3c"
                  rightState="合"
                  rightColor="#2ecc71"
                />
                <ButtonPair
                  label="受电弓"
                  leftState="降"
                  leftColor="#e74c3c"
                  rightState="升"
                  rightColor="#2ecc71"
                />
                <ButtonPair
                  label="停放制动"
                  leftState="施加"
                  leftColor="#e74c3c"
                  rightState="缓解"
                  rightColor="#2ecc71"
                />
                <ColorButton label="乘客报警复位" topLabel="复位" />
              </div>

              {/* 第二行：6个旋钮 */}
              <div className="middle-row2">
                <SplitZeroCombineKnob
                  label="司机室照明"
                  options={splitCombineOptions}
                />
                <SplitZeroCombineKnob
                  label="阅读灯"
                  options={splitCombineOptions}
                />
                <SplitZeroCombineKnob label="客室照明" />
                <SplitZeroCombineKnob label="紧急照明" />
                <SplitZeroCombineKnob
                  label="刮雨器"
                  options={splitCombineOptions}
                />
                <SplitZeroCombineKnob
                  label="头灯"
                  options={splitCombineOptions}
                />
              </div>

              {/* 第三行：7个控制元素 */}
              <div className="middle-row3">
                <DriveModeButton />
                <ColorButton activeColor="#2ecc71" label="ATO模式" />
                <SplitZeroCombineKnob
                  label="ATP后退"
                  options={splitCombineOptions}
                />
                <ColorButton activeColor="#f39c12" label="无人驾折返模式" />
                <SplitZeroCombineKnob
                  label="关门模式选择"
                  options={splitCombineOptions}
                />
                <SplitZeroCombineKnob
                  label="灯测试"
                  options={splitCombineOptions}
                />
                <SplitZeroCombineKnob
                  label="风笛"
                  options={splitCombineOptions}
                />
              </div>
            </div>

            {/* 右部分：3个正方形按钮 */}
            <div className="right-section">
              <SquareButton
                color="#2ecc71"
                label="所有气制动缓解"
                isOn={true}
              />
              <SquareButton color="#e74c3c" label="气制动施加" isOn={false} />
              <SquareButton color="#2ecc71" label="所有车门关闭" isOn={false} />
            </div>
          </div>
          <div className="right-top-right">
            <DisplayScreen content="这是要显示的内容"></DisplayScreen>
            <div className="left-col2">
              <EmergencyBrakeButton isOn={false} />
              <ColorButton activeColor="grey" />
            </div>
            <div>
              <div className="left-col1">
                <ColorButton
                  activeColor="#e74c3c"
                  label="开右门"
                  borderColor="white"
                />
                <ColorButton
                  activeColor="#f39c12"
                  label="强制开右门"
                  borderColor="white"
                />
                <ColorButton
                  activeColor="#333"
                  label="重开右门"
                  borderColor="white"
                />
                <ColorButton
                  activeColor="#e74c3c"
                  label="开右门"
                  borderColor="white"
                />
                <ColorButton
                  activeColor="#2ecc71"
                  label="关右门"
                  borderColor="white"
                />
              </div>
            </div>
          </div>
        </div>
      }
      childrenRightBottom={<div className="right-bottom-placeholder"></div>}
    />
  );
};

export default SceneDetail;
