import { Gauge } from "@ant-design/plots";

const DemoGauge = () => {
  const config = {
    autoFit: true,
    data: {
      target: 120,
      total: 400,
      name: "score",
    },
  };
  return <Gauge {...config} />;
};
export default DemoGauge;
