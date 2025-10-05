import { useEffect, useState } from "react";
import characterImg from "../../assets/imgs/characterImg.png";
import "./GuideCharacter.css";

const GuideCharacter = ({
  step = null,
  visible = false,
  onStepFinished = () => {},
}) => {
  const [coords, setCoords] = useState({ top: 0, left: 0 });

  useEffect(() => {
    if (!step || !visible) return;

    const targetEl = document.querySelector(step.selector);
    if (!targetEl) return;

    const rect = targetEl.getBoundingClientRect();
    const offsetTop = step.offset?.top ?? 60;
    const offsetLeft = step.offset?.left ?? 60;

    setCoords({
      top: rect.top + window.scrollY - offsetTop,
      left: rect.left + window.scrollX - offsetLeft,
    });

    if (!step.noLight) {
      targetEl.classList.add("guide-highlight");
    }

    const clickHandler = () => {
      if (!step.noLight) {
        targetEl.classList.remove("guide-highlight");
      }
      onStepFinished();
    };

    targetEl.addEventListener("click", clickHandler);
    return () => targetEl.removeEventListener("click", clickHandler);
  }, [step, visible, onStepFinished]);

  if (!step || !visible) return null;

  return (
    <div
      className="guide-character"
      style={{
        top: `${coords.top}px`,
        left: `${coords.left}px`,
        transition: "top 0.5s, left 0.5s",
      }}
    >
      <img src={characterImg} alt="guide" />
      <div className="guide-dialog">{step.text}</div>
    </div>
  );
};

export default GuideCharacter;
