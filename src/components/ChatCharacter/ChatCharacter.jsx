import { useEffect, useState } from "react";
import characterImg from "../../assets/imgs/user.png";
import "./ChatCharacter.css";

const ChatCharacter = ({
  steps = [],
  next = false,
  onNextConsumed = () => {},
  onNext = () => {},
}) => {
  const [coords, setCoords] = useState({ top: 0, left: 0 });

  const currentStep = steps[0]; // 只显示当前 step

  useEffect(() => {
    if (!currentStep) return;

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
        top: rect.bottom + scrollTop + offsetTop,
        left: rect.left + scrollLeft + offsetLeft,
      });
    }
  }, [currentStep]);

  useEffect(() => {
    if (next) {
      onNext(); // 🚀 通知外部进入下一步
      onNextConsumed();
    }
  }, [next]);

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
