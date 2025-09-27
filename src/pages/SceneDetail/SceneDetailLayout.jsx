import "./SceneDetailLayout.css";

const SceneDetailLayout = ({
  title,
  childrenLeft,
  childrenRightTop,
  childrenRightBottom,
}) => {
  return (
    <div className="detail-page">
      {/* 顶部区域：标题 + 操作说明 */}
      <header className="detail-header">
        <h1>{title}</h1>
        <button className="operation-btn">操作说明</button>
      </header>

      {/* 中间主内容区：左右分栏，右侧再上下分栏 */}
      <main className="detail-content">
        <div className="column left">{childrenLeft}</div>
        <div className="column right">
          <div className="row top">{childrenRightTop}</div>
          <div className="row bottom">{childrenRightBottom}</div>
        </div>
      </main>
    </div>
  );
};

export default SceneDetailLayout;
