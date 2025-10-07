import driverAvatar from "../assets/imgs/user.png";
import dispatcherAvatar from "../assets/imgs/leader.png";
// import guideAvatar from "../assets/imgs/characterImg.png";
export const c3s1 = [
  {
    type: "guide",
    step: {
      selector: "#DisplayScreen",
      text: "请点击“显示屏”",
    },
  },
  {
    type: "chat",
    step: {
      selector: "#DriveModeButton",
      text: "所有辅助逆变器图标显示红点",
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
      text: "接通电话，呼叫行调。报告行调:“行调，XX 次在XX 站-XX 站上/下行区间“车辆显示屏”辅助逆变器图标显示红点，列车出现空调、空压机不工作，司机申请执行车辆故障处理流程。”",
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
      selector: "#BP-1-r",
      text: "点击“受电弓升”按钮",
    },
  },
  {
    type: "chat",
    step: {
      selector: "#mainKey",
      text: "查看主控钥匙",
      avatar: driverAvatar,
    },
  },
  {
    type: "chat",
    step: {
      selector: "#RBLL-SB-1",
      offset: {
        top: -100,
        left: 0,
      },
      text: "受电弓升起、“主控钥匙”在“开”位",
      avatar: driverAvatar,
    },
  },
  {
    type: "both",
    guideStep: {
      selector: "#BP-0-l",
      text: "主断路器分",
    },
    chatStep: {
      selector: "#BP-0-l",
      text: "主断路器分",
      offset: { top: 10, left: 0 },
      avatar: driverAvatar,
    },
  },
  {
    type: "both",
    guideStep: {
      selector: "#SZCK-L-2-1-8",
      text: "复位MVB",
    },
    chatStep: {
      selector: "#SZCK-L-2-1-8",
      text: "复位MVB",
      offset: { top: 10, left: 0 },
      avatar: driverAvatar,
    },
  },
  {
    type: "guide",
    step: {
      selector: "#BP-0-r",
      text: "合主断 合主断绿灯亮",
    },
  },
  {
    type: "chat",
    step: {
      selector: "#RBLL-SB-1",
      text: "接通电话，呼叫行调。报告行调:“行调，XX 次在XX 站-XX 站上/下行区间辅助逆变器图标红点，MVB 复位后已动车，申请退出服务。”",
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
export const screenContent = ["辅助逆变器图标显示红点", "临时停车"];
