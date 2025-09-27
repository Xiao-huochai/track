import { useNavigate } from "react-router-dom";

const Modal = ({ isOpen, onClose, scene, sectionTitle }) => {
  const navigate = useNavigate();

  // 如果弹窗未打开，不渲染
  if (!isOpen) return null;

  // 点击遮罩层关闭弹窗
  const handleOverlayClick = (e) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  // 跳转到详情页
  const handleNavigate = () => {
    navigate(scene.path);
    onClose();
  };

  return (
    <div className="modal-overlay" onClick={handleOverlayClick}>
      <div className="modal-container">
        <button className="modal-close" onClick={onClose}>
          &times;
        </button>
        <h2 className="modal-title">{scene.name}</h2>
        <p className="modal-section">所属分类：{sectionTitle}</p>
        <div className="modal-content">
          <p>{scene.detail}</p>
          {/* 可以在这里添加更多详细内容 */}
        </div>
        <div className="modal-actions">
          <button className="modal-btn secondary" onClick={onClose}>
            关闭
          </button>
          <button className="modal-btn primary" onClick={handleNavigate}>
            开始模拟
          </button>
        </div>
      </div>
    </div>
  );
};

export default Modal;
