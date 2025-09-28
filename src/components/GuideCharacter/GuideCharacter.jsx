// components/GuideCharacter.jsx
import { useEffect, useRef, useState } from "react";
import characterImg from "../../assets/imgs/characterImg.png";
import "./GuideCharacter.css"; // 样式拆分出去

const GuideCharacter = ({ steps = [] }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [coords, setCoords] = useState({ top: 0, left: 0 });
  const characterRef = useRef(null);
  const dialogRef = useRef(null);

  const currentStep = steps[currentIndex];

  useEffect(() => {
    if (!currentStep) return;

    const targetEl = document.querySelector(currentStep.selector);

    if (targetEl) {
      const rect = targetEl.getBoundingClientRect();
      const scrollTop = window.scrollY;
      const scrollLeft = window.scrollX;

      setCoords({
        top: rect.top + scrollTop - 40, // 小人高度修正
        left: rect.left + scrollLeft - 40, // 左移一点
      });

      // 添加类激活高亮
      targetEl.classList.add("guide-highlight");

      const clickHandler = () => {
        targetEl.classList.remove("guide-highlight");
        setCurrentIndex((prev) => (prev + 1 < steps.length ? prev + 1 : prev));
      };

      targetEl.addEventListener("click", clickHandler);

      return () => {
        targetEl.removeEventListener("click", clickHandler);
      };
    }
  }, [currentIndex, steps, currentStep]);

  if (!currentStep) return null;

  return (
    <div>
      {/* 小人窗口固定定位 */}
      <div
        className="guide-character"
        ref={characterRef}
        style={{ top: coords.top, left: coords.left }}
      >
        <img src={characterImg} alt="guide" />
        {/* 对话框 */}
        <div className="guide-dialog" ref={dialogRef}>
          {currentStep.text}
        </div>
      </div>
    </div>
  );
};

export default GuideCharacter;
