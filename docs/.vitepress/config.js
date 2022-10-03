export default {
  outDir: './dist',
  themeConfig: {
    siteTitle: "Units-UI",
    logo: "/units-logo-2.png",
    nav: nav(),
    socialLinks: [
      { icon: "github", link: "https://github.com/GradyYuan256/zao-ui" },
    ],
    footer: {
      message: "Released under the MIT License.",
      copyright: "Copyright © 2021-present GradyYuan256",
    },
    sidebar: {
      "/component/": sidebarComp(),
    },
  },
  appearance: false,
  title: "Units-UI",
  description: "Just playing around.",
};

function nav() {
  return [
    { text: "组件", link: "/component/install", activeMatch: "/component/" },
    { text: "说明", link: "/intro/index" }
  ];
}

function sidebarComp() {
  return [
    {
      text: "Introduction",
      collapsible: true,
      items: [
        { text: "安装", link: "/component/install" },
        { text: "快速上手", link: "/component/getting-started" },
      ],
    },
    {
      text: "Components",
      collapsible: true,
      items: [
        { text: "Icon 图标", link: "/component/icon/" },
        { text: "Button 按钮", link: "/component/button/" },
        { text: "Radio 单选框", link: "/component/radio/" },
        { text: "Checkbox 多选框", link: "/component/checkbox/" },
        { text: "Switch 开关", link: "/component/switch/" },
        { text: "Input 输入框", link: "/component/input/" },
        { text: "Dialog 对话框", link: "/component/dialog/" },
        { text: "Toast 提示", link: "/component/toast/" },
        { text: "Message 信息提示", link: "/component/message/" },
        { text: "MessageBox 弹框", link: "/component/message-box/" },
        { text: "Pagination 分页器", link: "/component/pagination/" },
      ],
    },
  ];
}
