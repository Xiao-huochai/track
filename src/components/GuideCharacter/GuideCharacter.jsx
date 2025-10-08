import { useEffect, useState } from "react";
import characterImg from "../../assets/imgs/characterImg.png";
import "./GuideCharacter.css";
//step里的属性
//    {
//       selector: "#demoGauge2",
//       text: "请点击查看气压表是否为3Bar",
//       offset: { top: 50, left: 50 },
//       preventClickEvent:true,阻止当前点击事件执行进入下一步
//     },

const GuideCharacter = ({
  step = null,
  visible = false,
  onStepFinished = () => {},
}) => {
  const [coords, setCoords] = useState({ top: 0, left: 0 });

  useEffect(() => {
    if (!step || !visible) return;

    //得到目标div
    const targetEl = document.querySelector(step.selector);
    if (!targetEl) return;

    const rect = targetEl.getBoundingClientRect();
    const offsetTop = step.offset?.top ?? 60;
    const offsetLeft = step.offset?.left ?? 60;

    setCoords({
      top: rect.top + window.scrollY - offsetTop,
      left: rect.left + window.scrollX - offsetLeft,
    });

    //给目标高亮
    if (!step.noLight) {
      targetEl.classList.add("guide-highlight");
    }

    const clickHandler = (e) => {
      if (!step.noLight) {
        targetEl.classList.remove("guide-highlight");
      }

      // 如果设置 preventClickEvent 为 true，则阻止元素的真正点击行为
      if (step.preventClickEvent) {
        e.preventDefault?.();
        e.stopPropagation?.();
        e.stopImmediatePropagation?.();
      }
      onStepFinished();
    };
    // 在捕获阶段注册点击事件，优先于目标元素自己的事件
    targetEl.addEventListener("click", clickHandler, true);
    return () => targetEl.removeEventListener("click", clickHandler, true);
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
