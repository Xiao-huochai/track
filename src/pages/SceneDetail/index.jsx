import { useLocation, Link } from "react-router-dom";
import { faultData } from "../../data/faultScenes";
import SceneDetailLayout from "./SceneDetailLayout";
import "./SceneDetail.css";

const SceneDetail = () => {
  const location = useLocation();
  const scene = findScene(location);

  //   如果找不到场景，显示错误信息
  if (!scene) {
    return (
      <div className="error-container">
        <h1>场景未找到</h1>
        <p>抱歉，请求的场景不存在或已被移除</p>
        <Link to="/" className="back-home-btn">
          返回首页
        </Link>
      </div>
    );
  }

  return (
    <SceneDetailLayout
      title={scene.name}
      childrenLeft={
        <div className="left-content-placeholder">
          <h3>故障信息</h3>
          <p>{scene.detail}</p>
          <div className="section-info">
            <p>所属分类：{getSectionTitle(scene.id)}</p>
          </div>
        </div>
      }
      childrenRightTop={
        <div className="right-top-placeholder">
          <h3>处理步骤</h3>
          <p>此处将显示该故障的详细处理步骤...</p>
        </div>
      }
      childrenRightBottom={
        <div className="right-bottom-placeholder">
          <h3>示意图/操作区域</h3>
          <p>此处将显示故障相关示意图或交互操作区域...</p>
        </div>
      }
    />
  );
};

// 查找当前场景完整信息
const findScene = (location) => {
  for (const section of faultData) {
    const scene = section.scenes.find((s) => s.path === location.pathname);
    if (scene) {
      return {
        ...scene,
        sectionTitle: section.title,
      };
    }
  }
  return null;
};

// 获取场景所属分类标题
const getSectionTitle = (sceneId) => {
  for (const section of faultData) {
    const hasScene = section.scenes.some((s) => s.id === sceneId);
    if (hasScene) {
      return section.title;
    }
  }
  return "未知分类";
};

export default SceneDetail;
