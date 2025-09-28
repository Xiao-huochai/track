import "./OdometerPlaceholder.css";

const OdometerPlaceholder = ({ wrapperId }) => {
  return (
    <div className="odometer-placeholder" id={wrapperId}>
      <div className="odometer-display">0100364</div>
      <div className="odometer-label">里程计</div>
    </div>
  );
};

export default OdometerPlaceholder;
