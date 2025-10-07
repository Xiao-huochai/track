import { useState, useCallback, useEffect } from "react";
import GuideCharacter from "../GuideCharacter/GuideCharacter";
import ChatCharacter from "../ChatCharacter/ChatCharacter";
import CompletionModal from "../Modal/CompletionModal";
// import driverAvatar from "../../assets/imgs/user.png";
// import dispatcherAvatar from "../../assets/imgs/leader.png";

// const INTERACTIVE_STEPS = [
//   {
//     type: "chat",
//     step: {
//       selector: "#SZCK-R-2-2",
//       text: "接通电话:呼叫行调 “行调”,“xx次在xx站-xx”站上/下行区间列车自行产生制动停车，无法动车司机申请执行车辆故障处理流程",
//       offset: { top: 90, left: -50 },
//       avatar: driverAvatar,
//     },
//   },
//   {
//     type: "chat",
//     step: {
//       selector: "#DisplayScreen",
//       text: "XX次,申请执行车辆故障处理流程,行调同意",
//       offset: { top: 0, left: 0 },
//       avatar: dispatcherAvatar,
//     },
//   },
//   {
//     type: "chat",
//     step: {
//       selector: "#SZCK-R-2-2",
//       text: "结束通话",
//       offset: { top: 90, left: -50 },
//       avatar: driverAvatar,
//     },
//   },
//   {
//     type: "guide",
//     step: {
//       selector: "#DisplayScreen",
//       text: "点击车辆显示屏的“临时停车”播放广播",
//       offset: { top: 50, left: 50 },
//     },
//   },
//   {
//     type: "guide",
//     step: {
//       selector: "#SZCK-R-2-5",
//       text: "点击按压“灯测试”按钮进行试灯",
//       offset: { top: 50, left: 50 },
//     },
//   },
//   {
//     type: "guide",
//     step: {
//       selector: "#SB-0",
//       text: "快点击看看“所有气制动缓解”灯是否亮起",
//       offset: { top: 50, left: 50 },
//     },
//   },
//   {
//     type: "chat",
//     step: {
//       selector: "#SZCK-R-2-5",
//       text: "试灯亮",
//       offset: { top: 10, left: 0 },
//       avatar: driverAvatar,
//     },
//   },
//   {
//     type: "guide",
//     step: {
//       selector: "#DisplayScreen",
//       text: "请尝试动车,点击“车辆显示屏”看看制动状态界面",
//       offset: { top: 40, left: 50 },
//     },
//   },
//   {
//     type: "chat",
//     step: {
//       selector: "#DisplayScreen",
//       text: "无制动故障显示",
//       offset: { top: 10, left: 0 },
//       avatar: driverAvatar,
//     },
//   },
//   {
//     type: "both",
//     guideStep: {
//       selector: "#SZCK-L-2-1-5",
//       text: "点击将“气制动旁路”按钮调整至“合”位试试",
//       offset: { top: 40, left: 50 },
//     },
//     chatStep: {
//       selector: "#SZCK-L-2-1-5",
//       text: "“气制动旁路”至“合”位",
//       offset: { top: 10, left: 0 },
//       avatar: driverAvatar,
//     },
//   },
//   {
//     type: "both",
//     guideStep: {
//       selector: "#SZCK-L-2-1-6",
//       text: "点击将“停放制动旁路”调整至“合”位并尝试动车试试",
//     },
//     chatStep: {
//       selector: "#SZCK-L-2-1-6",
//       text: "“停放制动旁路”至“合”位,并尝试动车",
//       offset: { top: 10, left: 0 },
//       avatar: driverAvatar,
//     },
//   },
//   {
//     type: "chat",
//     step: {
//       selector: "#SZCK-R-2-2",
//       text: "接通电调呼叫行调 报告行调:“行调，XX次在XX站下行区间列车已动车，列车设备正常，司机操作了“气动制动器” 和 “停放制动器路”，列车功能缓解，运行正常，申请退出服务。”",
//       offset: {
//         top: 100,
//         left: -50,
//       },
//       avatar: driverAvatar,
//     },
//   },
//   {
//     type: "chat",
//     step: {
//       selector: "#SZCK-R-2-2",
//       text: "XX次,申请退出服务,行调同意",
//       avatar: dispatcherAvatar,
//     },
//   },
//   {
//     type: "chat",
//     step: {
//       text: "挂断电话",
//       avatar: driverAvatar,
//     },
//   },
//   {
//     type: "none",
//   },
// ];

const StepController = ({ setForceDisplayOpen, INTERACTIVE_STEPS }) => {
  // const [shouldForceOpenDisplayScreen, setShouldForceOpenDisplayScreen] =
  //   useState(false);

  const [stepIndex, setStepIndex] = useState(0);
  const [chatNext, setChatNext] = useState(false);

  const current = INTERACTIVE_STEPS[stepIndex];

  const goNextStep = useCallback(() => {
    setStepIndex((prev) =>
      prev + 1 < INTERACTIVE_STEPS.length ? prev + 1 : prev
    );
  }, [INTERACTIVE_STEPS.length]);

  const handleGuideClickAdvance = useCallback(() => {
    goNextStep(); // 点击页面目标后，前进
  }, [goNextStep]);

  const handleChatNext = () => {
    setChatNext(true);
  };

  const handleChatNextConsumed = () => {
    setChatNext(false);
  };

  useEffect(() => {
    if (
      current?.type === "guide" &&
      current?.step?.selector === "#DisplayScreen"
      // current?.step?.text?.includes("临时停车")
    ) {
      setForceDisplayOpen(true); // ✅ 激活开启状态
    } else {
      setForceDisplayOpen(false); // ❌ 正常步骤关闭状态
    }
  }, [current, setForceDisplayOpen]);

  return (
    <>
      <GuideCharacter
        step={current?.step || current?.guideStep}
        visible={["guide", "both"].includes(current?.type)}
        onStepFinished={handleGuideClickAdvance}
      />

      <ChatCharacter
        visible={current?.type === "chat" || current?.type === "both"}
        step={current?.step || current?.chatStep}
        next={chatNext}
        onNext={goNextStep}
        onNextConsumed={handleChatNextConsumed}
      />

      {/* none 类型 */}
      {current?.type === "none" && <CompletionModal />}

      {/* 操作按钮，只对 chat / both 有效 */}
      {current?.type === "chat" && (
        <div style={{ marginTop: 20 }}>
          <button onClick={handleChatNext}>下一步</button>
        </div>
      )}
    </>
  );
};

export default StepController;
