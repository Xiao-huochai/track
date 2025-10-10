import driverAvatar from "../assets/imgs/user.png";
import dispatcherAvatar from "../assets/imgs/leader.png";
// import guideAvatar from "../assets/imgs/characterImg.png";
export const c3s2 = [
  {
    type: "guide",
    step: {
      selector: "#DisplayScreen",
      text: "点击查看信息",
    },
  },
  {
    type: "chat",
    step: {
      selector: "#DriveModeButton",
      text: "B 车所有车门打开、制动图标显示为 P，空调不工作，列车无法动车",
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
      text: "接通电话，呼叫行调。报告行调:““行调，XX 次在 XX 站-XX 站上/下行区间激活端单元 B 车失电，车辆显示屏上 B 车出现空调不工作、车门打开、制动图标显示 P，司机申请执行车辆故障处理流程。”",
      offset: {
        top: -200,
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
      text: "点击临时停车",
    },
  },
  {
    type: "chat",
    step: {
      selector: "#DriveModeButton",
      text: "记得切除故障车B05哦",
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
      text: "“信号选择打至信号切除位”",
      offset: { top: 50, left: 0 },
    },
    chatStep: {
      selector: "#SZCK-L-2-1-0",
      text: "“信号选择打至信号切除位”",
      offset: { top: 10, left: 0 },
      avatar: driverAvatar,
    },
  },
  {
    type: "both",
    guideStep: {
      selector: "#SZCK-L-2-2-0",
      text: "“车门旁路”至“合”位",
      offset: { top: 50, left: 0 },
    },
    chatStep: {
      selector: "#SZCK-L-2-2-0",
      text: "“车门旁路”至“合”位",
      offset: { top: 10, left: 0 },
      avatar: driverAvatar,
    },
  },
  {
    type: "both",
    guideStep: {
      selector: "#SZCK-L-2-1-5",
      text: "“停放制动旁路”至“合”位",
    },
    chatStep: {
      selector: "#SZCK-L-2-1-5",
      text: "“停放制动旁路”至“合”位",
      offset: { top: 10, left: 0 },
      avatar: driverAvatar,
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
      offset: { top: -100, left: 150 },
      avatar: driverAvatar,
    },
  },
  {
    type: "chat",
    step: {
      selector: "#RBLL-SB-1",
      text: "接通电话，呼叫行调。报告行调:“行调，XX 次在 XX 站-XX 站上/下行区间列车已动车，司机切除故障车 B05、操作 “信号选择”开关至“信号切除”位、“车门旁路”至“合”位、“停放制动旁路”至“合”位、“运行模式选择”至“降级”位，申请限速退出服务。”",
      offset: {
        top: -300,
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
  "B 车所有车门打开、制动图标为 P，空调不工作,列车无法动车",
  "临时停车",
];
