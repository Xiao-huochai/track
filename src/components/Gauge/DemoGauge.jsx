import oilImg from "../../assets/imgs/oil.png";
import barImg from "../../assets/imgs/bar.png";
import "./DemoGauge.css";

const DemoGauge = () => {
  return (
    <>
      <img src={oilImg} alt="oil gauge" className="oil" id="demoGauge1" />
      <img src={barImg} alt="bar gauge" className="bar" id="demoGauge2" />
    </>
  );
};

export default DemoGauge;
