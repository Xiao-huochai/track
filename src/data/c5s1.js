import driverAvatar from "../assets/imgs/user.png";
import dispatcherAvatar from "../assets/imgs/leader.png";
// import guideAvatar from "../assets/imgs/characterImg.png";
export const c3s3 = [
  {
    type: "guide",
    step: {
      selector: "#DisplayScreen",
      text: "点击屏幕查看信息",
    },
  },
  {
    type: "chat",
    step: {
      selector: "#DriveModeButton",
      text: "网压为零，2 个受电弓降下",
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
      text: "接通电话，呼叫行调。“行调，XX 次在 XX 站-XX 站上/下行区间列车出现网压为零，2 个受电弓降弓故障，无法动车，接触网是否跳闸？”",
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
      text: "“XX 次，接触网未跳闸，司机执行车辆故障处理流程。”",
      avatar: dispatcherAvatar,
    },
  },
  {
    type: "chat",
    step: {
      selector: "#RBLL-SB-1",
      text: "“XX 次，执行车辆故障处理流程，司机明白。”",
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
      selector: "#DisplayScreen",
      text: "点击临时停车按钮",
    },
  },
  {
    type: "chat",
    step: {
      selector: "#RBLL-SB-1",
      text: "车辆显示屏无“紧急制动”信息两个“紧急停车”按钮均弹起",
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
      selector: "#BP-1-l",
      text: "受电弓降",
    },
    chatStep: {
      selector: "#BP-1-l",
      text: "受电弓降",
      offset: { top: 10, left: 0 },
      avatar: driverAvatar,
    },
  },
  {
    type: "guide",
    step: {
      selector: "#BP-1-r",
      text: "点击受电弓升按钮试试",
    },
  },
  {
    type: "chat",
    step: {
      selector: "#RBLL-SB-1",
      text: "受电弓未升起",
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
      selector: "#SZCK-L-2-1-1",
      text: "允许升弓旁路切换至“合”位试试",
    },
    chatStep: {
      selector: "#SZCK-L-2-1-1",
      text: "“允许升弓旁路”至“合”位",
      offset: { top: 10, left: 0 },
      avatar: driverAvatar,
    },
  },
  {
    type: "guide",
    step: {
      selector: "#BP-1-r",
      text: "再次点击受电弓升按钮试试",
    },
  },
  {
    type: "chat",
    step: {
      selector: "#RBLL-SB-1",
      text: "受电弓升起",
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
      selector: "#RBLL-SB-1",
      text: "接通电话，呼叫行调。“行调，XX 次在 XX 站-XX 站上/下行区间，司机操作“允许升弓旁路”后现已升弓，列车运行正常。”",
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
      text: "“XX 次，司机操作“允许升弓旁路”后现已升弓，列车运行正常，行调收到。”",
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
export const screenContent = ["网压为0两个受电弓降下", "临时停车"];
