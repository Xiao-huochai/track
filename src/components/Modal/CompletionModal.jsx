import "./CompletionModal.css";

const CompletionModal = () => {
  const handleGoHome = () => {
    // 返回首页
    window.location.href = "/";
  };

  return (
    <div className="cm-mask">
      <div className="cm-modal">
        <div className="cm-content">
          🎉 你已成功解决故障，列车可以正常启动啦！
        </div>
        <div className="cm-actions">
          <button className="cm-btn" onClick={handleGoHome}>
            返回
          </button>
          <button className="cm-btn cm-primary">继续处理</button>
        </div>
      </div>
    </div>
  );
};

export default CompletionModal;
