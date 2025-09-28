import { useEffect, useState } from "react";
import characterImg from "../../assets/imgs/user.png";
import "./ChatCharacter.css";

const ChatCharacter = ({
  step = null,
  visible = false,
  next = false,
  onNext = () => {},
  onNextConsumed = () => {},
}) => {
  const [coords, setCoords] = useState({ top: 0, left: 0 });

  useEffect(() => {
    if (!step || !visible) return;

    const targetEl = step.selector
      ? document.querySelector(step.selector)
      : null;

    const offsetTop = step.offset?.top ?? 60;
    const offsetLeft = step.offset?.left ?? 0;

    if (targetEl) {
      const rect = targetEl.getBoundingClientRect();

      const scrollTop = window.scrollY;
      const scrollLeft = window.scrollX;

      setCoords({
        top: rect.bottom + scrollTop + offsetTop,
        left: rect.left + scrollLeft + offsetLeft,
      });
    }
  }, [step, visible]);

  useEffect(() => {
    if (next && visible) {
      onNext(); // ⚡ 通知外部进入下一步
      onNextConsumed(); // 🔄 重置
    }
  }, [next, visible, onNext, onNextConsumed]);

  if (!step || !visible) return null;

  return (
    <div
      className="chat-character"
      style={{
        top: `${coords.top}px`,
        left: `${coords.left}px`,
        position: "absolute",
        transition: "top 0.4s ease, left 0.4s ease",
        zIndex: 9998,
      }}
    >
      <img src={characterImg} alt="chat-character" />
      <div className="chat-dialog">{step.text}</div>
    </div>
  );
};

export default ChatCharacter;
