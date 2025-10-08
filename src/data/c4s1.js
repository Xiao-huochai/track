import driverAvatar from "../assets/imgs/user.png";
import dispatcherAvatar from "../assets/imgs/leader.png";
// import guideAvatar from "../assets/imgs/characterImg.png";
export const c4s1 = [
  {
    type: "chat",
    step: {
      selector: "#RBLL-SB-1",
      text: "接通电话，呼叫行调。报告行调:“行调,XX次在XX站上/下行,所有车门关闭灯不亮,列车无法动车,司机申请执行车辆故障处理流程。”",
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
      text: "点击临时停车",
    },
  },
  {
    type: "guide",
    step: {
      selector: "#CBRL-0-4",
      text: "“关左”绿灯亮",
    },
  },
  {
    type: "guide",
    step: {
      selector: "#CBRL-1-4",
      text: "“关右”绿灯亮",
      offset: {
        top: 60,
        left: 200,
      },
    },
  },
  {
    type: "chat",
    step: {
      selector: "#RBLL-SB-1",
      text: "“关左/右门”绿灯亮、“所有车门关闭”灯不亮",
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
      selector: "#SZCK-R-2-5",
      text: "点击“灯测试”按钮",
    },
  },
  {
    type: "guide",
    step: {
      selector: "#SB-2",
      text: "绿灯亮",
    },
  },
  {
    type: "chat",
    step: {
      selector: "#DriveModeButton",
      text: "所有车门关闭”绿灯亮",
      avatar: driverAvatar,
      offset: {
        top: 150,
        left: 100,
      },
    },
  },
  {
    type: "guide",
    step: {
      selector: "#DisplayScreen",
      text: "点击屏幕查看所有车门是否关闭正常",
    },
  },
  {
    type: "chat",
    step: {
      selector: "#RBLL-SB-1",
      text: "所有车门关闭正常",
      offset: {
        top: -100,
        left: 0,
      },
      avatar: driverAvatar,
    },
  },
  {
    type: "both",
    guideStep: {
      selector: "#SZCK-L-2-2-0",
      text: "点击切换车门旁路至合位",
      offset: { top: 60, left: 0 },
    },
    chatStep: {
      selector: "#SZCK-L-2-2-0",
      text: "车门旁路至合位",
      offset: { top: 10, left: 0 },
      avatar: driverAvatar,
    },
  },
  {
    type: "chat",
    step: {
      selector: "#RBLL-SB-1",
      text: "接通电话，呼叫行调。报告行调:“行调，XX 次在X 站上/行，司机操作“车门旁路”后现已动车，列车运行正常。”",
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
      text: "“XXX 次，司机操作“车门旁路”后动车，列车运行正常，行调收到。”",
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
export const screenContent = ["临时停车", "车门关闭正常"];

export const initState = {
  pairButton1l: false,
  pairButton1r: false,
  pairButton2l: false,
  pairButton2r: false,
  pairButton3l: false,
  pairButton3r: false,
  useDoorBugOn: true,
};
