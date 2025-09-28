import { useState } from "react";
import "./DisplayScreen.css";

const DisplayScreen = ({ content, wrapperId }) => {
  // 状态管理：控制是否显示内容
  const [isActive, setIsActive] = useState(false);

  // 处理点击事件，切换显示状态
  const handleClick = () => {
    setIsActive(true);
  };

  return (
    <div className="display-screen" onClick={handleClick} id={wrapperId}>
      {/* 点击前显示提示文字，点击后显示传入的字符串 */}
      <div className="display-content">{isActive ? content : "显示屏"}</div>
    </div>
  );
};

export default DisplayScreen;
