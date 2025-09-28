import { useEffect, useState } from "react";
import characterImg from "../../assets/imgs/user.png";
import "./ChatCharacter.css";

const ChatCharacter = ({
  steps = [],
  next = false,
  onNextConsumed = () => {},
}) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [coords, setCoords] = useState({ top: 0, left: 0 });

  const currentStep = steps[currentIndex];

  useEffect(() => {
    if (!currentStep) return;

    // 计算位置
    const targetEl = currentStep.selector
      ? document.querySelector(currentStep.selector)
      : null;

    const offsetTop = currentStep.offset?.top ?? 60;
    const offsetLeft = currentStep.offset?.left ?? 0;

    if (targetEl) {
      const rect = targetEl.getBoundingClientRect();
      const scrollTop = window.scrollY;
      const scrollLeft = window.scrollX;

      setCoords({
        top: rect.bottom + scrollTop + offsetTop, // 下方显示
        left: rect.left + scrollLeft + offsetLeft,
      });
    } else {
      // 无目标元素时，位置不动，只显示对话
      setCoords((prev) => ({ ...prev }));
    }
  }, [currentIndex, steps]);

  useEffect(() => {
    if (next) {
      // 触发下一步
      setCurrentIndex((prev) => (prev + 1 < steps.length ? prev + 1 : prev));
      onNextConsumed(); // 重置 next 参数，比如设为 false
    }
  }, [next, steps.length, onNextConsumed]);

  if (!currentStep) return null;

  return (
    <div
      className="chat-character"
      style={{ top: `${coords.top}px`, left: `${coords.left}px` }}
    >
      <img src={characterImg} alt="chat-character" />
      <div className="chat-dialog">{currentStep.text}</div>
    </div>
  );
};

export default ChatCharacter;
