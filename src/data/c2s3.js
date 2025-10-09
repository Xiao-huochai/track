import driverAvatar from "../assets/imgs/user.png";
import dispatcherAvatar from "../assets/imgs/leader.png";
// import guideAvatar from "../assets/imgs/characterImg.png";
export const c2s3 = [
  {
    type: "chat",
    step: {
      selector: "#RBLL-SB-1",
      text: "接通电话：呼叫行调“行调，XX 次在XX 站-XX 站上/下行区间“车辆显示屏”显示“牵引封锁/激活故障”，无法动车，司机申请执行车辆故障处理流程。”",
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
      text: "“XX 次，申请执行车辆故障处理流程，行调同意。”",
      avatar: dispatcherAvatar,
    },
  },
  {
    type: "guide",
    step: {
      selector: "#DisplayScreen",
      text: "点击车辆显示屏的“临时停车”播放广播",
    },
  },
  {
    type: "guide",
    step: {
      selector: "#rr1",
      text: "请推主控手柄尝试动车",
      offset: {
        top: 60,
        left: 150,
      },
    },
  },
  {
    type: "guide",
    step: {
      selector: "#mainKey",
      text: "将“主控钥匙”打到“关”位，待“车辆显示屏”黑屏 3 秒后，将“主控钥匙”打到“开”位，尝试动车",
    },
  },
  {
    type: "guide",
    step: {
      selector: "#DisplayScreen",
      text: "车辆显示屏黑3秒",
    },
  },
  {
    type: "guide",
    step: {
      selector: "#mainKey",
      text: "将“主控钥匙”打到“开”位",
    },
  },
  {
    type: "guide",
    step: {
      selector: "#rr1",
      text: "将“主控手柄”拉至“快速制动”位，之后回零，等 3 秒后，再尝试动车",
      offset: {
        top: 60,
        left: 150,
      },
    },
  },
  {
    type: "guide",
    step: {
      selector: "#DisplayScreen",
      text: "点击“车辆显示屏”，查看车门、牵引、制动、辅助电源和空压机状态界面",
    },
  },
  {
    type: "chat",
    step: {
      selector: "#DriveModeButton",
      text: "各子系统无异常",
      avatar: driverAvatar,
      offset: {
        top: 150,
        left: 100,
      },
    },
  },
  {
    type: "both",
    guideStep: {
      selector: "#runModel",
      text: "“运行模式选择”至“降级”位",
    },
    chatStep: {
      selector: "#runModel",
      text: "“运行模式选择”至“降级”位",
      offset: { top: 10, left: 0 },
      avatar: driverAvatar,
    },
  },
  {
    type: "chat",
    step: {
      selector: "#RBLL-SB-1",
      text: "接通电话 呼叫行调报告行调：“行调，XX 次在XX 站-XX 站上/下行区间“车辆显示屏”显示‘牵引封锁/激活故障’，司机操作降级模式后列车已经动车，申请限速退出服务。”",
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
      text: "“XX 次，申请限速退出服务，行调同意。”",
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
  "临时停车",
  "",
  "车门、牵引、制动、辅助电源和空压机正常",
];
