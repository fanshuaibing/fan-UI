module.exports = {
  base:'/fan-UI/',
  title: '凡人 UI 官网',
  description: '一个好用的 UI 框架',
  themeConfig:{
    sidebar: [
      {
        title:'入门',
        children:[
           '/install/',
            '/get-started/'
        ]
      },
      {
        title:'组件',
        children:[
            '/components/button.md',
            '/components/input.md',
            '/components/grid.md',
            '/components/layout.md',
            '/components/toast.md',
            '/components/tab.md',
            '/components/popover.md',
            '/components/collapse.md',
        ]
      }
    ]
  }
}