import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";

// 自定义钩子：根据URL参数动态加载数据 获取对应关卡的数据
export const useDynamicData = (paramKey = "s") => {
  const [searchParams] = useSearchParams();
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [screenContent, setScreenContent] = useState("屏幕内容");
  // 从URL获取指定参数的值
  const dataKey = searchParams.get(paramKey);

  useEffect(() => {
    // 重置状态
    setLoading(true);
    setError(null);
    setData(null);

    if (!dataKey) {
      setError(`未找到参数: ${paramKey}`);
      setLoading(false);
      return;
    }

    // 动态引入数据模块
    const importData = async () => {
      try {
        // 动态导入对应的模块（路径可根据实际情况调整）
        const module = await import(`../../../data/${dataKey}`);
        // 支持默认导出和命名导出
        setScreenContent(module["screenContent"]); //对应文件里导出了screenContent
        setData(module.default || module[dataKey]);
      } catch (err) {
        console.error("数据加载失败:", err);
        setError(`无法加载数据: ${dataKey}`);
      } finally {
        setLoading(false);
      }
    };

    importData();
  }, [dataKey, paramKey]);

  // 返回数据、加载状态和错误信息
  return { data, loading, error, screenContent };
};
