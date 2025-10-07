import driverAvatar from "../assets/imgs/user.png";
import dispatcherAvatar from "../assets/imgs/leader.png";
import guideAvatar from "../assets/imgs/characterImg.png";
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
      selector: "#demoGauge2",
      text: "请点击查看气压表是否为3Bar",
      // offset: { top: 50, left: 50 },
    },
  },
  {
    type: "chat",
    step: {
      selector: "#SZCK-R-2-5",
      text: "气压3Bar",
      offset: { top: 50, left: 50 },
      avatar: driverAvatar,
    },
  },
  {
    type: "chat",
    step: {
      selector: "#SZCK-R-2-2",
      text: "“行调，XX 次在XX 站-XX 站上/下行区间列车突发紧急制动，无法动车，司机申请中央缓解紧急制动。”",
      offset: { top: 100, left: -50 },
      avatar: driverAvatar,
    },
  },
  {
    type: "chat",
    step: {
      selector: "#SZCK-R-2-5",
      text: "“XX 次，申请中央缓解紧急制动，行调收到。”",
      offset: { top: 10, left: 0 },
      avatar: dispatcherAvatar,
    },
  },
  {
    type: "guide",
    step: {
      selector: "#DisplayScreen",
      text: "快点击显示屏上的按钮播放紧急广播",
      offset: { top: 40, left: 50 },
    },
  },
  {
    type: "chat",
    step: {
      selector: "#DisplayScreen",
      text: "XX 次，中央无法缓解紧制，司机执行车辆故障处理流程。”",
      avatar: dispatcherAvatar,
    },
  },
  {
    type: "chat",
    step: {
      selector: "#SZCK-R-2-2",
      text: "“中央无法缓解紧制，执行车辆故障处理流程，司机明白。”",
      offset: {
        top: 100,
        left: -50,
      },
      avatar: driverAvatar,
    },
  },
  {
    type: "guide",
    step: {
      selector: "#DriveModeButton",
      text: "驾驶员,将驾驶模式调成RM试试吧,别忘了注意气压表哦",
      offset: { top: 40, left: 50 },
    },
  },
  {
    type: "guide",
    step: {
      selector: "#DriveModeButton",
      text: "驾驶员,将驾驶模式调成RM试试吧,别忘了注意气压表哦",
      offset: { top: 40, left: 50 },
    },
  },
  {
    type: "guide",
    step: {
      selector: "#demoGauge2",
      text: "请点击查看气压表是否为3Bar",
      offset: { top: 40, left: 50 },
    },
  },
  {
    type: "chat",
    step: {
      selector: "#SZCK-R-2-2",
      text: "转RM模式 气压3Bar",
      offset: {
        top: 100,
        left: -50,
      },
      avatar: driverAvatar,
    },
  },
  {
    type: "guide",
    step: {
      selector: "#SZCK-L-2-2-1",
      text: "还是不行呢，再调整安全回路旁路按钮试试吧",
      offset: { top: 40, left: 50 },
    },
  },
  {
    type: "chat",
    step: {
      selector: "#SZCK-L-2-2-1",
      text: "“安全回路旁路”至“合”位",
      offset: {
        top: 100,
        left: -50,
      },
      avatar: driverAvatar,
    },
  },
  {
    type: "guide",
    step: {
      selector: "#SZCK-L-2-1-0",
      text: "只能再调整信号选择按钮试试了",
      offset: { top: 40, left: 10 },
    },
  },
  {
    type: "chat",
    step: {
      selector: "#SZCK-L-2-2-1",
      text: "“信号选择”开关至“信号切除”位",
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
      selector: "#SZCK-L-2-2-1",
      text: "成功了！快打电话报告行调",
      offset: {
        top: 100,
        left: -50,
      },
      avatar: guideAvatar,
    },
  },
  {
    type: "chat",
    step: {
      selector: "#SZCK-L-2-2-1",
      text: "行调，XX 次在XX 站-XX 站上/下行区间列车已动车，司机操作“安全回路旁路”至“合”位、“信号选择”开关至“信号切除”位，申请限速退出服务。”",
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
      selector: "#SZCK-L-2-2-1",
      text: "XX 次，申请限速退出服务，行调同意。",
      offset: {
        top: 10,
        left: -50,
      },
      avatar: dispatcherAvatar,
    },
  },
  {
    type: "none",
  },
];
export const screenContent = ["网压正常,车门状态正常", "播放紧急广播"];
