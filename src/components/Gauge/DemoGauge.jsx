import { Gauge } from "@ant-design/plots";

const DemoGauge = () => {
  const config = {
    autoFit: true,
    data: {
      target: 120,
      total: 400,
      name: "score",
    },
    style: {
      textFontSize: 10,
      textX: "50%",
      textY: "75%",
      textContent: (target) => {
        return `读数：${target}\n `;
      },
    },
  };
  return <Gauge {...config} />;
};
export default DemoGauge;
