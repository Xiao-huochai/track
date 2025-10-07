import driverAvatar from "../assets/imgs/user.png";
import dispatcherAvatar from "../assets/imgs/leader.png";
import guideAvatar from "../assets/imgs/characterImg.png";
export const c1s2 = [
  {
    type: "guide",
    step: {
      selector: "#BP-2",
      text: "看看“停放制动缓解”灯,“停放制动施加”灯是否正常",
    },
  },
  {
    type: "guide",
    step: {
      selector: "#DisplayScreen",
      text: "点击显示屏，查看制动状态页面是否显示为“P”",
    },
  },
  {
    type: "chat",
    step: {
      selector: "#SZCK-R-2-2",
      text: "试灯亮 制动状态图标显示为“P”",
      offset: { top: 90, left: -50 },
      avatar: driverAvatar,
    },
  },
  {
    type: "chat",
    step: {
      selector: "#SZCK-R-2-2",
      text: "接通电话：呼叫行调“行调，XX 次在XX 站-XX 站上/下行区间列车出现停放制动施加和缓解灯均不亮，司机申请执行车辆故障处理流程。”",
      offset: { top: 90, left: -50 },
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
    type: "chat",
    step: {
      selector: "#SZCK-R-2-2",
      text: "结束通话",
      offset: { top: 90, left: -50 },
      avatar: driverAvatar,
    },
  },
  {
    type: "guide",
    step: {
      selector: "#DisplayScreen",
      text: "点击屏幕上的临时停车",
      // offset: { top: 50, left: 50 },
    },
  },
  {
    type: "both",
    guideStep: {
      selector: "#BP-2-r",
      text: "再点击“停放制动缓解”按钮试试吧",
    },
    chatStep: {
      selector: "#DriveModeBUtton",
      text: "按下“停放制动缓解”按钮",
      offset: { top: 150, left: 50 },
      avatar: driverAvatar,
    },
  },
  {
    type: "guide",
    step: {
      selector: "#DisplayScreen",
      text: "点击显示屏看看停放制动是否缓解",
      // offset: { top: 50, left: 50 },
    },
  },
  {
    type: "chat",
    step: {
      selector: "#SZCK-R-2-5",
      text: "停放制动未缓解",
      offset: { top: 50, left: 50 },
      avatar: driverAvatar,
    },
  },
  {
    type: "both",
    guideStep: {
      selector: "#SZCK-L-2-1-6",
      text: "试试点击调整“停放制动旁路”按钮至“合”位，做列车溜动试验",
    },
    chatStep: {
      selector: "#SZCK-L-2-1-6",
      text: "“停放制动旁路”至“合”位",
      offset: { top: 10, left: 0 },
      avatar: driverAvatar,
    },
  },
  {
    type: "chat",
    step: {
      selector: "#SZCK-L-2-2-5",
      text: "请以不超过 3km/h 速度做溜动试验，确认停放制动状态",
      avatar: guideAvatar,
    },
  },
  {
    type: "chat",
    step: {
      selector: "#SZCK-L-2-2-3",
      text: "列车无抱闸",
      avatar: driverAvatar,
    },
  },
  {
    type: "chat",
    step: {
      selector: "#SZCK-L-2-2-5",
      text: "接通电话 呼叫行调报告行调：“行调，“XX 次在 XX 站-XX 站上/下行区间列车已动车，列车设备正常，司机操作了“停放制动旁路”，列车无抱闸现象，司机申请退出服务。”",
      avatar: driverAvatar,
    },
  },
  {
    type: "chat",
    step: {
      selector: "#SZCK-L-2-2-3",
      text: "“XX 次，申请退出服务，行调同意。”",
      offset: {
        top: 100,
        left: -50,
      },
      avatar: dispatcherAvatar,
    },
  },
  {
    type: "none",
  },
];
export const screenContent = ["P", "停放制动未缓解"];
