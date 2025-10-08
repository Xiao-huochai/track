import driverAvatar from "../assets/imgs/user.png";
import dispatcherAvatar from "../assets/imgs/leader.png";
// import guideAvatar from "../assets/imgs/characterImg.png";
export const c3s3 = [
  {
    type: "guide",
    step: {
      selector: "#DisplayScreen",
      text: "黑屏",
    },
  },
  {
    type: "chat",
    step: {
      selector: "#DriveModeButton",
      text: "车辆显示屏黑屏",
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
      selector: "#RBLL-SB-1",
      text: "接通电话，呼叫行调。报告行调:“行调，XX 次在 XX 站-XX 站上/下行区间“车辆显示屏”黑屏，列车无法动车，司机申请执行车辆故障处理流程。”",
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
      selector: "#RBLL-SB-1",
      text: "“SKS1”自动开关跳闸",
    },
  },
  {
    type: "both",
    guideStep: {
      selector: "#DriveModeButton",
      text: "将“驾驶模式选择”开关转向“RM”位",
    },
    chatStep: {
      selector: "#DriveModeButton",
      text: "将“驾驶模式选择”开关转向“RM”位",
      offset: { top: 10, left: 0 },
      avatar: driverAvatar,
    },
  },
  {
    type: "both",
    guideStep: {
      selector: "#DriveModeButton",
      text: "将“驾驶模式选择”开关转向“RM”位",
    },
    chatStep: {
      selector: "#DriveModeButton",
      text: "将“驾驶模式选择”开关转向“RM”位",
      offset: { top: 10, left: 0 },
      avatar: driverAvatar,
    },
  },
  {
    type: "both",
    guideStep: {
      selector: "#SZCK-L-2-1-0",
      text: "“运行模式选择”至“降级”位",
    },
    chatStep: {
      selector: "#SZCK-L-2-1-0",
      text: "“运行模式选择”至“降级”位",
      offset: { top: 10, left: 0 },
      avatar: driverAvatar,
    },
  },
  {
    type: "chat",
    step: {
      selector: "#RBLL-SB-1",
      text: "接通电话，呼叫行调。报告行调:“行调，XX 次在 XX 站-XX 站上/下行区间列车已动车，司机操作 “运行模式选择”至“降级”位，申请限速退出服务。”",
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
export const screenContent = ["", "临时停车"];
