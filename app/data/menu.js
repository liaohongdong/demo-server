const menus = [
  {
    module: "nextop-logistics",
    defaultRegister: true,
    devEntry: "//localhost:9002",
    depEntry: "http://logistics.nextop.cc/",
    routerBase: "/logistics",
    data: [
      {
        id: "1",
        title: "出货管理",
        icon: "el-icon-monitor",
        children: [
          {
            id: "1-1",
            title: "提货管理",
            name: 'Home',
            component: '/index',
            url: "/logistics"
          },
          {
            id: "1-2",
            title: "发货管理",
            name: 'About',
            component: '/about/index',
            url: "/logistics/about"
          }
        ]
      }
    ]
  },
  {
    module: "demo2",
    defaultRegister: false,
    devEntry: "//localhost:9010",
    depEntry: "http://demo2.nextop.cc",
    routerBase: "/demo2",
    data: [
      {
        id: "10",
        title: "demo2",
        icon: "el-icon-date",
        children: [
          {
            id: "10-1",
            title: "list1",
            name: 'List1',
            component: '/List',
            url: "/demo2"
          },
          {
            id: "10-2",
            name: 'list2',
            title: "Detail",
            component: '/Detail',
            url: "/demo2/detail"
          }
        ]
      }
    ]
  },
  {
    module: "demo3",
    defaultRegister: false,
    devEntry: "//localhost:9011",
    depEntry: "http://demo3.nextop.cc",
    routerBase: "/demo3",
    data: [
      {
        id: "11",
        title: "demo3",
        icon: "el-icon-date",
        children: [
          {
            id: "11-1",
            title: "list1",
            name: 'List1',
            component: '/List',
            url: "/demo3"
          },
          {
            id: "11-2",
            name: 'list3',
            title: "Detail",
            component: '/Detail',
            url: "/demo3/detail"
          }
        ]
      }
    ]
  },
  {
    module: "备货",
    defaultRegister: false,
    devEntry: "//localhost:9012",
    depEntry: "http://demand.nextop.cc",
    routerBase: "/demand",
    data: [
      {
        id: "12",
        title: "备货",
        icon: "el-icon-date",
        children: [
          {
            id: "12-1",
            title: "备货计划报表",
            name: 'report',
            component: '/report',
            url: "/demand/report"
          },
          {
            id: "12-2",
            title: "提货计划",
            name: 'delivery',
            component: '/delivery/index',
            url: "/demand/delivery"
          },
          {
            id: "12-3",
            title: "提货计划",
            name: 'shipment',
            component: '/shipment',
            url: "/demand/shipment"
          }
        ]
      }
    ]
  },
]

module.exports = menus
