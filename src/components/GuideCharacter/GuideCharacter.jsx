import { useEffect, useState } from "react";
import characterImg from "../../assets/imgs/characterImg.png";
import "./GuideCharacter.css";

const GuideCharacter = ({ steps = [] }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [coords, setCoords] = useState({ top: 0, left: 0 });
  // const characterRef = useRef(null);

  const currentStep = steps[currentIndex];

  useEffect(() => {
    if (!currentStep) return;

    const targetEl = document.querySelector(currentStep.selector);
    if (!targetEl) return;

    // 获取偏移（如果没有传递默认 60）
    const offsetTop = currentStep.offset?.top ?? 60;
    const offsetLeft = currentStep.offset?.left ?? 60;

    // 获取对应组件的位置信息
    const rect = targetEl.getBoundingClientRect();
    const scrollTop = window.scrollY;
    const scrollLeft = window.scrollX;

    setCoords({
      top: rect.top + scrollTop - offsetTop,
      left: rect.left + scrollLeft - offsetLeft,
    });

    // 添加高亮
    targetEl.classList.add("guide-highlight");

    // 点击跳转下一步
    const clickHandler = () => {
      targetEl.classList.remove("guide-highlight");
      setCurrentIndex((prev) => (prev + 1 < steps.length ? prev + 1 : prev));
    };

    targetEl.addEventListener("click", clickHandler);

    return () => {
      targetEl.removeEventListener("click", clickHandler);
    };
  }, [currentIndex, steps, currentStep]);

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
