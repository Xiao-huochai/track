import { useState, useEffect } from "react";
import characterImg from "../../assets/imgs/characterImg.jpg"; // 引入小人图片（替换为你的图片路径）
import "./GuideCharacter.css";

const GuideCharacter = ({ steps }) => {
  const [currentStep, setCurrentStep] = useState(0);
  const [isDialogVisible, setIsDialogVisible] = useState(false);
  const [characterPos, setCharacterPos] = useState({ top: 0, left: 0 });

  // 计算并设置小人位置（移动到目标组件旁）
  const moveToTarget = () => {
    if (currentStep >= steps.length) return;
    const { target } = steps[currentStep];
    const targetEl = document.querySelector(`[data-guide-target="${target}"]`);
    if (!targetEl) return;

    const rect = targetEl.getBoundingClientRect();
    // 小人放在目标组件右侧，垂直居中
    setCharacterPos({
      top: rect.top + rect.height / 2 - 50, // 小人高度约100px，居中对齐
      left: rect.right + 20,
    });
    setIsDialogVisible(true);
  };

  // 点击目标组件时，推进到下一个步骤
  const handleTargetClick = () => {
    if (currentStep < steps.length - 1) {
      setIsDialogVisible(false);
      // 延迟后推进步骤（给动画留时间）
      setTimeout(() => {
        setCurrentStep(currentStep + 1);
      }, 300);
    } else {
      // 所有步骤完成，隐藏小人
      setIsDialogVisible(false);
    }
  };

  // 组件挂载/步骤变化时，移动小人
  useEffect(() => {
    moveToTarget();
  }, [currentStep]);

  if (currentStep >= steps.length) return null; // 步骤用尽，不渲染

  const { message } = steps[currentStep];
  return (
    <>
      {/* 可移动的小人 */}
      <div
        className="guide-character"
        style={{
          top: characterPos.top,
          left: characterPos.left,
        }}
      >
        <img src={characterImg} alt="引导小人" className="character-img" />
      </div>

      {/* 对话框 */}
      {isDialogVisible && (
        <div
          className="dialog-bubble"
          style={{ left: characterPos.left + 120 }}
        >
          <p>{message}</p>
        </div>
      )}
    </>
  );
};

export default GuideCharacter;
