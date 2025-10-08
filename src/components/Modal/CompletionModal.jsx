import "./CompletionModal.css";
import { useSearchParams, useNavigate } from "react-router-dom";

const CompletionModal = () => {
  const [searchParams] = useSearchParams();
  const navigate = useNavigate(); // 获取导航函数

  const guanqia = [
    "c1s1",
    "c1s2",
    "c1s3",
    "c2s1",
    "c2s2",
    "c2s3",
    "c3s1",
    "c3s2",
    "c3s3",
    "c4s1",
    "c5s1",
    "c5s2",
  ];

  const handleGoHome = () => {
    // 使用navigate导航到首页
    navigate("/");
  };

  const handleGoNext = () => {
    const dataKey = searchParams.get("s"); // 获取当前s参数值
    const currentIndex = guanqia.indexOf(dataKey);

    // 处理异常情况（当前s值不在关卡数组中）
    if (currentIndex === -1) {
      handleGoHome();
      return;
    }

    // 判断是否为最后一关
    if (currentIndex === guanqia.length - 1) {
      handleGoHome(); // 最后一关完成后返回首页
    } else {
      // 导航到下一关，仅更新s参数（保持当前路径，只修改查询参数）
      const nextLevel = guanqia[currentIndex + 1];
      navigate({ search: `s=${nextLevel}` });
    }
  };

  // 组件其他逻辑和渲染...
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
          <button className="cm-btn cm-primary" onClick={handleGoNext}>
            继续处理
          </button>
        </div>
      </div>
    </div>
  );
};

export default CompletionModal;
