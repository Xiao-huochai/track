import { useEffect, useState } from "react";

// ✅ 仅在移动端检测横竖屏的提示封装组件
export default function LandscapeHintWrapper({ children }) {
  const [isPortraitOnMobile, setIsPortraitOnMobile] = useState(false);

  useEffect(() => {
    const isMobile = /Mobi|Android|iPhone|iPad|iPod|Phone/i.test(
      navigator.userAgent
    );

    const checkOrientation = () => {
      if (isMobile) {
        const portrait = window.innerHeight > window.innerWidth;
        console.log(portrait);
        setIsPortraitOnMobile(portrait);
      } else {
        setIsPortraitOnMobile(false); // 桌面端不显示提示
      }
    };

    checkOrientation();

    window.addEventListener("resize", checkOrientation);
    window.addEventListener("orientationchange", checkOrientation);

    return () => {
      window.removeEventListener("resize", checkOrientation);
      window.removeEventListener("orientationchange", checkOrientation);
    };
  }, []);

  return (
    <>
      {isPortraitOnMobile ? (
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
