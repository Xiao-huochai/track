import driverAvatar from "../assets/imgs/user.png";
import dispatcherAvatar from "../assets/imgs/leader.png";
// import guideAvatar from "../assets/imgs/characterImg.png";
export const c2s1 = [
  {
    type: "guide",
    step: {
      selector: "#BP-0-r",
      text: "列车故障了快点击“车辆显示屏”查看牵引状态界面",
    },
  },
  {
    type: "guide",
    step: {
      selector: "#BP-1-r",
      text: "牵引电机 3 个图标红点",
    },
  },
  {
    type: "guide",
    step: {
      selector: "#BP-2-r",
      text: "接通电话：呼叫行调“行调，XX 次在XX 站-XX 站上/下行区间列车出现牵引电机3 个红点故障，无法动车，司机申请执行车辆故障处理流程。”",
    },
  },
  {
    type: "guide",
    step: {
      selector: "#DisplayScreen",
      text: "“XX 次，申请执行车辆故障处理流程，行调同意。”",
    },
  },
  {
    type: "chat",
    step: {
      selector: "#SZCK-R-2-2",
      text: "点击车辆显示屏的“临时停车”播放广播",
      offset: { top: 90, left: -50 },
      avatar: driverAvatar,
    },
  },
  {
    type: "guide",
    step: {
      selector: "#demoGauge2",
      text: "点击检查“受电弓升”绿灯是否亮起 “主控钥匙”是否在“开”位",
      // offset: { top: 50, left: 50 },
    },
  },
  {
    type: "chat",
    step: {
      selector: "#SZCK-R-2-5",
      text: "受电弓升起、“主控钥匙”在“开”位",
      offset: { top: 50, left: 50 },
      avatar: driverAvatar,
    },
  },
  {
    type: "both",
    guideStep: {
      selector: "#SZCK-L-2-1-6",
      text: "点击按下“MVB 复位”按钮保持5s",
    },
    chatStep: {
      selector: "#SZCK-L-2-1-6",
      text: "复位 MVB",
      offset: { top: 10, left: 0 },
      avatar: driverAvatar,
    },
  },
  {
    type: "both",
    guideStep: {
      selector: "#SZCK-L-2-1-6",
      text: "点击按下“主断合”按钮",
    },
    chatStep: {
      selector: "#SZCK-L-2-1-6",
      text: "合主断",
      offset: { top: 10, left: 0 },
      avatar: driverAvatar,
    },
  },
  {
    type: "chat",
    step: {
      selector: "#SZCK-R-2-5",
      text: "“主断合”绿灯亮，尝试动车",
      offset: { top: 10, left: 0 },
      avatar: dispatcherAvatar,
    },
  },
  {
    type: "both",
    guideStep: {
      selector: "#SZCK-L-2-1-6",
      text: "点击调整运行模式选择开关”至“降级”位 并尝试动车",
    },
    chatStep: {
      selector: "#SZCK-L-2-1-6",
      text: "“运行模式选择”至“降级”位",
      offset: { top: 10, left: 0 },
      avatar: driverAvatar,
    },
  },
  {
    type: "guide",
    step: {
      selector: "#DisplayScreen",
      text: "接通电话 呼叫行调报告行调：“XX 次在 XX 站-XX 站上/下行区间列车已动车，列车设备正常，司机操作了降级模式，申请限速退出服务。””",
      offset: { top: 40, left: 50 },
    },
  },
  {
    type: "chat",
    step: {
      selector: "#DisplayScreen",
      text: "“XX 次，申请退出服务，行调同意。”",
      avatar: dispatcherAvatar,
    },
  },
  {
    type: "chat",
    step: {
      selector: "#SZCK-R-2-2",
      text: "挂断电话",
      offset: {
        top: 100,
        left: -50,
      },
      avatar: driverAvatar,
    },
  },
  {
    type: "none",
  },
];
export const screenContent = ["牵引电机3个图标红点", "临时停车"];
