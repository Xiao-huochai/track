import "./SceneCard.css";

const SceneCard = ({ scene, onCardClick }) => {
  return (
    <div
      className="scene-card"
      onClick={() => onCardClick(scene)}
      role="button"
      tabIndex={0}
    >
      <div className="scene-name">{scene.name}</div>
      {/* 点击后通过弹窗显示详情，这里不再需要悬停显示 */}
    </div>
  );
};

export default SceneCard;
