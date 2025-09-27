import { useLocation } from "react-router-dom";
import SceneDetailLayout from "./SceneDetailLayout";
import "./SceneDetail.css";

const SceneDetail = () => {
  const location = useLocation();

  // 解析URL路径并解码中文
  const pathParts = location.pathname.split("/");
  // 获取编码后的系统名称（索引2）并解码
  const encodedSystemName = pathParts[2] || "";
  // 解码URL编码的中文（核心修复）
  const systemName = encodedSystemName
    ? decodeURIComponent(encodedSystemName)
    : "未知系统";

  return (
    <SceneDetailLayout
      title={systemName + "故障"} // 显示解码后的中文
      childrenLeft={<div className="left-content-placeholder"></div>}
      childrenRightTop={<div className="right-top-placeholder"></div>}
      childrenRightBottom={<div className="right-bottom-placeholder"></div>}
    />
  );
};

export default SceneDetail;
