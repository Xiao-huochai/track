import { useEffect, useState } from "react";
import characterImg from "../../assets/imgs/characterImg.png";
import "./GuideCharacter.css";

const GuideCharacter = ({ steps = [], onStepFinished = () => {} }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [coords, setCoords] = useState({ top: 0, left: 0 });

  const currentStep = steps[currentIndex];

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

    if (!currentStep.noLight) targetEl.classList.add("guide-highlight");

    const clickHandler = () => {
      targetEl.classList.remove("guide-highlight");
      setCurrentIndex((prev) => {
        const nextIndex = prev + 1;
        if (nextIndex < steps.length) {
          return nextIndex;
        } else {
          onStepFinished(); // 🔥 整个 guide step 完成
          return prev; // 不再变
        }
      });
    };

    targetEl.addEventListener("click", clickHandler);

    return () => {
      targetEl.removeEventListener("click", clickHandler);
    };
  }, [currentIndex, steps, currentStep, onStepFinished]);

  if (!currentStep) return null;

  return (
    <div
      className="guide-character"
      style={{ top: `${coords.top}px`, left: `${coords.left}px` }}
    >
      <img src={characterImg} alt="guide" />
      <div className="guide-dialog">{currentStep.text}</div>
    </div>
  );
};

export default GuideCharacter;
