import { useState, useCallback, useEffect } from "react";
import GuideCharacter from "../GuideCharacter/GuideCharacter";
import ChatCharacter from "../ChatCharacter/ChatCharacter";
import CompletionModal from "../Modal/CompletionModal";
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
    ) {
      setForceDisplayOpen(true); // ✅ 激活开启状态
    } else {
      setForceDisplayOpen(false); // ❌ 正常步骤关闭状态
    }
  }, [current, setForceDisplayOpen]);

  //在chat时 鼠标点击任意部位就可以触发下一步
  useEffect(() => {
    const handleClickAnywhere = (e) => {
      // 只有在类型是chat时触发
      if (current?.type === "chat") {
        handleChatNext();
      }
    };

    // 绑定事件监听到 document 上
    document.addEventListener("click", handleClickAnywhere);

    // 卸载时移除
    return () => {
      document.removeEventListener("click", handleClickAnywhere);
    };
  }, [current]); // 每次 current 变化时刷新监听

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

      {/* 操作按钮，只对 chat有效
      {current?.type === "chat" && (
        <div style={{ marginTop: 20 }}>
          <button onClick={handleChatNext}>下一步</button>
        </div>
      )} */}
    </>
  );
};

export default StepController;
