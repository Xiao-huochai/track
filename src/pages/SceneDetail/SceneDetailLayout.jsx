import "./SceneDetailLayout.css";
import { useNavigate } from "react-router-dom";
import LandscapeHintWrapper from "../../components/LandscapeHintWrapper/LandscapeHintWrapper";
// import { useState } from "react";
const SceneDetailLayout = ({
  title,
  childrenLeft,
  childrenRightTop,
  childrenRightBottom,
}) => {
  // const [showHelpModal, setShowHelpModal] = useState(false);
  const navigate = useNavigate();
  const handleBackToHome = () => {
    // 跳转到首页路由
    navigate("/");
  };
  return (
    <LandscapeHintWrapper>
      <div className="page-wrapper">
        <div className="aspect-ratio-container">
          <div className="detail-page">
            {/* Header 区域 */}
            <header className="detail-header">
              <h1>{title}</h1>
              <div className="header-btn-group">
                <button className="back-btn" onClick={handleBackToHome}>
                  返回首页
                </button>
              </div>
            </header>

            {/* 内容区域 */}
            <main className="detail-content">
              <div className="column left">{childrenLeft}</div>
              <div className="column right">
                <div className="row top">{childrenRightTop}</div>
                <div className="row bottom">{childrenRightBottom}</div>
              </div>
            </main>
          </div>
        </div>
      </div>
    </LandscapeHintWrapper>
  );
};

export default SceneDetailLayout;
// {/* 操作说明弹窗 */}
// {
//   showHelpModal && (
//     <div className="modal-overlay" onClick={() => setShowHelpModal(false)}>
//       <div
//         className="help-modal"
//         onClick={(e) => e.stopPropagation()} // 避免点击内部关闭
//       >
//         <div className="modal-header">
//           <h2>操作说明</h2>
//           <button onClick={() => setShowHelpModal(false)}>×</button>
//         </div>
//         <div className="modal-content">
//           <p>
//             <strong>操作共分为两个阶段：</strong>
//           </p>
//           <p>
//             <strong>引导阶段：</strong>点击高亮物体即可进行下一步
//           </p>
//           <p>
//             <strong>对话阶段：</strong>用户点击屏幕即可进行下一步
//           </p>
//           <p className="final-tip">现在开始按照引导完成故障处理吧！</p>
//         </div>
//       </div>
//     </div>
//   );
// }
