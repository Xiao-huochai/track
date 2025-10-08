import driverAvatar from "../assets/imgs/user.png";
import dispatcherAvatar from "../assets/imgs/leader.png";
// import guideAvatar from "../assets/imgs/characterImg.png";
export const c5s2 = [
  {
    type: "guide",
    step: {
      selector: "#SZCK-R-2-5",
      text: "点击灯测试",
    },
  },
  {
    type: "chat",
    step: {
      selector: "#DriveModeButton",
      text: "试灯亮",
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
      text: "网压正常,受电弓正常升起",
    },
  },
  {
    type: "chat",
    step: {
      selector: "#RBLL-SB-1",
      text: "接通电话，呼叫行调。“行调，XX 次在 XX 站-XX 站上/下行区间列车出现主断合灯不亮，网压、受电弓正常，无法动车，司机申请执行故障处理流程”",
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
      text: "点击临时停车",
    },
  },
  {
    type: "guide",
    step: {
      selector: "#BP-0-l",
      text: "点击“主断分”按钮",
    },
  },
  {
    type: "guide",
    step: {
      selector: "#BP-0-r",
      text: "点击“主断合”按钮",
      preventClickEvent: true,
    },
  },
  {
    type: "chat",
    step: {
      selector: "#RBLL-SB-1",
      text: "主断合灯不亮",
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
      text: "“HSCB控制”开关跳闸",
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
      selector: "#RBLL-SB-1",
      text: "闭合“HSCB控制”开关",
    },
  },
  {
    type: "both",
    guideStep: {
      selector: "#RBLL-SB-2",
      text: "断开“VCU”自动开关,等待5秒，闭合",
    },
    chatStep: {
      selector: "#RBLL-SB-2",
      text: "断开“VCU”自动开关",
      offset: { top: 10, left: 0 },
      avatar: driverAvatar,
    },
  },
  {
    type: "both",
    guideStep: {
      selector: "#RBLL-SB-2",
      text: "5秒后",
    },
    chatStep: {
      selector: "#RBLL-SB-2",
      text: "闭合“VCU”自动开关",
      offset: { top: 10, left: 0 },
      avatar: driverAvatar,
    },
  },
  {
    type: "guide",
    step: {
      selector: "#BP-0-r",
      text: "点击“主断合”按钮",
    },
  },
  {
    type: "chat",
    step: {
      selector: "#RBLL-SB-1",
      text: "“主断合”灯亮",
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
      text: "接通电话，呼叫行调。“行调，XX 次在 XX 站-XX 站上/下行区间，司机复位“VCU”，现已动车，列车运行正常。”",
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
      text: "“XX 次，司机复位“VCU”，现已动车，列车运行正常，行调收到。”",
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
export const screenContent = ["网压正常,受电弓正常升起", "临时停车"];

export const initState = {
  pairButton1l: false,
  pairButton1r: false,
  pairButton2l: false,
  pairButton2r: true,
  pairButton3l: false,
  pairButton3r: false,
};
