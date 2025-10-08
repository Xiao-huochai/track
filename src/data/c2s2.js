import driverAvatar from "../assets/imgs/user.png";
import dispatcherAvatar from "../assets/imgs/leader.png";
// import guideAvatar from "../assets/imgs/characterImg.png";
export const c2s2 = [
  {
    type: "guide",
    step: {
      selector: "#DisplayScreen",
      text: "列车故障了快点击“车辆显示屏”查看牵引状态界面",
    },
  },
  {
    type: "chat",
    step: {
      selector: "#DriveModeButton",
      text: "牵引电机 1 个图标红点",
      avatar: driverAvatar,
      offset: {
        top: 150,
        left: 100,
      },
    },
  },
  {
    type: "chat",
    step: {
      offset: {
        top: 150,
        left: 100,
      },
      avatar: driverAvatar,
      selector: "#DriveModeButton",
      text: "接通电话：行调，XX 次在 XX 站-XX 站上/下行区间列车出现牵引电机 1 个红点故障，可以继续运行。”",
    },
  },
  {
    type: "chat",
    step: {
      selector: "#DisplayScreen",
      text: "“XX 次，限速 60km/h运行至前方车站，执行车辆故障处理流程。”",
      avatar: dispatcherAvatar,
    },
  },
  {
    type: "chat",
    step: {
      offset: {
        top: 150,
        left: 100,
      },
      avatar: driverAvatar,
      selector: "#DriveModeButton",
      text: "XX 次，限速 60km/h运行至前方车站，执行车辆故障处理流程，司机明白。",
    },
  },
  {
    type: "chat",
    step: {
      offset: {
        top: 150,
        left: 100,
      },
      avatar: driverAvatar,
      selector: "#DriveModeButton",
      text: "结束通话",
    },
  },
  {
    type: "guide",
    step: {
      selector: "#DisplayScreen",
      text: "限速 60km/h 运行至前方车站之后紧急停车 点击车辆显示屏的“临时停车”播放广播",
      //   offset: { top: 90, left: -50 },
      //   avatar: driverAvatar,
    },
  },
  {
    type: "guide",
    step: {
      selector: "#BP-0-l",
      text: "点击按压“主断分”按钮",
      // offset: { top: 50, left: 50 },
    },
  },
  {
    type: "chat",
    step: {
      selector: "#SZCK-R-2-5",
      text: "主断路器分",
      offset: { top: 50, left: 50 },
      avatar: driverAvatar,
    },
  },
  {
    type: "both",
    guideStep: {
      selector: "#autoICU",
      text: "请复位“ICU”自动开关，断开 ICU 自动开关后等待 5 秒再闭合",
    },
    chatStep: {
      selector: "#autoICU",
      text: "复位 ICU 自动开关",
      offset: { top: 10, left: 0 },
      avatar: driverAvatar,
    },
  },
  {
    type: "both",
    guideStep: {
      selector: "#autoICU",
      text: "5 秒到请闭合",
    },
    chatStep: {
      selector: "#autoICU",
      text: "闭合 ICU 自动开关",
      offset: { top: 10, left: 0 },
      avatar: driverAvatar,
    },
  },
  {
    type: "both",
    guideStep: {
      selector: "#BP-0-r",
      text: "点击按下“主断合”按钮",
    },
    chatStep: {
      selector: "#BP-0-r",
      text: "主断路器合",
      offset: { top: 10, left: 0 },
      avatar: driverAvatar,
    },
  },
  {
    type: "guide",
    step: {
      selector: "#DisplayScreen",
      text: "点击“车辆显示屏”查看牵引状态界面",
      // offset: { top: 50, left: 50 },
    },
  },
  {
    type: "chat",
    step: {
      selector: "#RBLL-SB-1",
      text: "牵引电机图标恢复正常",
      offset: {
        top: -100,
        left: 0,
      },
      avatar: driverAvatar,
    },
  },
  {
    type: "guide",
    step: {
      selector: "#CBRL-0-4",
      text: "关闭车门、站台门后，按规定模式驾驶",
      // offset: { top: 50, left: 50 },
    },
  },
  {
    type: "guide",
    step: {
      selector: "#CBRR-1-4",
      text: "关闭车门、站台门后，按规定模式驾驶",
      offset: { top: 50, left: 200 },
    },
  },
  {
    type: "chat",
    step: {
      selector: "#RBLL-SB-1",
      text: "接通电话 呼叫行调报告行调：“XX 次在 XX 站-XX 站上/下行区间列车已动车，列车设备正常，司机操作了降级模式，申请限速退出服务。””",
      offset: {
        top: -100,
        left: 0,
      },
      avatar: driverAvatar,
    },
  },
  {
    type: "chat",
    step: {
      selector: "#DisplayScreen",
      text: "“XX 次，列车设备正常，司机复位 ICU 自动开关，行调收到。”",
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
export const screenContent = [
  "牵引电机1个图标红点",
  "紧急停车",
  "牵引电机图标正常",
];
