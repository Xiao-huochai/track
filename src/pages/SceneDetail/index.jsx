import { useLocation } from "react-router-dom";
import { useState } from "react";
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
// import DisplayScreen from "../../components/DisplayScreen/DsplayScreen";
import TrueScreen from "../../components/StepController/TrueScreen";
import StepController from "../../components/StepController/StepController";
import { useDynamicData } from "./Hooks/useDynamicData";
import { useDoorStore } from "../../stores/doorStore";
import DemoGauge from "../../components/Gauge/DemoGauge";
import DoorButton from "../../components/Button/DoorButton";
import DoorAllButton from "../../components/Button/DoorAllButton";
import LightTestZeroKnob from "../../components/Knob/LightTestZeroKnob";
const SceneDetail = () => {
  const { data, loading, error, screenContent, initState } = useDynamicData(); //获取对应关卡的数据
  const {
    doorLeftOn,
    setDoorLeftOn,
    doorRightOn,
    setDoorRightOn,
    doorAllOn,
    doorAllBugOn,
    setDoorAllBugOn,
  } = useDoorStore();
  const [forceDisplayOpen, setForceDisplayOpen] = useState(false); //控制屏幕是否激活 传给control 和truescreen
  const location = useLocation();

  if (loading) {
    return <div>加载中...</div>;
  }

  if (error) {
    return <div>错误: {error}</div>;
  }

  if (!data) {
    return <div>未找到数据</div>;
  }

  const lightTestOnClick = () => {
    setDoorAllBugOn(true);
  };

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

  return (
    <SceneDetailLayout
      title={systemName}
      childrenLeft={
        <div className="left-content-placeholder">
          <div className="knob-contener">
            {/* 第一行：10个分合旋钮（已替换为带分合选项的分0合旋钮） */}
            <div className="knob-row">
              {row1Labels.map((label, index) => (
                <SplitZeroCombineKnob
                  key={label}
                  label={label}
                  options={splitCombineOptions}
                  wrapperId={"SZCK-L-2-1-" + index}
                />
              ))}
            </div>
            {/* 第二行：6个分合 + 3个分0合旋钮 */}
            <div className="knob-row-custom">
              {/* 分组 1：6个组件 */}
              <div className="knob-group knob-group-1">
                {row2SplitCombineLabels.map((label, index) => (
                  <SplitZeroCombineKnob
                    key={label}
                    label={label}
                    options={splitCombineOptions}
                    wrapperId={"SZCK-L-2-2-" + index}
                  />
                ))}
              </div>
              {/* 分组2：3个组件，并排均分剩余空间 */}
              <div className="knob-group knob-group-2">
                {row2SplitZeroCombineLabels.map((label, index) => (
                  <SplitZeroCombineKnob
                    key={label}
                    label={label}
                    wrapperId={"SZCK-L-3-2-" + index}
                  />
                ))}
              </div>
            </div>
          </div>
          {/* 仪表区：电压表 + 里程计占位 + 运行模式旋钮 */}
          <div className="instruments-row">
            <Voltmeter wrapperId={"Voltmeter"} />
            <OdometerPlaceholder wrapperId={"OdometerPlaceholder"} />
            <OperationModeKnob wrapperId={"OperationModeKnob"} />
          </div>
          <div className="nextStep">
            <StepController
              setForceDisplayOpen={setForceDisplayOpen}
              INTERACTIVE_STEPS={data}
            />
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
                <DoorButton
                  activeColor="#e74c3c"
                  inactiveColor="#a50505"
                  label="开左门"
                  borderColor="white"
                  wrapperId={"CBRL-0-0"}
                  isOn={doorLeftOn}
                  onClick={() => setDoorLeftOn(!doorLeftOn)}
                />
                <DoorButton
                  activeColor="#e74c3c"
                  inactiveColor="#e99f00"
                  label="强制开左门"
                  borderColor="white"
                  wrapperId={"CBRL-0-1"}
                  isOn={doorLeftOn}
                  onClick={() => setDoorLeftOn(!doorLeftOn)}
                />
                <DoorButton
                  activeColor="#e74c3c"
                  inactiveColor="#333333"
                  label="重开左门"
                  borderColor="white"
                  wrapperId={"CBRL-0-2"}
                  isOn={doorLeftOn}
                  onClick={() => setDoorLeftOn(!doorLeftOn)}
                />
                <DoorButton
                  activeColor="#e74c3c"
                  inactiveColor="#a50505"
                  label="开左门"
                  borderColor="white"
                  wrapperId={"CBRL-0-3"}
                  isOn={doorLeftOn}
                  onClick={() => setDoorLeftOn(!doorLeftOn)}
                />
                <DoorButton
                  activeColor="#2ecc71"
                  inactiveColor="#007343"
                  label="关左门"
                  borderColor="white"
                  wrapperId={"CBRL-0-4"}
                  isOn={!doorLeftOn}
                  onClick={() => setDoorLeftOn(false)}
                />
              </div>
              {/* 左列2：紧急制动+2个灰边按钮 */}
              <div className="left-col2">
                <EmergencyBrakeButton
                  isOn={false}
                  wrapperId={"EmergencyBrakeButton-0"}
                />
                <ColorButton
                  activeColor="grey"
                  label="解钩"
                  wrapperId={"CBRL-1-0"}
                />
                <ColorButton
                  activeColor="#774b05ff"
                  inactiveColor="#e99f00"
                  label="窗外加热"
                  wrapperId={"CBRL-1-1"}
                />
              </div>
            </div>

            {/* 中间部分：三行控制区 */}
            <div className="middle-section">
              {/* 第一行：按钮对+乘客报警复位 */}
              <div className="middle-row1">
                <ButtonPair
                  label="主断"
                  leftState="分"
                  leftColor="#ff0000"
                  rightState="合"
                  rightColor="#60ff68"
                  wrapperId={"BP-0"}
                  lOn={initState.pairButton1l}
                  rOn={initState.pairButton1r}
                />
                <ButtonPair
                  label="受电弓"
                  leftState="降"
                  leftColor="#ff0000"
                  rightState="升"
                  rightColor="#60ff68"
                  wrapperId={"BP-1"}
                  lOn={initState.pairButton2l}
                  rOn={initState.pairButton2r}
                />
                <ButtonPair
                  label="停放制动"
                  leftState="施加"
                  leftColor="#ff0000"
                  rightState="缓解"
                  rightColor="#60ff68"
                  wrapperId={"BP-2"}
                  lOn={initState.pairButton3l}
                  rOn={initState.pairButton3r}
                />
                <div
                  style={{
                    height: "100%",
                    display: "flex",
                    alignItems: "center", // 垂直居中
                    justifyContent: "center", // 水平居中
                  }}
                >
                  <ColorButton
                    label="乘客报警复位"
                    activeColor="#ea0e0eff"
                    inactiveColor="#a50505"
                    topLabel="复位"
                    wrapperId={"CBRC-0-0"}
                  />
                </div>
              </div>

              {/* 第二行：6个旋钮 */}
              <div className="middle-row2">
                <SplitZeroCombineKnob
                  label="司机室照明"
                  options={splitCombineOptions}
                  wrapperId={"SZCK-R-1-0"}
                />
                <SplitZeroCombineKnob
                  label="阅读灯"
                  options={splitCombineOptions}
                  wrapperId={"SZCK-R-1-1"}
                />
                <SplitZeroCombineKnob
                  label="客室照明"
                  wrapperId={"SZCK-R-1-2"}
                />
                <SplitZeroCombineKnob
                  label="紧急照明"
                  wrapperId={"SZCK-R-1-3"}
                />
                <SplitZeroCombineKnob
                  label="刮雨器"
                  options={splitCombineOptions}
                  wrapperId={"SZCK-R-1-4"}
                />
                <SplitZeroCombineKnob
                  label="头灯"
                  options={splitCombineOptions}
                  wrapperId={"SZCK-R-1-5"}
                />
              </div>

              {/* 第三行：7个控制元素 */}
              <div className="middle-row3">
                <DriveModeButton wrapperId={"DriveModeButton"} />
                <ColorButton
                  activeColor="#2ecc71"
                  inactiveColor="#007343"
                  label="ATO模式"
                  wrapperId={"CBRC-2-1"}
                />
                <SplitZeroCombineKnob
                  label="ATP后退"
                  options={splitCombineOptions}
                  wrapperId={"SZCK-R-2-2"}
                />
                <ColorButton
                  activeColor="#f39c12"
                  inactiveColor="#e99f00"
                  label="无人驾折返模式"
                  wrapperId={"CBRC-2-3"}
                />
                <SplitZeroCombineKnob
                  label="关门模式选择"
                  options={splitCombineOptions}
                  wrapperId={"SZCK-R-2-4"}
                />
                <LightTestZeroKnob
                  label="灯测试"
                  options={splitCombineOptions}
                  wrapperId={"SZCK-R-2-5"}
                  // 当initState.useDoorBugOn为true时添加点击事件，否则不添加
                  onClick={initState.useDoorBugOn ? lightTestOnClick : null}
                />
                <SplitZeroCombineKnob
                  label="风笛"
                  options={splitCombineOptions}
                  wrapperId={"SZCK-R-2-6"}
                />
              </div>
            </div>

            {/* 右部分：3个正方形按钮 */}
            <div className="right-section">
              <SquareButton
                color="#2ecc71"
                inActiveColor="#007343"
                label="所有气制动缓解"
                isOn={true}
                wrapperId={"SB-0"}
              />
              <SquareButton
                color="#e74c3c"
                inActiveColor="#a50505"
                label="气制动施加"
                isOn={false}
                wrapperId={"SB-1"}
              />
              <DoorAllButton
                color="#2ecc71"
                inActiveColor="#007343"
                label="所有车门关闭"
                isOn={initState.useDoorBugOn ? doorAllBugOn : doorAllOn} // 使用派生状态
                wrapperId={"SB-2"}
                onClick={null} // 不允许点击（只显示状态）
              />
            </div>
          </div>
          <div className="right-top-right">
            <div className="right-top-right-col1">
              <div className="demoGauge">
                <DemoGauge />
              </div>
            </div>
            <div className="right-top-right-col2">
              <TrueScreen
                displayContent={screenContent}
                forceActive={forceDisplayOpen}
              ></TrueScreen>
            </div>
            <div className="right-col1">
              <EmergencyBrakeButton
                isOn={false}
                wrapperId={"EmergencyBrakeButton-1"}
              />
              <ColorButton activeColor="grey" wrapperId={"CBRR-0-0"} />
            </div>
            <div className="right-col2">
              <DoorButton
                activeColor="#e74c3c"
                inactiveColor="#a50505"
                label="开右门"
                borderColor="white"
                wrapperId={"CBRL-1-0"}
                isOn={doorRightOn}
                onClick={() => setDoorRightOn(!doorRightOn)}
              />
              <DoorButton
                activeColor="#e74c3c"
                inactiveColor="#e99f00"
                label="强制开右门"
                borderColor="white"
                wrapperId={"CBRL-1-1"}
                isOn={doorRightOn}
                onClick={() => setDoorRightOn(!doorRightOn)}
              />
              <DoorButton
                activeColor="#e74c3c"
                inactiveColor="#333333"
                label="重开右门"
                borderColor="white"
                wrapperId={"CBRL-1-2"}
                isOn={doorRightOn}
                onClick={() => setDoorRightOn(!doorRightOn)}
              />
              <DoorButton
                activeColor="#e74c3c"
                inactiveColor="#a50505"
                label="开右门"
                borderColor="white"
                wrapperId={"CBRL-1-3"}
                isOn={doorRightOn}
                onClick={() => setDoorRightOn(!doorRightOn)}
              />
              <DoorButton
                activeColor="#2ecc71"
                inactiveColor="#007343"
                label="关右门"
                borderColor="white"
                wrapperId={"CBRL-1-4"}
                isOn={!doorRightOn}
                onClick={() => setDoorRightOn(false)}
              />
            </div>
          </div>
        </div>
      }
      childrenRightBottom={
        <div className="right-bottom-placeholder">
          <div className="right-bottom-wrapper">
            <div className="right-bottom-left">
              <div className="right-bottom-left-line1">
                <SquareButton
                  color="#2ecc71"
                  inActiveColor="#007343"
                  label="SKS1"
                  isOn={true}
                  wrapperId={"RBLL-SB-0"}
                />
                <SquareButton
                  color="#e74c3c"
                  inActiveColor="#e99f00"
                  label="HSCB控制"
                  isOn={false}
                  wrapperId={"RBLL-SB-1"}
                />
                <SquareButton
                  color="#2ecc71"
                  label="VCU开关"
                  isOn={false}
                  initialOn={true}
                  wrapperId={"RBLL-SB-2"}
                />
              </div>
              <div className="right-bottom-left-line2">
                <SplitZeroCombineKnob
                  label="运行模式开关"
                  options={["降级", "升级"]}
                  wrapperId={"runModel"}
                  startIndex={2}
                />
                <SplitZeroCombineKnob
                  label="ICU自动开关"
                  options={["开", "关"]}
                  wrapperId={"autoICU"}
                />
              </div>
            </div>
            <div className="right-bottom-center">
              <div className="right-bottom-center-line1"></div>
              <div className="right-bottom-center-line2"></div>
            </div>
            <div className="right-bottom-right">
              <SplitZeroCombineKnob
                label="主控钥匙"
                options={["关", "开"]}
                wrapperId={"mainKey"}
                startIndex={2}
              />
              <SplitZeroCombineKnob
                label="主控手柄"
                options={splitCombineOptions}
                wrapperId={"rr1"}
              />
            </div>
          </div>
        </div>
      }
    />
  );
};

export default SceneDetail;
