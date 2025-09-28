import { useState, useCallback } from "react";
// import GuideCharacter from "./GuideCharacter";
// import ChatCharacter from "./ChatCharacter";
import GuideCharacter from "../GuideCharacter/GuideCharacter";
import ChatCharacter from "../ChatCharacter/ChatCharacter";

const INTERACTIVE_STEPS = [
  {
    type: "chat",
    step: {
      selector: "#SZCK-R-2-2",
      text: "接通电话:呼叫行调 “行调”,“xx次在xx站-xx”站上/下行区间列车自行产生制动停车，无法动车司机申请执行车辆故障处理流程 结束通话",
      offset: { top: 90, left: -50 },
    },
  },
  {
    type: "guide",
    step: {
      selector: "#DisplayScreen",
      text: "XX次,申请执行车辆故障处理流程,行调同意",
      offset: { top: -150, left: 250 },
      noLight: true,
    },
  },
  {
    type: "chat",
    step: {
      selector: "#SZCK-R-2-2",
      text: "接通电话：申请流程",
      offset: { top: 90, left: -50 },
    },
  },
  {
    type: "guide",
    step: {
      selector: "#DisplayScreen",
      text: "点击车辆显示屏的“临时停车”播放广播",
      offset: { top: 50, left: 50 },
    },
  },
  {
    type: "guide",
    step: {
      selector: "#SZCK-R-2-5",
      text: "点击按压“灯测试”按钮进行试灯",
      offset: { top: 50, left: 50 },
    },
  },
  {
    type: "chat",
    step: {
      text: "挂断电话",
    },
  },
  {
    type: "none",
  },
];

const StepController = () => {
  const [stepIndex, setStepIndex] = useState(0);
  const [chatNext, setChatNext] = useState(false);

  const current = INTERACTIVE_STEPS[stepIndex];

  const goNextStep = useCallback(() => {
    setStepIndex((prev) =>
      prev + 1 < INTERACTIVE_STEPS.length ? prev + 1 : prev
    );
  }, []);

  const handleGuideClickAdvance = useCallback(() => {
    goNextStep(); // 点击页面目标后，前进
  }, [goNextStep]);

  const handleChatNext = () => {
    setChatNext(true);
  };

  const handleChatNextConsumed = () => {
    setChatNext(false);
  };

  return (
    <>
      {/* Guide 类型 */}
      {(current?.type === "guide" || current?.type === "both") && (
        <GuideCharacter
          steps={[current.step || current.guideStep]}
          key={`guide-${stepIndex}`}
          onStepFinished={handleGuideClickAdvance}
        />
      )}

      {/* Chat 类型 */}
      {(current?.type === "chat" || current?.type === "both") && (
        <ChatCharacter
          steps={[current.step || current.chatStep]}
          key={`chat-${stepIndex}`}
          next={chatNext}
          onNextConsumed={handleChatNextConsumed}
          onNext={goNextStep}
        />
      )}

      {/* none 类型 */}
      {current?.type === "none" && <div>🎉 所有步骤已经完成。</div>}

      {/* 操作按钮，只对 chat / both 有效 */}
      {(current?.type === "chat" || current?.type === "both") && (
        <div style={{ marginTop: 20 }}>
          <button onClick={handleChatNext}>下一步</button>
        </div>
      )}
    </>
  );
};

export default StepController;
