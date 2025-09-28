import "./Voltmeter.css";

const Voltmeter = ({ wrapperId }) => {
  return (
    <div className="voltmeter" id={wrapperId}>
      <div className="meter-dial">
        <div className="meter-scale">0</div>
        <div className="meter-scale">20</div>
        <div className="meter-scale">40</div>
        <div className="meter-scale">60</div>
        <div className="meter-scale">80</div>
        <div className="meter-scale">100</div>
        <div className="meter-scale">120</div>
        <div className="meter-needle"></div>
        <div className="meter-center"></div>
      </div>
      <div className="meter-label">VDC</div>
    </div>
  );
};

export default Voltmeter;
