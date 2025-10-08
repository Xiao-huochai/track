import "./ColorButton.css";

const DoorButton = ({
  label,
  topLabel,
  isOn = false,
  onClick = null, // 父组件可以接收点击回调
  activeColor = "#e74c3c",
  inactiveColor = "#666",
  borderColor = "#999",
  wrapperId,
}) => {
  const handleToggle = () => {
    if (onClick) onClick();
  };

  return (
    <div
      className="single-red-button-container"
      onClick={handleToggle}
      id={wrapperId}
    >
      <div className="top-label" style={{ opacity: topLabel === null ? 0 : 1 }}>
        {topLabel}
      </div>
      <div
        className="red-button"
        style={{
          backgroundColor: isOn ? activeColor : inactiveColor,
          borderColor: borderColor,
        }}
      ></div>
      <div className="bottom-label">{label}</div>
    </div>
  );
};

export default DoorButton;
