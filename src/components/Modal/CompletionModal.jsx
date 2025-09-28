import "./CompletionModal.css";

const CompletionModal = () => {
  return (
    <div className="cm-mask">
      <div className="cm-modal">
        <div className="cm-content">
          🎉 你已成功解决故障，列车可以正常启动啦！
        </div>
        <div className="cm-actions">
          <button className="cm-btn">返回</button>
          <button className="cm-btn cm-primary">继续处理</button>
        </div>
      </div>
    </div>
  );
};

export default CompletionModal;
