import "./SquareButton.css";

// 添加 isOn 和 onClick
const DoorAllButton = ({
  color,
  inActiveColor = "#666",
  label,
  isOn = false, // 从外部接收
  onClick = null, // 可选点击回调
  wrapperId,
}) => {
  const handleToggle = () => {
    if (onClick) onClick(); // 父组件决定是否进行状态修改
  };

  return (
    <div
      className="square-button-container"
      onClick={handleToggle}
      id={wrapperId}
    >
      <div
        className="square-button"
        style={{ backgroundColor: isOn ? color : inActiveColor }}
      ></div>
      <div className="button-label">{label}</div>
    </div>
  );
};

export default DoorAllButton;
