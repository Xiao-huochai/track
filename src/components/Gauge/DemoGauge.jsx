import { Gauge } from "@ant-design/plots";
import { Path } from "@antv/g";

function getOrigin(points) {
  if (points.length === 1) return points[0];
  const [[x0, y0, z0 = 0], [x2, y2, z2 = 0]] = points;
  return [(x0 + x2) / 2, (y0 + y2) / 2, (z0 + z2) / 2];
}
// 自定义指针形状
const customShape = (style) => {
  return (points, value, coordinate, theme) => {
    // 获取几何点中心坐标
    const [x, y] = getOrigin(points);
    const [cx, cy] = coordinate.getCenter();
    // 计算指针方向角度
    const angle = Math.atan2(y - cy, x - cx);
    const length = 20; // 指针长度
    const width = 2; // 指针底部宽度
    // 构造指针三角形路径
    return new Path({
      style: {
        d: [
          ["M", cx + Math.cos(angle) * length, cy + Math.sin(angle) * length], // 顶点
          [
            "L",
            cx + Math.cos(angle + Math.PI / 2) * width,
            cy + Math.sin(angle + Math.PI / 2) * width,
          ], // 底部左点
          [
            "L",
            cx + Math.cos(angle - Math.PI / 2) * width,
            cy + Math.sin(angle - Math.PI / 2) * width,
          ], // 底部右点
          ["Z"], // 闭合路径
        ],
        fill: "#30BF78", // 填充色
      },
    });
  };
};

const DemoGauge = () => {
  const config = {
    autoFit: true,
    data: {
      target: 3,
      total: 12,
      name: "score",
    },
    style: {
      pointerShape: customShape,
      pinShape: false,
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
