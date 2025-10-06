import driverAvatar from "../assets/imgs/user.png";
import dispatcherAvatar from "../assets/imgs/leader.png";

export const c1s1 = [
  {
    type: "guide",
    step: {
      selector: "#BP-0-r",
      text: "依次点击亮起的三个绿灯",
    },
  },
  {
    type: "guide",
    step: {
      selector: "#BP-1-r",
      text: "依次点击亮起的三个绿灯",
    },
  },
  {
    type: "guide",
    step: {
      selector: "#BP-2-r",
      text: "依次点击亮起的三个绿灯",
    },
  },
  {
    type: "guide",
    step: {
      selector: "#DisplayScreen",
      text: "点击查看显示屏",
    },
  },
  {
    type: "chat",
    step: {
      selector: "#SZCK-R-2-2",
      text: "网压正常，车门状态正常",
      offset: { top: 90, left: -50 },
      avatar: driverAvatar,
    },
  },
  {
    type: "guide",
    step: {
      selector: "#DisplayScreen",
      text: "点击车辆显示屏的“临时停车”播放广播",
      offset: { top: 50, left: 50 },
    },
  },
  {
    type: "guide",
    step: {
      selector: "#SZCK-R-2-5",
      text: "点击按压“灯测试”按钮进行试灯",
      offset: { top: 50, left: 50 },
    },
  },
  {
    type: "guide",
    step: {
      selector: "#SB-0",
      text: "快点击看看“所有气制动缓解”灯是否亮起",
      offset: { top: 50, left: 50 },
    },
  },
  {
    type: "chat",
    step: {
      selector: "#SZCK-R-2-5",
      text: "试灯亮",
      offset: { top: 10, left: 0 },
      avatar: driverAvatar,
    },
  },
  {
    type: "guide",
    step: {
      selector: "#DisplayScreen",
      text: "请尝试动车,点击“车辆显示屏”看看制动状态界面",
      offset: { top: 40, left: 50 },
    },
  },
  {
    type: "chat",
    step: {
      selector: "#DisplayScreen",
      text: "无制动故障显示",
      offset: { top: 10, left: 0 },
      avatar: driverAvatar,
    },
  },
  {
    type: "both",
    guideStep: {
      selector: "#SZCK-L-2-1-5",
      text: "点击将“气制动旁路”按钮调整至“合”位试试",
      offset: { top: 40, left: 50 },
    },
    chatStep: {
      selector: "#SZCK-L-2-1-5",
      text: "“气制动旁路”至“合”位",
      offset: { top: 10, left: 0 },
      avatar: driverAvatar,
    },
  },
  {
    type: "both",
    guideStep: {
      selector: "#SZCK-L-2-1-6",
      text: "点击将“停放制动旁路”调整至“合”位并尝试动车试试",
    },
    chatStep: {
      selector: "#SZCK-L-2-1-6",
      text: "“停放制动旁路”至“合”位,并尝试动车",
      offset: { top: 10, left: 0 },
      avatar: driverAvatar,
    },
  },
  {
    type: "chat",
    step: {
      selector: "#SZCK-R-2-2",
      text: "接通电调呼叫行调 报告行调:“行调，XX次在XX站下行区间列车已动车，列车设备正常，司机操作了“气动制动器” 和 “停放制动器路”，列车功能缓解，运行正常，申请退出服务。”",
      offset: {
        top: 100,
        left: -50,
      },
      avatar: driverAvatar,
    },
  },
  {
    type: "chat",
    step: {
      selector: "#SZCK-R-2-2",
      text: "XX次,申请退出服务,行调同意",
      avatar: dispatcherAvatar,
    },
  },
  {
    type: "chat",
    step: {
      text: "挂断电话",
      avatar: driverAvatar,
    },
  },
  {
    type: "none",
  },
];
export const screenContent = "你好";
