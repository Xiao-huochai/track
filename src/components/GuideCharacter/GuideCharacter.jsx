import { useEffect, useState } from "react";
import characterImg from "../../assets/imgs/characterImg.png";
import "./GuideCharacter.css";

const GuideCharacter = ({ steps = [], onStepFinished = () => {} }) => {
  const currentStep = steps[0]; // 👈 只显示一个step
  const [coords, setCoords] = useState({ top: 0, left: 0 });

  useEffect(() => {
    if (!currentStep) return;

    const targetEl = document.querySelector(currentStep.selector);
    if (!targetEl) return;

    const offsetTop = currentStep.offset?.top ?? 60;
    const offsetLeft = currentStep.offset?.left ?? 60;

    const rect = targetEl.getBoundingClientRect();
    const scrollTop = window.scrollY;
    const scrollLeft = window.scrollX;

    setCoords({
      top: rect.top + scrollTop - offsetTop,
      left: rect.left + scrollLeft - offsetLeft,
    });

    if (!currentStep.noLight) {
      targetEl.classList.add("guide-highlight");
    }

    const clickHandler = () => {
      if (!currentStep.noLight) {
        targetEl.classList.remove("guide-highlight");
      }

      onStepFinished(); // 🔥 通知外部“当前这一步完成”
    };

    targetEl.addEventListener("click", clickHandler);

    return () => {
      targetEl.removeEventListener("click", clickHandler);
    };
  }, [currentStep, onStepFinished]);

  if (!currentStep) return null;

  return (
    <div
      className="guide-character"
      style={{
        top: `${coords.top}px`,
        left: `${coords.left}px`,
      }}
    >
      <img src={characterImg} alt="guide" />
      <div className="guide-dialog">{currentStep.text}</div>
    </div>
  );
};

export default GuideCharacter;
