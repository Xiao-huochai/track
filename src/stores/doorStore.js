import { useState, useMemo } from "react";

export const useDoorStore = () => {
  const [doorLeftOn, setDoorLeftOn] = useState(false);
  const [doorRightOn, setDoorRightOn] = useState(false);
  const [doorAllBugOn, setDoorAllBugOn] = useState(false);
  // 派生状态，自动根据 left 和 right 的值计算
  const doorAllOn = useMemo(() => {
    return !doorLeftOn && !doorRightOn;
  }, [doorLeftOn, doorRightOn]);

  return {
    doorLeftOn,
    setDoorLeftOn,
    doorRightOn,
    setDoorRightOn,
    doorAllOn, // 不需要 setDoorAllOn，因为它是自动计算出来的
    doorAllBugOn,
    setDoorAllBugOn,
  };
};
