import { useEffect, useState } from "react";

// ✅ 旋转提示封装组件
export default function LandscapeHintWrapper({ children }) {
  const [isPortrait, setIsPortrait] = useState(
    window.innerHeight > window.innerWidth
  );

  useEffect(() => {
    const checkOrientation = () => {
      setIsPortrait(window.innerHeight > window.innerWidth);
    };

    window.addEventListener("resize", checkOrientation);
    window.addEventListener("orientationchange", checkOrientation);

    // 初始检查
    checkOrientation();

    return () => {
      window.removeEventListener("resize", checkOrientation);
      window.removeEventListener("orientationchange", checkOrientation);
    };
  }, []);

  return (
    <>
      {isPortrait ? (
        <div
          style={{
            position: "fixed",
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            background: "linear-gradient(135deg, #f0f4f8, #d9e2ec)",
            color: "#2c3e50",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            fontSize: "5rem",
            zIndex: 9999,
            textAlign: "center",
            padding: "20px",
          }}
        >
          🔄 请旋转您的设备
          <br />
          以横屏模式体验更佳
        </div>
      ) : (
        children
      )}
    </>
  );
}
