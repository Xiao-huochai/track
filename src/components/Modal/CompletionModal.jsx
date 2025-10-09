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

  // 关卡 ID 与标题映射表
  const levelMap = {
    c1s1: "列车紧制不缓解",
    c1s2: "列车停放制动施加、缓解灯不亮",
    c1s3: "列车有气机制动缓解灯不亮",
    c2s1: "牵引电机故障",
    c2s2: "牵引电机故障2",
    c2s3: "牵引封锁/激活故障",
    c3s1: "辅助逆变器图标显示异常",
    c3s2: "激活端B车失电",
    c3s3: "车辆显示屏黑屏",
    c4s1: "“所有车门关闭”指示灯不亮",
    c5s1: "受电弓降弓追停区间",
    c5s2: "主断合灯不亮",
  };

  const handleGoHome = () => {
    // 使用navigate导航到首页
    navigate("/");
  };

  const handleGoNext = () => {
    const dataKey = searchParams.get("s"); // 当前关卡 ID
    const currentIndex = guanqia.indexOf(dataKey);

    if (currentIndex === -1) {
      handleGoHome();
      return;
    }

    // 最后一关 → 回首页
    if (currentIndex === guanqia.length - 1) {
      handleGoHome();
    } else {
      const nextKey = guanqia[currentIndex + 1]; // 获取下一关卡 key
      const nextTitle = levelMap[nextKey] || "未知关卡"; // 获取下一关卡标题

      // ✅ 同时更新路径和查询参数
      navigate(`/scene/${encodeURIComponent(nextTitle)}?s=${nextKey}`);
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
