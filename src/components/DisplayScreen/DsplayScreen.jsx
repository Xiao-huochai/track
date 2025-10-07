import { useState, useEffect } from "react";
import "./DisplayScreen.css";

const DisplayScreen = ({ content, wrapperId, forceActive = false }) => {
  // 状态管理：控制是否显示内容
  const [isActive, setIsActive] = useState(false);
  // 跟踪当前显示的数组索引
  const [currentIndex, setCurrentIndex] = useState(0);

  // 自动激活：如果 prop 为 true，就进入显示内容状态
  useEffect(() => {
    if (forceActive) {
      setIsActive(true);
    }
  }, [forceActive]);

  // 处理点击事件
  const handleClick = () => {
    setIsActive(!isActive);
    // 如果内容是数组
    if (Array.isArray(content)) {
      // 如果未激活，先激活显示第一条
      if (!isActive) {
        setIsActive(true);
      } else {
        // 已经激活则显示下一条，到达末尾后循环回到开头
        setCurrentIndex((prev) => (prev + 1) % content.length);
      }
    } else {
      // 非数组内容保持原逻辑，切换显示状态
      setIsActive(!isActive);
    }
  };

  // 确定要显示的内容
  const displayContent = () => {
    if (!isActive) return "显示屏";

    if (Array.isArray(content)) {
      // 数组内容显示当前索引的元素
      return content[currentIndex];
    } else {
      // 非数组内容直接显示
      return content;
    }
  };

  return (
    <div className="display-screen" onClick={handleClick} id={wrapperId}>
      <div className="display-content">{displayContent()}</div>
    </div>
  );
};

export default DisplayScreen;
